import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'vnlp-table',
  templateUrl: './vnlp-table.component.html',
  styleUrls: ['./vnlp-table.component.scss'],
})
export class VnlpTableComponent implements OnInit {
  @Input() columns: { title: string; key: string; sortable?: boolean }[] = [];
  @Input() dataTable: any = [];
  @Output() dataTableChange = new EventEmitter();

  // page status
  @Input() pageOptions: {
    currentPage: number;
    pageSize: number;
    totalRecord: number;
    sort?: any;
    sortField?: string;
    pagination?: boolean;
  } = {
    currentPage: 1,
    pageSize: 0,
    totalRecord: 0,
    sort: 1,
    sortField: '',
    pagination: true,
  };

  @Input() editable: boolean = true;
  @Input() deletable: boolean = true;
  @Input() selectable: boolean = false;
  @Input() selectKey: string = '';
  @Input() key: any = Date.now().toString(36);

  @Output() onPageOptionsChange = new EventEmitter();
  @Output() onDeleteRecord = new EventEmitter();
  @Output() onEditRecord = new EventEmitter();

  lastPage: number = 0;
  pageStatusSubject = new Subject<number>();
  checkedAllSubject = new Subject<any>();
  checkedAll = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.pageOptions?.pagination === undefined) {
      this.pageOptions.pagination = true;
    }

    this.pageStatusSubject.pipe(debounceTime(300)).subscribe(() => {
      this.syncPageOptionsWithUrl();
    });

    this.checkedAllSubject.subscribe(() => {
      this.checkedAll = !this.checkedAll;
      this.dataTable = this.dataTable.map((data: any) => {
        data[this.selectKey] = this.checkedAll;
        return data;
      });
    });

    this.lastPage = Math.ceil(
      this.pageOptions.totalRecord / this.pageOptions.pageSize,
    );
  }

  handleCheckedAll() {
    this.checkedAllSubject.next(1);
  }

  handleShowCheckedAll() {
    this.checkedAll = this.dataTable.every((data: any) => data[this.selectKey]);
  }

  syncPageOptionsWithUrl() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        currentPage: this.pageOptions.currentPage,
        sortField: this.pageOptions.sortField,
        sort: this.pageOptions.sort,
      },
      queryParamsHandling: 'merge',
    });

    this.onPageOptionsChange.emit({
      currentPage: this.pageOptions.currentPage,
      sortField: this.pageOptions.sortField,
      sort: this.pageOptions.sort,
    });
  }

  get pages(): number[] {
    let start = 1;
    let end = Math.min(this.lastPage, 5);

    if (this.lastPage > 5) {
      if (this.pageOptions.currentPage <= 3) {
        end = 5;
      } else if (this.pageOptions.currentPage >= this.lastPage - 2) {
        start = this.lastPage - 4;
        end = this.lastPage;
      } else {
        start = this.pageOptions.currentPage - 2;
        end = this.pageOptions.currentPage + 2;
      }
    }

    if (this.pageOptions.totalRecord === 0) {
      start = 1;
      end = 1;
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  prevPage() {
    this.goToPage(this.pageOptions.currentPage - 1);
  }

  nextPage() {
    this.goToPage(this.pageOptions.currentPage + 1);
  }

  goToLastPage() {
    this.goToPage(this.lastPage);
  }

  goToFirstPage() {
    this.goToPage(1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.lastPage) return;
    if (page === this.pageOptions.currentPage) return;
    this.pageOptions.currentPage = page;
    this.pageStatusSubject.next(page);
  }

  getDisplayText() {
    if (this.pageOptions.totalRecord === 0) {
      return 'Showing 0 to 0 of 0 entries';
    }

    const start =
      (this.pageOptions.currentPage - 1) * this.pageOptions.pageSize + 1;
    const end = start - 1 + this.pageOptions.pageSize;
    const total = this.pageOptions.totalRecord;

    return `Showing ${start} to ${end} of ${total} entries`;
  }

  handleSort(key: any) {
    this.pageOptions.sortField = key;
    this.pageOptions.sort = this.pageOptions.sort
      ? this.pageOptions.sort * -1
      : 1;
    this.syncPageOptionsWithUrl();
  }

  handleDeleteRecord(id: string) {
    this.onDeleteRecord.emit(id);
  }

  handleEditRecord(id: string) {
    this.onEditRecord.emit(id);
  }
}
