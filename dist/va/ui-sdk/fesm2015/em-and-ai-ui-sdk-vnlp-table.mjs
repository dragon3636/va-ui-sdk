import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i1 from '@angular/router';
import * as i2 from '@em-and-ai/ui-sdk/vnlp-checkbox';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpTableComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.columns = [];
        this.dataTable = [];
        this.dataTableChange = new EventEmitter();
        // page status
        this.pageOptions = {
            currentPage: 1,
            pageSize: 0,
            totalRecord: 0,
            sort: 1,
            sortField: '',
            pagination: true,
        };
        this.editable = true;
        this.deletable = true;
        this.selectable = false;
        this.selectKey = '';
        this.key = Date.now().toString(36);
        this.onPageOptionsChange = new EventEmitter();
        this.onDeleteRecord = new EventEmitter();
        this.onEditRecord = new EventEmitter();
        this.lastPage = 0;
        this.pageStatusSubject = new Subject();
        this.checkedAllSubject = new Subject();
        this.checkedAll = false;
    }
    ngOnInit() {
        var _a;
        if (((_a = this.pageOptions) === null || _a === void 0 ? void 0 : _a.pagination) === undefined) {
            this.pageOptions.pagination = true;
        }
        this.pageStatusSubject.pipe(debounceTime(300)).subscribe(() => {
            this.syncPageOptionsWithUrl();
        });
        this.checkedAllSubject.subscribe(() => {
            this.checkedAll = !this.checkedAll;
            this.dataTable = this.dataTable.map((data) => {
                data[this.selectKey] = this.checkedAll;
                return data;
            });
        });
        this.lastPage = Math.ceil(this.pageOptions.totalRecord / this.pageOptions.pageSize);
    }
    handleCheckedAll() {
        this.checkedAllSubject.next(1);
    }
    handleShowCheckedAll() {
        this.checkedAll = this.dataTable.every((data) => data[this.selectKey]);
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
    get pages() {
        let start = 1;
        let end = Math.min(this.lastPage, 5);
        if (this.lastPage > 5) {
            if (this.pageOptions.currentPage <= 3) {
                end = 5;
            }
            else if (this.pageOptions.currentPage >= this.lastPage - 2) {
                start = this.lastPage - 4;
                end = this.lastPage;
            }
            else {
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
    goToPage(page) {
        if (page < 1 || page > this.lastPage)
            return;
        if (page === this.pageOptions.currentPage)
            return;
        this.pageOptions.currentPage = page;
        this.pageStatusSubject.next(page);
    }
    getDisplayText() {
        if (this.pageOptions.totalRecord === 0) {
            return 'Showing 0 to 0 of 0 entries';
        }
        const start = (this.pageOptions.currentPage - 1) * this.pageOptions.pageSize + 1;
        const end = start - 1 + this.pageOptions.pageSize;
        const total = this.pageOptions.totalRecord;
        return `Showing ${start} to ${end} of ${total} entries`;
    }
    handleSort(key) {
        this.pageOptions.sortField = key;
        this.pageOptions.sort = this.pageOptions.sort
            ? this.pageOptions.sort * -1
            : 1;
        this.syncPageOptionsWithUrl();
    }
    handleDeleteRecord(id) {
        this.onDeleteRecord.emit(id);
    }
    handleEditRecord(id) {
        this.onEditRecord.emit(id);
    }
}
VnlpTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTableComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
VnlpTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpTableComponent, selector: "vnlp-table", inputs: { columns: "columns", dataTable: "dataTable", pageOptions: "pageOptions", editable: "editable", deletable: "deletable", selectable: "selectable", selectKey: "selectKey", key: "key" }, outputs: { dataTableChange: "dataTableChange", onPageOptionsChange: "onPageOptionsChange", onDeleteRecord: "onDeleteRecord", onEditRecord: "onEditRecord" }, ngImport: i0, template: "<div class=\"vnlp-table-container\">\r\n  <div class=\"loading\"></div>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th class=\"check-all-record\" *ngIf=\"selectable\">\r\n          <vnlp-checkbox\r\n            [checked]=\"checkedAll\"\r\n            (onChange)=\"handleCheckedAll()\"\r\n          ></vnlp-checkbox>\r\n        </th>\r\n        <th\r\n          *ngFor=\"let col of columns\"\r\n          (click)=\"col.sortable && handleSort(col.key)\"\r\n        >\r\n          <i\r\n            *ngIf=\"col.sortable\"\r\n            [ngClass]=\"{\r\n              'cursor-pointer icon icon-vnlp-icon-upanddown-line transition-all ease-in-out duration-200 rotate-180': true,\r\n              'icon-vnlp-icon-arrow-up-line': pageOptions.sortField === col.key,\r\n              'rotate-180':\r\n                pageOptions.sortField === col.key && pageOptions.sort === -1\r\n            }\"\r\n          ></i>\r\n          <span>{{ col.title }}</span>\r\n        </th>\r\n        <th *ngIf=\"columns.length\" class=\"action-header\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"dataTable.length; else emptyData\">\r\n      <tr *ngFor=\"let item of dataTable\">\r\n        <td *ngIf=\"selectable\">\r\n          <vnlp-checkbox\r\n            [(checked)]=\"item[selectKey]\"\r\n            (onChange)=\"handleShowCheckedAll()\"\r\n          ></vnlp-checkbox>\r\n        </td>\r\n        <td *ngFor=\"let col of columns\">{{ item[col.key] }}</td>\r\n        <td class=\"action-col\">\r\n          <div class=\"flex justify-end\">\r\n            <i\r\n              *ngIf=\"deletable\"\r\n              class=\"icon icon-vnlp-icon-trash-linear hidden\"\r\n              (click)=\"handleDeleteRecord(item[key])\"\r\n            ></i>\r\n            <i\r\n              *ngIf=\"editable\"\r\n              class=\"icon icon-vnlp-icon-magicpen-linear hidden\"\r\n              (click)=\"handleEditRecord(item[key])\"\r\n            ></i>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <ng-template #emptyData>\r\n      <tr>\r\n        <td [attr.colspan]=\"columns.length + 2\" class=\"empty-data\">\r\n          <span>No data</span>\r\n          <p>Create first data now!</p>\r\n          <div class=\"create-button inline-flex items-center\">\r\n            <i class=\"icon icon-vnlp-icon-add-linear\"></i>\r\n            <span>Create</span>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </table>\r\n  <div *ngIf=\"pageOptions.pagination\" class=\"table-footer\">\r\n    <p class=\"counter\">{{ getDisplayText() }}</p>\r\n    <div class=\"paginator\">\r\n      <button\r\n        [disabled]=\"pageOptions.currentPage == 1\"\r\n        (click)=\"prevPage()\"\r\n        class=\"paginator-prev icon icon-vnlp-icon-arrow-left-2-linear\"\r\n      ></button>\r\n      <ng-container *ngFor=\"let pageNumber of pages\">\r\n        <button\r\n          class=\"page-number\"\r\n          [class.active]=\"pageNumber == pageOptions.currentPage\"\r\n          (click)=\"goToPage(pageNumber)\"\r\n        >\r\n          {{ pageNumber }}\r\n        </button>\r\n      </ng-container>\r\n      <button\r\n        [disabled]=\"pageOptions.currentPage == lastPage || lastPage === 0\"\r\n        (click)=\"nextPage()\"\r\n        class=\"paginator-next icon icon-vnlp-icon-arrow-right-3-linear\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".vnlp-table-container{border-radius:12px;overflow:hidden;box-shadow:0 0 1px 1px #e6e8ec;background-color:#fff;position:relative}.vnlp-table-container table{width:100%;border-collapse:collapse;font-size:14px;background-color:#fff}.vnlp-table-container table tbody tr{max-height:44px}.vnlp-table-container table tbody tr:hover{background-color:#f6f8fa}.vnlp-table-container table tbody tr:hover .icon{display:block}.vnlp-table-container table th,.vnlp-table-container table td{border-bottom:1px solid #e6e8ec;text-align:left}.vnlp-table-container table th.empty-data,.vnlp-table-container table td.empty-data{text-align:center;padding-top:40px}.vnlp-table-container table th.empty-data span,.vnlp-table-container table td.empty-data span{font-size:16px;font-weight:700;color:#23262f}.vnlp-table-container table th.empty-data p,.vnlp-table-container table td.empty-data p{font-size:14px;color:#b1b5c3}.vnlp-table-container table th.empty-data .create-button,.vnlp-table-container table td.empty-data .create-button{cursor:pointer}.vnlp-table-container table th.empty-data .create-button i,.vnlp-table-container table th.empty-data .create-button span,.vnlp-table-container table td.empty-data .create-button i,.vnlp-table-container table td.empty-data .create-button span{color:#007df9}.vnlp-table-container table th{padding:16px;color:#777e90;font-size:14px;font-weight:500;cursor:pointer;-webkit-user-select:none;user-select:none}.vnlp-table-container table th.action-header{text-align:end}.vnlp-table-container table th.check-all-record{width:56px}.vnlp-table-container table th:hover{background-color:#f6f8fa}.vnlp-table-container table td{padding:10px 16px}.vnlp-table-container table td.action-col{width:100px;padding:0 16px}.vnlp-table-container table td .icon{font-size:18px;cursor:pointer}.vnlp-table-container .table-footer{display:flex;align-items:center;justify-content:space-between;padding:24px 20px}.vnlp-table-container .table-footer .counter{font-size:14px;color:#777e90}.vnlp-table-container .table-footer .paginator{display:flex;justify-content:center;align-items:center;gap:10px}.vnlp-table-container .table-footer .paginator .paginator-prev,.vnlp-table-container .table-footer .paginator .paginator-next,.vnlp-table-container .table-footer .paginator .page-number{width:32px;height:32px;border:1px solid #e6e8ec;border-radius:4px;font-size:14px}.vnlp-table-container .table-footer .paginator .paginator-prev:hover,.vnlp-table-container .table-footer .paginator .paginator-next:hover,.vnlp-table-container .table-footer .paginator .page-number:hover{border:1px solid #007df9}.vnlp-table-container .table-footer .paginator .paginator-prev:disabled,.vnlp-table-container .table-footer .paginator .paginator-next:disabled,.vnlp-table-container .table-footer .paginator .page-number:disabled{cursor:not-allowed;border:1px solid #e6e8ec}.vnlp-table-container .table-footer .paginator .page-number.active{background-color:#007df9;color:#fff}\n"], dependencies: [{ kind: "component", type: i2.VnlpCheckboxComponent, selector: "vnlp-checkbox", inputs: ["label", "name", "disabled", "checked", "labelPosition", "isShowInList", "isShowDivider"], outputs: ["checkedChange", "onChange"] }, { kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-table', template: "<div class=\"vnlp-table-container\">\r\n  <div class=\"loading\"></div>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th class=\"check-all-record\" *ngIf=\"selectable\">\r\n          <vnlp-checkbox\r\n            [checked]=\"checkedAll\"\r\n            (onChange)=\"handleCheckedAll()\"\r\n          ></vnlp-checkbox>\r\n        </th>\r\n        <th\r\n          *ngFor=\"let col of columns\"\r\n          (click)=\"col.sortable && handleSort(col.key)\"\r\n        >\r\n          <i\r\n            *ngIf=\"col.sortable\"\r\n            [ngClass]=\"{\r\n              'cursor-pointer icon icon-vnlp-icon-upanddown-line transition-all ease-in-out duration-200 rotate-180': true,\r\n              'icon-vnlp-icon-arrow-up-line': pageOptions.sortField === col.key,\r\n              'rotate-180':\r\n                pageOptions.sortField === col.key && pageOptions.sort === -1\r\n            }\"\r\n          ></i>\r\n          <span>{{ col.title }}</span>\r\n        </th>\r\n        <th *ngIf=\"columns.length\" class=\"action-header\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"dataTable.length; else emptyData\">\r\n      <tr *ngFor=\"let item of dataTable\">\r\n        <td *ngIf=\"selectable\">\r\n          <vnlp-checkbox\r\n            [(checked)]=\"item[selectKey]\"\r\n            (onChange)=\"handleShowCheckedAll()\"\r\n          ></vnlp-checkbox>\r\n        </td>\r\n        <td *ngFor=\"let col of columns\">{{ item[col.key] }}</td>\r\n        <td class=\"action-col\">\r\n          <div class=\"flex justify-end\">\r\n            <i\r\n              *ngIf=\"deletable\"\r\n              class=\"icon icon-vnlp-icon-trash-linear hidden\"\r\n              (click)=\"handleDeleteRecord(item[key])\"\r\n            ></i>\r\n            <i\r\n              *ngIf=\"editable\"\r\n              class=\"icon icon-vnlp-icon-magicpen-linear hidden\"\r\n              (click)=\"handleEditRecord(item[key])\"\r\n            ></i>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <ng-template #emptyData>\r\n      <tr>\r\n        <td [attr.colspan]=\"columns.length + 2\" class=\"empty-data\">\r\n          <span>No data</span>\r\n          <p>Create first data now!</p>\r\n          <div class=\"create-button inline-flex items-center\">\r\n            <i class=\"icon icon-vnlp-icon-add-linear\"></i>\r\n            <span>Create</span>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </table>\r\n  <div *ngIf=\"pageOptions.pagination\" class=\"table-footer\">\r\n    <p class=\"counter\">{{ getDisplayText() }}</p>\r\n    <div class=\"paginator\">\r\n      <button\r\n        [disabled]=\"pageOptions.currentPage == 1\"\r\n        (click)=\"prevPage()\"\r\n        class=\"paginator-prev icon icon-vnlp-icon-arrow-left-2-linear\"\r\n      ></button>\r\n      <ng-container *ngFor=\"let pageNumber of pages\">\r\n        <button\r\n          class=\"page-number\"\r\n          [class.active]=\"pageNumber == pageOptions.currentPage\"\r\n          (click)=\"goToPage(pageNumber)\"\r\n        >\r\n          {{ pageNumber }}\r\n        </button>\r\n      </ng-container>\r\n      <button\r\n        [disabled]=\"pageOptions.currentPage == lastPage || lastPage === 0\"\r\n        (click)=\"nextPage()\"\r\n        class=\"paginator-next icon icon-vnlp-icon-arrow-right-3-linear\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".vnlp-table-container{border-radius:12px;overflow:hidden;box-shadow:0 0 1px 1px #e6e8ec;background-color:#fff;position:relative}.vnlp-table-container table{width:100%;border-collapse:collapse;font-size:14px;background-color:#fff}.vnlp-table-container table tbody tr{max-height:44px}.vnlp-table-container table tbody tr:hover{background-color:#f6f8fa}.vnlp-table-container table tbody tr:hover .icon{display:block}.vnlp-table-container table th,.vnlp-table-container table td{border-bottom:1px solid #e6e8ec;text-align:left}.vnlp-table-container table th.empty-data,.vnlp-table-container table td.empty-data{text-align:center;padding-top:40px}.vnlp-table-container table th.empty-data span,.vnlp-table-container table td.empty-data span{font-size:16px;font-weight:700;color:#23262f}.vnlp-table-container table th.empty-data p,.vnlp-table-container table td.empty-data p{font-size:14px;color:#b1b5c3}.vnlp-table-container table th.empty-data .create-button,.vnlp-table-container table td.empty-data .create-button{cursor:pointer}.vnlp-table-container table th.empty-data .create-button i,.vnlp-table-container table th.empty-data .create-button span,.vnlp-table-container table td.empty-data .create-button i,.vnlp-table-container table td.empty-data .create-button span{color:#007df9}.vnlp-table-container table th{padding:16px;color:#777e90;font-size:14px;font-weight:500;cursor:pointer;-webkit-user-select:none;user-select:none}.vnlp-table-container table th.action-header{text-align:end}.vnlp-table-container table th.check-all-record{width:56px}.vnlp-table-container table th:hover{background-color:#f6f8fa}.vnlp-table-container table td{padding:10px 16px}.vnlp-table-container table td.action-col{width:100px;padding:0 16px}.vnlp-table-container table td .icon{font-size:18px;cursor:pointer}.vnlp-table-container .table-footer{display:flex;align-items:center;justify-content:space-between;padding:24px 20px}.vnlp-table-container .table-footer .counter{font-size:14px;color:#777e90}.vnlp-table-container .table-footer .paginator{display:flex;justify-content:center;align-items:center;gap:10px}.vnlp-table-container .table-footer .paginator .paginator-prev,.vnlp-table-container .table-footer .paginator .paginator-next,.vnlp-table-container .table-footer .paginator .page-number{width:32px;height:32px;border:1px solid #e6e8ec;border-radius:4px;font-size:14px}.vnlp-table-container .table-footer .paginator .paginator-prev:hover,.vnlp-table-container .table-footer .paginator .paginator-next:hover,.vnlp-table-container .table-footer .paginator .page-number:hover{border:1px solid #007df9}.vnlp-table-container .table-footer .paginator .paginator-prev:disabled,.vnlp-table-container .table-footer .paginator .paginator-next:disabled,.vnlp-table-container .table-footer .paginator .page-number:disabled{cursor:not-allowed;border:1px solid #e6e8ec}.vnlp-table-container .table-footer .paginator .page-number.active{background-color:#007df9;color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; }, propDecorators: { columns: [{
                type: Input
            }], dataTable: [{
                type: Input
            }], dataTableChange: [{
                type: Output
            }], pageOptions: [{
                type: Input
            }], editable: [{
                type: Input
            }], deletable: [{
                type: Input
            }], selectable: [{
                type: Input
            }], selectKey: [{
                type: Input
            }], key: [{
                type: Input
            }], onPageOptionsChange: [{
                type: Output
            }], onDeleteRecord: [{
                type: Output
            }], onEditRecord: [{
                type: Output
            }] } });

class VnlpTableModule {
}
VnlpTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpTableModule, declarations: [VnlpTableComponent], imports: [VnlpCheckboxModule, CommonModule], exports: [VnlpTableComponent] });
VnlpTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTableModule, imports: [VnlpCheckboxModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpTableComponent],
                    imports: [VnlpCheckboxModule, CommonModule],
                    exports: [VnlpTableComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpTableComponent, VnlpTableModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-table.mjs.map
