import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpSearchComponent implements OnInit {
    searchText: string | '';
    searching: boolean;
    loading: boolean;
    private searchDecouncer$;
    constructor();
    ngOnInit(): void;
    private setupSearchDebouncer;
    onSearchInputChange(term: string): void;
    onChange(): void;
    deleteSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpSearchComponent, "vnlp-search", never, {}, {}, never, never, false>;
}
