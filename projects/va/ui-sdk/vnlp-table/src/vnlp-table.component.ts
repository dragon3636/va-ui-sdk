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
  @Input() page: number = 1;
  @Input() length: number = 10;
  @Input() recordsTotal: number = 100;
  @Input() dataSource: any = [];
  @Input() columns: any = [];
  @Input() sort: number = 1;
  @Input() sortField: string = '';
  @Output() pageChange = new EventEmitter<number>();
  lastPage: number = Math.ceil(this.recordsTotal / this.length);
  pageChangeSubject = new Subject<number>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;
      this.length = +params['length'] || 10;
    });

    this.pageChangeSubject.pipe(debounceTime(300)).subscribe(page => {
      this.syncPaginatorWithUrl(page);
    });
  }

  syncPaginatorWithUrl(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }

  get pages(): number[] {
    let start = 1;
    let end = Math.min(this.lastPage, 5);

    if (this.lastPage > 5) {
      if (this.page <= 3) {
        end = 5;
      } else if (this.page >= this.lastPage - 2) {
        start = this.lastPage - 4;
        end = this.lastPage;
      } else {
        start = this.page - 2;
        end = this.page + 2;
      }
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  prevPage() {
    this.goToPage(this.page - 1);
  }

  nextPage() {
    this.goToPage(this.page + 1);
  }

  goToLastPage() {
    this.goToPage(this.lastPage);
  }

  goToFirstPage() {
    this.goToPage(1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.lastPage) return;
    if (page === this.page) return;
    this.page = page;
    this.pageChangeSubject.next(page);
    this.pageChange.emit(page);
  }

  getDisplayText() {
    const start = (this.page - 1) * this.length + 1;
    const end = start - 1 + this.length;
    const total = this.recordsTotal;

    return `Showing ${start} to ${end} of ${total} entries`;
  }

  handleSort(key: any) {
    const selectedColumnIndex = this.columns.findIndex(
      (a: any) => a.key === key,
    );

    this.columns[selectedColumnIndex].sortStatus =
      this.columns[selectedColumnIndex].sortStatus === 'asc' ? 'desc' : 'asc';

    this.columns = this.columns.map((column: any, index: number) => {
      if (selectedColumnIndex === index) {
        return column;
      }
      column.sortStatus = 'default';
      return column;
    });
  }
}
