import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewChild, Output, Input, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class VnlpDropdownComponent {
    constructor(ele) {
        this.ele = ele;
        this.valueChange = new EventEmitter();
        this.tempListData = [];
        this.listData = [];
        this.dropDownSettings = {
            allowSearchFilter: true,
            singleSelection: true,
            placeholder: 'select option',
            dropdownWidth: '400px',
        };
        this.label = "label";
        this.isShowdataPanel = false;
        this.selectedOptions = [];
    }
    set data(val) {
        if (val && val.length > 0) {
            this.listData = val.map((x) => {
                x.isSelected = false;
                return x;
            });
            this.tempListData = val.map((x) => {
                x.isSelected = false;
                return x;
            });
        }
    }
    ;
    get userData() {
        return this.listData;
    }
    get empty() {
        return this.tempListData.length === 0;
    }
    //Handle selected option value
    selectOption(colIndex, data, isSelected) {
        if (!this.dropDownSettings.singleSelection) {
            //Case single selection
            this.userData[colIndex].isSelected = isSelected ? false : true;
            if (!isSelected) {
                let newSelectedObj = {
                    id: data.id,
                    value: data.value,
                };
                this.selectedOptions.push(newSelectedObj);
            }
            else {
                var dIndex = this.selectedOptions.findIndex((x) => x.id == data.id);
                this.selectedOptions.splice(dIndex, 1);
            }
            // emit changes
            this.changes(this.selectedOptions);
        }
        else {
            //Case multiple selection
            this.selectedOptions = [];
            this.userData[colIndex].isSelected = !this.userData[colIndex].isSelected;
            let newSelectedObj = {
                id: data.id,
                value: data.value,
            };
            this.selectedOptions.push(newSelectedObj);
            //emit changes
            this.changes(this.selectedOptions);
            this.toggleDataPanel();
        }
    }
    //Handle search item
    handleSearch(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = value.toLowerCase();
            this.listData = yield this.tempListData.filter((data) => {
                if (data.value.toLowerCase().indexOf(val) !== -1 || !val) {
                    return data;
                }
                return;
            });
        });
    }
    //Remove selected item
    removefromselected(sel, i) {
        var findIdex = this.userData.findIndex((x) => x.value == sel);
        this.userData[findIdex].isSelected = false;
        this.selectedOptions.splice(i, 1);
        //emit changes
        this.changes(this.selectedOptions);
    }
    //Handle change and emit value
    changes(selectedOptions) {
        if (selectedOptions.length > 0) {
            //case multiple selection emit list selection
            if (!this.dropDownSettings.singleSelection) {
                this.valueChange.emit(selectedOptions);
            }
            else {
                //case multiple selection emit selection
                this.valueChange.emit(selectedOptions[0]);
            }
        }
        else {
            this.valueChange.emit();
        }
    }
    toggleDataPanel() {
        this.isShowdataPanel = !this.isShowdataPanel;
    }
    ngOnInit() { }
    closeDropdown() {
        if (this.isShowdataPanel) {
            this.isShowdataPanel = false;
        }
    }
    //Handle close element when click outside dropdown container
    onBlur(e) {
        var _a, _b, _c, _d;
        if (e.target === ((_a = this.inputDropdownElement) === null || _a === void 0 ? void 0 : _a.nativeElement) ||
            ((_b = this.inputDropdownElement) === null || _b === void 0 ? void 0 : _b.nativeElement.contains(e.target))) {
            return;
        }
        if (e.target !== ((_c = this.inputDropdownElement) === null || _c === void 0 ? void 0 : _c.nativeElement) &&
            !((_d = this.dropdownContainerElement) === null || _d === void 0 ? void 0 : _d.nativeElement.contains(e.target))) {
            this.closeDropdown();
        }
    }
}
VnlpDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDropdownComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
VnlpDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpDropdownComponent, selector: "vnlp-dropdown", inputs: { dropDownSettings: "dropDownSettings", data: "data", label: "label" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "document:click": "onBlur($event)" } }, viewQueries: [{ propertyName: "dropdownContainerElement", first: true, predicate: ["dropdownContainer"], descendants: true }, { propertyName: "inputDropdownElement", first: true, predicate: ["inputDropdown"], descendants: true }], ngImport: i0, template: "<div class=\"background-dropdown-container\">\r\n  <div class=\"label-text\">\r\n    {{ label }}\r\n    <i [class]=\"'icon-vnlp-icon-info-circle-linear'\"></i>\r\n  </div>\r\n  <div\r\n    tabindex=\"-1\"\r\n    class=\"main-dropdown-container\"\r\n    (click)=\"toggleDataPanel()\"\r\n    [ngStyle]=\"{ width: dropDownSettings.dropdownWidth }\"\r\n    #inputDropdown\r\n  >\r\n    <div *ngIf=\"!dropDownSettings.singleSelection\" class=\"element-selected\">\r\n      <div *ngFor=\"let sel of selectedOptions; let i = index\" class=\"item\">\r\n        <span>\r\n          {{ sel.value }}\r\n        </span>\r\n        <span\r\n          (click)=\"removefromselected(sel.value, i)\"\r\n          class=\"text-neutral-4 text-[18px] font-bold cursor-pointer\"\r\n        >\r\n          <i [class]=\"'icon-vnlp-icon-close-linear'\"></i>\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"selectedOptions.length < 1\">\r\n        <span class=\"overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-sm text-neutral-5\">\r\n          {{ dropDownSettings.placeholder }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"dropDownSettings.singleSelection\" class=\"element-selected\">\r\n      <span *ngIf=\"selectedOptions.length > 0\">\r\n        {{ selectedOptions[0].value }}\r\n      </span>\r\n      <div *ngIf=\"selectedOptions.length < 1\">\r\n        <span class=\"overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-sm text-neutral-5\">\r\n          {{ dropDownSettings.placeholder }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex\">\r\n      <span\r\n        [ngClass]=\"{ 'rotate-180': isShowdataPanel }\"\r\n        class=\"text-neutral-4 text-[20px] transition-all duration-500\"\r\n      >\r\n        <i [class]=\"'icon-vnlp-icon-arrow-down-1-linear'\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <!---data list panel-->\r\n  <div\r\n    *ngIf=\"isShowdataPanel\"\r\n    class=\"selected-item-container\"\r\n    [ngStyle]=\"{ width: dropDownSettings.dropdownWidth }\"\r\n    #dropdownContainer\r\n  >\r\n    <div *ngIf=\"empty\" class=\"flex justify-center items-center p-[20px]\">\r\n      <span>No Record Found</span>\r\n    </div>\r\n    <div *ngIf=\"!empty\" class=\"flex flex-col\">\r\n      <div *ngIf=\"dropDownSettings.allowSearchFilter\" class=\"search-input\">\r\n        <div class=\"flex items-center gap-[8px]\">\r\n          <span class=\"text-neutral-4 text-[20px] font-bold\">\r\n            <i [class]=\"'icon-vnlp-icon-search-normal-1-linear'\"></i>\r\n          </span>\r\n          <input\r\n            (keyup)=\"handleSearch(searchPara.value)\"\r\n            #searchPara\r\n            class=\"h-full w-full outline-none text-sm font-normal bg-transparent text-gray-700\"\r\n            name=\"\"\r\n            type=\"text\"\r\n            [placeholder]=\"'Search'\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div *ngFor=\"let data of userData; let i = index\" class=\"mt-[10px]\">\r\n        <div\r\n          *ngIf=\"!dropDownSettings.singleSelection\"\r\n          (click)=\"selectOption(i, data, data['isSelected'])\"\r\n          class=\"flex h-[47px] px-[10px] rounded-[8px] cursor-pointer items-center gap-[10px] hover:bg-neutral-7\"\r\n        >\r\n          <input\r\n            name=\"\"\r\n            #chkbox\r\n            type=\"checkbox\"\r\n            [checked]=\"data['isSelected']\"\r\n            class=\"w-[18px] h-[18px]\"\r\n          />\r\n          <div>{{ data.value }}</div>\r\n        </div>\r\n        <div\r\n          *ngIf=\"dropDownSettings.singleSelection\"\r\n          (click)=\"selectOption(i, data)\"\r\n          class=\"flex h-[47px] px-[10px] rounded-[8px] cursor-pointer items-center hover:bg-neutral-7\"\r\n        >\r\n          <div>{{ data.value }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".background-dropdown-container{position:absolute}.main-dropdown-container{display:flex;border:1.5px solid #e6e8ec;padding:12px 14px;font-weight:400;line-height:24px;justify-content:space-between;align-items:center;cursor:pointer;background-color:#fff;border-radius:10px}.main-dropdown-container:hover{border:1.5px solid #99cbfd}.main-dropdown-container:focus{border:1.5px solid #99cbfd}.element-selected{flex:auto;display:flex;flex-wrap:wrap;flex-direction:row;white-space:normal;max-width:80%;gap:5px}.element-selected .item{display:flex;font-weight:500;justify-content:center;gap:10px;align-items:center;height:34px;padding:5px 12px;font-size:14px;line-height:24px;border-radius:8px;background-color:#e6e8ec;color:#141416}.selected-item-container{padding:6px;border:1.5px solid #e6e8ec;border-radius:10px;background:#ffffff;margin-top:10px;box-shadow:0 1px 16px #0000000d;height:280px;overflow:auto}.selected-item-container::-webkit-scrollbar{width:2px}.selected-item-container::-webkit-scrollbar-thumb{background:#b1b5c3;border-radius:10px}.selected-item-container::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px}.search-input{display:flex;justify-content:space-between;align-items:center;width:100%;height:47px;border-radius:8px;background-color:#f4f5f6;padding:9px 12px 9px 8px}.search-input:hover{border:2px solid #b1b5c3;background-color:#fff}.search-input:focus-within{border:2px solid #007df9;background-color:#fff}.label-text{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.004em;color:#141416}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-dropdown', template: "<div class=\"background-dropdown-container\">\r\n  <div class=\"label-text\">\r\n    {{ label }}\r\n    <i [class]=\"'icon-vnlp-icon-info-circle-linear'\"></i>\r\n  </div>\r\n  <div\r\n    tabindex=\"-1\"\r\n    class=\"main-dropdown-container\"\r\n    (click)=\"toggleDataPanel()\"\r\n    [ngStyle]=\"{ width: dropDownSettings.dropdownWidth }\"\r\n    #inputDropdown\r\n  >\r\n    <div *ngIf=\"!dropDownSettings.singleSelection\" class=\"element-selected\">\r\n      <div *ngFor=\"let sel of selectedOptions; let i = index\" class=\"item\">\r\n        <span>\r\n          {{ sel.value }}\r\n        </span>\r\n        <span\r\n          (click)=\"removefromselected(sel.value, i)\"\r\n          class=\"text-neutral-4 text-[18px] font-bold cursor-pointer\"\r\n        >\r\n          <i [class]=\"'icon-vnlp-icon-close-linear'\"></i>\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"selectedOptions.length < 1\">\r\n        <span class=\"overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-sm text-neutral-5\">\r\n          {{ dropDownSettings.placeholder }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"dropDownSettings.singleSelection\" class=\"element-selected\">\r\n      <span *ngIf=\"selectedOptions.length > 0\">\r\n        {{ selectedOptions[0].value }}\r\n      </span>\r\n      <div *ngIf=\"selectedOptions.length < 1\">\r\n        <span class=\"overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-sm text-neutral-5\">\r\n          {{ dropDownSettings.placeholder }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex\">\r\n      <span\r\n        [ngClass]=\"{ 'rotate-180': isShowdataPanel }\"\r\n        class=\"text-neutral-4 text-[20px] transition-all duration-500\"\r\n      >\r\n        <i [class]=\"'icon-vnlp-icon-arrow-down-1-linear'\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <!---data list panel-->\r\n  <div\r\n    *ngIf=\"isShowdataPanel\"\r\n    class=\"selected-item-container\"\r\n    [ngStyle]=\"{ width: dropDownSettings.dropdownWidth }\"\r\n    #dropdownContainer\r\n  >\r\n    <div *ngIf=\"empty\" class=\"flex justify-center items-center p-[20px]\">\r\n      <span>No Record Found</span>\r\n    </div>\r\n    <div *ngIf=\"!empty\" class=\"flex flex-col\">\r\n      <div *ngIf=\"dropDownSettings.allowSearchFilter\" class=\"search-input\">\r\n        <div class=\"flex items-center gap-[8px]\">\r\n          <span class=\"text-neutral-4 text-[20px] font-bold\">\r\n            <i [class]=\"'icon-vnlp-icon-search-normal-1-linear'\"></i>\r\n          </span>\r\n          <input\r\n            (keyup)=\"handleSearch(searchPara.value)\"\r\n            #searchPara\r\n            class=\"h-full w-full outline-none text-sm font-normal bg-transparent text-gray-700\"\r\n            name=\"\"\r\n            type=\"text\"\r\n            [placeholder]=\"'Search'\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div *ngFor=\"let data of userData; let i = index\" class=\"mt-[10px]\">\r\n        <div\r\n          *ngIf=\"!dropDownSettings.singleSelection\"\r\n          (click)=\"selectOption(i, data, data['isSelected'])\"\r\n          class=\"flex h-[47px] px-[10px] rounded-[8px] cursor-pointer items-center gap-[10px] hover:bg-neutral-7\"\r\n        >\r\n          <input\r\n            name=\"\"\r\n            #chkbox\r\n            type=\"checkbox\"\r\n            [checked]=\"data['isSelected']\"\r\n            class=\"w-[18px] h-[18px]\"\r\n          />\r\n          <div>{{ data.value }}</div>\r\n        </div>\r\n        <div\r\n          *ngIf=\"dropDownSettings.singleSelection\"\r\n          (click)=\"selectOption(i, data)\"\r\n          class=\"flex h-[47px] px-[10px] rounded-[8px] cursor-pointer items-center hover:bg-neutral-7\"\r\n        >\r\n          <div>{{ data.value }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".background-dropdown-container{position:absolute}.main-dropdown-container{display:flex;border:1.5px solid #e6e8ec;padding:12px 14px;font-weight:400;line-height:24px;justify-content:space-between;align-items:center;cursor:pointer;background-color:#fff;border-radius:10px}.main-dropdown-container:hover{border:1.5px solid #99cbfd}.main-dropdown-container:focus{border:1.5px solid #99cbfd}.element-selected{flex:auto;display:flex;flex-wrap:wrap;flex-direction:row;white-space:normal;max-width:80%;gap:5px}.element-selected .item{display:flex;font-weight:500;justify-content:center;gap:10px;align-items:center;height:34px;padding:5px 12px;font-size:14px;line-height:24px;border-radius:8px;background-color:#e6e8ec;color:#141416}.selected-item-container{padding:6px;border:1.5px solid #e6e8ec;border-radius:10px;background:#ffffff;margin-top:10px;box-shadow:0 1px 16px #0000000d;height:280px;overflow:auto}.selected-item-container::-webkit-scrollbar{width:2px}.selected-item-container::-webkit-scrollbar-thumb{background:#b1b5c3;border-radius:10px}.selected-item-container::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px}.search-input{display:flex;justify-content:space-between;align-items:center;width:100%;height:47px;border-radius:8px;background-color:#f4f5f6;padding:9px 12px 9px 8px}.search-input:hover{border:2px solid #b1b5c3;background-color:#fff}.search-input:focus-within{border:2px solid #007df9;background-color:#fff}.label-text{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.004em;color:#141416}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { dropdownContainerElement: [{
                type: ViewChild,
                args: ['dropdownContainer']
            }], inputDropdownElement: [{
                type: ViewChild,
                args: ['inputDropdown']
            }], valueChange: [{
                type: Output
            }], dropDownSettings: [{
                type: Input
            }], data: [{
                type: Input
            }], label: [{
                type: Input
            }], onBlur: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class VnlpDropdownModule {
}
VnlpDropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpDropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpDropdownModule, declarations: [VnlpDropdownComponent], imports: [CommonModule, FormsModule], exports: [VnlpDropdownComponent] });
VnlpDropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDropdownModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpDropdownComponent],
                    imports: [CommonModule, FormsModule],
                    exports: [VnlpDropdownComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpDropdownComponent, VnlpDropdownModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-dropdown.mjs.map
