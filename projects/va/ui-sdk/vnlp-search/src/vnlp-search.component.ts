import { Component, OnInit, Input } from '@angular/core';
import { Subject, BehaviorSubject, tap } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'vnlp-search',
  templateUrl: './vnlp-search.component.html',
  styleUrls: ['./vnlp-search.component.scss'],
})
export class VnlpSearchComponent implements OnInit {
  searchText!: string | '';
  searching = false;
  loading = false;

  private searchDecouncer$: Subject<string> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.setupSearchDebouncer();
  }

  private setupSearchDebouncer(): void {
    // Subscribe to `searchDecouncer$` values,
    // but pipe through `debounceTime` and `distinctUntilChanged`
    this.searchDecouncer$
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        tap(() => (this.loading = true))
      )
      .subscribe((term: string) => {
        // Remember value after debouncing
        this.searching = false;
        // Do the actual search
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
        }, 2000);

        // this.loading = false
        console.log(term);
      });
  }

  public onSearchInputChange(term: string): void {
    //Called whenever the input is changed, send the value to debouncing observable
    if (this.searchText != '') {
      this.searching = true;
      this.searchDecouncer$.next(term);
    } else {
      this.searching = false;
    }
  }

  onChange() {
    if (this.searchText != '') {
      this.searching = true;
    } else {
      this.searching = false;
    }
  }

  deleteSearch() {
    this.searchText = '';
    this.searching = false;
  }
}
