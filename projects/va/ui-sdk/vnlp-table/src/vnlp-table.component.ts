import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vnlp-table',
  templateUrl: './vnlp-table.component.html',
  styleUrls: ['./vnlp-table.component.scss'],
})
export class VnlpTableComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() totalItems: number = 100;
  @Input() data = [{}];
  @Output() pageChange = new EventEmitter<number>();
  lastPage: number = Math.ceil(this.totalItems / this.itemsPerPage);

  ngOnInit(): void {}

  get pages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    let start = 1;
    let end = Math.min(totalPages, 5);

    if (totalPages > 5) {
      if (this.currentPage <= 3) {
        end = 5;
      } else if (this.currentPage >= totalPages - 2) {
        start = totalPages - 4;
        end = totalPages;
      } else {
        start = this.currentPage - 2;
        end = this.currentPage + 2;
      }
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  goToPage(page: number) {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    if (page === this.currentPage) return;
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  getDisplayText() {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    const total = this.totalItems;

    return `Showing ${start} to ${end} of ${total} entries`;
  }
}
