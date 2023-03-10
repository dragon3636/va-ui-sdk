import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class VnlpSearchComponent {
    constructor() {
        this.searching = false;
        this.loading = false;
        this.searchDecouncer$ = new Subject();
    }
    ngOnInit() {
        this.setupSearchDebouncer();
    }
    setupSearchDebouncer() {
        // Subscribe to `searchDecouncer$` values,
        // but pipe through `debounceTime` and `distinctUntilChanged`
        this.searchDecouncer$
            .pipe(debounceTime(2000), distinctUntilChanged(), tap(() => (this.loading = true)))
            .subscribe((term) => {
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
    onSearchInputChange(term) {
        //Called whenever the input is changed, send the value to debouncing observable
        if (this.searchText != '') {
            this.searching = true;
            this.searchDecouncer$.next(term);
        }
        else {
            this.searching = false;
        }
    }
    onChange() {
        if (this.searchText != '') {
            this.searching = true;
        }
        else {
            this.searching = false;
        }
    }
    deleteSearch() {
        this.searchText = '';
        this.searching = false;
    }
}
VnlpSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpSearchComponent, selector: "vnlp-search", ngImport: i0, template: "<div\r\n  class=\"absolute top-[10px] left-[10px] flex justify-between items-center w-[202px] h-[40px] rounded-[8px] bg-neutral-7 py-[8px] pr-[14px] pl-[8px] hover:border-[1px] hover:border-solid hover:border-stroke hover:bg-neutral-8 focus-within:border-[1px] focus-within:border-primary focus-within:bg-neutral-8\"\r\n>\r\n  <div class=\"flex items-center gap-[8px]\">\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"loading === true ? iconLoading : iconSearch\"\r\n    ></ng-container>\r\n\r\n    <ng-template #iconLoading>\r\n      <div>\r\n        <svg\r\n          class=\"h-[24px] w-[24px] animate-spin stroke-neutral-4\"\r\n          viewBox=\"0 0 256 256\"\r\n        >\r\n          <line\r\n            x1=\"128\"\r\n            y1=\"32\"\r\n            x2=\"128\"\r\n            y2=\"64\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"195.9\"\r\n            y1=\"60.1\"\r\n            x2=\"173.3\"\r\n            y2=\"82.7\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"224\"\r\n            y1=\"128\"\r\n            x2=\"192\"\r\n            y2=\"128\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"195.9\"\r\n            y1=\"195.9\"\r\n            x2=\"173.3\"\r\n            y2=\"173.3\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"128\"\r\n            y1=\"224\"\r\n            x2=\"128\"\r\n            y2=\"192\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"60.1\"\r\n            y1=\"195.9\"\r\n            x2=\"82.7\"\r\n            y2=\"173.3\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"32\"\r\n            y1=\"128\"\r\n            x2=\"64\"\r\n            y2=\"128\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"60.1\"\r\n            y1=\"60.1\"\r\n            x2=\"82.7\"\r\n            y2=\"82.7\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n        </svg>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template #iconSearch>\r\n      <span class=\"text-neutral-4 text-[18px] font-bold\">\r\n        <i [class]=\"'icon-vnlp-icon-search-normal-1-linear'\"></i>\r\n      </span>\r\n    </ng-template>\r\n\r\n    <input\r\n      [(ngModel)]=\"searchText\"\r\n      (ngModelChange)=\"onSearchInputChange($event)\"\r\n      class=\"h-full w-full outline-none text-sm font-normal bg-transparent text-neutral-2\"\r\n      type=\"text\"\r\n      id=\"search\"\r\n      placeholder=\"Search\"\r\n    />\r\n  </div>\r\n  <span\r\n    *ngIf=\"searchText\"\r\n    (click)=\"deleteSearch()\"\r\n    class=\"text-neutral-4 text-[18px] font-bold\"\r\n  >\r\n    <i [class]=\"'icon-vnlp-icon-close-linear'\"></i>\r\n  </span>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-search', template: "<div\r\n  class=\"absolute top-[10px] left-[10px] flex justify-between items-center w-[202px] h-[40px] rounded-[8px] bg-neutral-7 py-[8px] pr-[14px] pl-[8px] hover:border-[1px] hover:border-solid hover:border-stroke hover:bg-neutral-8 focus-within:border-[1px] focus-within:border-primary focus-within:bg-neutral-8\"\r\n>\r\n  <div class=\"flex items-center gap-[8px]\">\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"loading === true ? iconLoading : iconSearch\"\r\n    ></ng-container>\r\n\r\n    <ng-template #iconLoading>\r\n      <div>\r\n        <svg\r\n          class=\"h-[24px] w-[24px] animate-spin stroke-neutral-4\"\r\n          viewBox=\"0 0 256 256\"\r\n        >\r\n          <line\r\n            x1=\"128\"\r\n            y1=\"32\"\r\n            x2=\"128\"\r\n            y2=\"64\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"195.9\"\r\n            y1=\"60.1\"\r\n            x2=\"173.3\"\r\n            y2=\"82.7\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"224\"\r\n            y1=\"128\"\r\n            x2=\"192\"\r\n            y2=\"128\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"195.9\"\r\n            y1=\"195.9\"\r\n            x2=\"173.3\"\r\n            y2=\"173.3\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"128\"\r\n            y1=\"224\"\r\n            x2=\"128\"\r\n            y2=\"192\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"60.1\"\r\n            y1=\"195.9\"\r\n            x2=\"82.7\"\r\n            y2=\"173.3\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"32\"\r\n            y1=\"128\"\r\n            x2=\"64\"\r\n            y2=\"128\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n          <line\r\n            x1=\"60.1\"\r\n            y1=\"60.1\"\r\n            x2=\"82.7\"\r\n            y2=\"82.7\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"24\"\r\n          ></line>\r\n        </svg>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template #iconSearch>\r\n      <span class=\"text-neutral-4 text-[18px] font-bold\">\r\n        <i [class]=\"'icon-vnlp-icon-search-normal-1-linear'\"></i>\r\n      </span>\r\n    </ng-template>\r\n\r\n    <input\r\n      [(ngModel)]=\"searchText\"\r\n      (ngModelChange)=\"onSearchInputChange($event)\"\r\n      class=\"h-full w-full outline-none text-sm font-normal bg-transparent text-neutral-2\"\r\n      type=\"text\"\r\n      id=\"search\"\r\n      placeholder=\"Search\"\r\n    />\r\n  </div>\r\n  <span\r\n    *ngIf=\"searchText\"\r\n    (click)=\"deleteSearch()\"\r\n    class=\"text-neutral-4 text-[18px] font-bold\"\r\n  >\r\n    <i [class]=\"'icon-vnlp-icon-close-linear'\"></i>\r\n  </span>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; } });

class VnlpSearchModule {
}
VnlpSearchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpSearchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpSearchModule, declarations: [VnlpSearchComponent], imports: [CommonModule, FormsModule], exports: [VnlpSearchComponent] });
VnlpSearchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSearchModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpSearchComponent],
                    imports: [CommonModule, FormsModule],
                    exports: [VnlpSearchComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpSearchComponent, VnlpSearchModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-search.mjs.map
