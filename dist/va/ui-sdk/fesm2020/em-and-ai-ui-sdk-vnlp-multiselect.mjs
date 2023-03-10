import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

class VnlpMultiselectComponent {
    constructor() {
        this.multiselectWidth = '400px';
        this.multiEmail = true;
        this.label = 'Label';
        this.valueChange = new EventEmitter();
        this.data = '';
        this.listData = [];
        this.invalidEmail = false;
    }
    ngOnInit() { }
    //Handle add value to list data
    addData() {
        //In default case
        if (!this.multiEmail) {
            if (this.listData.includes(this.data.trim())) {
                this.data = '';
                // emit changes
                this.valueChange.emit('duplicate');
                return;
            }
            if (this.data !== '') {
                this.listData.push(this.data.trim());
                // emit changes
                this.valueChange.emit(this.listData);
                this.data = '';
            }
        }
        else {
            //In case input email
            if (this.data !== '') {
                if (!validateEmail(this.data.trim())) {
                    this.invalidEmail = true;
                    return;
                }
                this.listData.push(this.data.trim());
                // emit changes
                this.valueChange.emit(this.listData);
                this.data = '';
                this.invalidEmail = false;
            }
        }
    }
    //Handle remove specific value from list data
    removeDate(data) {
        if (this.listData.indexOf(data) >= 0) {
            this.listData.splice(this.listData.indexOf(data), 1);
            // emit changes
            this.valueChange.emit(this.listData);
        }
    }
}
VnlpMultiselectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpMultiselectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpMultiselectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpMultiselectComponent, selector: "vnlp-multiselect", inputs: { multiselectWidth: "multiselectWidth", multiEmail: "multiEmail", label: "label" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div>\r\n  <div class=\"label-text\">\r\n    {{ label }}\r\n    <i [class]=\"'icon-vnlp-icon-info-circle-linear'\"></i>\r\n  </div>\r\n  <div\r\n    [ngClass]=\"{ 'is-invalid': invalidEmail }\"\r\n    class=\"main-multiselect-container\"\r\n    [ngStyle]=\"{\r\n      width: multiselectWidth\r\n    }\"\r\n  >\r\n    <div *ngFor=\"let data of listData; let i = index\" class=\"item\">\r\n      <span>\r\n        {{ data }}\r\n      </span>\r\n      <span (click)=\"removeDate(data)\" class=\"cursor-pointer\">x</span>\r\n    </div>\r\n    <input\r\n      (keydown.enter)=\"addData()\"\r\n      [(ngModel)]=\"data\"\r\n      class=\"h-full flex-1 w-auto outline-none text-sm font-normal bg-transparent\"\r\n      name=\"data\"\r\n      type=\"text\"\r\n    />\r\n  </div>\r\n  <div\r\n    *ngIf=\"invalidEmail\"\r\n    [ngClass]=\"{ 'is-invalid': invalidEmail }\"\r\n    class=\"helper-text\"\r\n  >\r\n    This is not a valid Email!!!\r\n  </div>\r\n</div>\r\n", styles: [".main-multiselect-container{display:flex;flex-wrap:wrap;gap:5px;border:1.5px solid #e6e8ec;padding:12px 14px;font-weight:400;line-height:24px;align-items:center;cursor:pointer;background-color:#fff;border-radius:10px}.main-multiselect-container.is-invalid{border:1.5px solid #fb1b3c!important}.main-multiselect-container .item{display:flex;font-weight:500;justify-content:center;gap:10px;align-items:center;height:34px;padding:5px 12px;font-size:14px;line-height:24px;border-radius:8px;background-color:#e6e8ec;color:#141416}.main-multiselect-container:hover{border:1.5px solid #007df9}.main-multiselect-container:focus-within{border:1.5px solid #007df9}.label-text{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.004em;color:#141416}.helper-text{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.004em;color:#777e90}.helper-text.is-invalid{color:#fb1b3c!important}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpMultiselectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-multiselect', template: "<div>\r\n  <div class=\"label-text\">\r\n    {{ label }}\r\n    <i [class]=\"'icon-vnlp-icon-info-circle-linear'\"></i>\r\n  </div>\r\n  <div\r\n    [ngClass]=\"{ 'is-invalid': invalidEmail }\"\r\n    class=\"main-multiselect-container\"\r\n    [ngStyle]=\"{\r\n      width: multiselectWidth\r\n    }\"\r\n  >\r\n    <div *ngFor=\"let data of listData; let i = index\" class=\"item\">\r\n      <span>\r\n        {{ data }}\r\n      </span>\r\n      <span (click)=\"removeDate(data)\" class=\"cursor-pointer\">x</span>\r\n    </div>\r\n    <input\r\n      (keydown.enter)=\"addData()\"\r\n      [(ngModel)]=\"data\"\r\n      class=\"h-full flex-1 w-auto outline-none text-sm font-normal bg-transparent\"\r\n      name=\"data\"\r\n      type=\"text\"\r\n    />\r\n  </div>\r\n  <div\r\n    *ngIf=\"invalidEmail\"\r\n    [ngClass]=\"{ 'is-invalid': invalidEmail }\"\r\n    class=\"helper-text\"\r\n  >\r\n    This is not a valid Email!!!\r\n  </div>\r\n</div>\r\n", styles: [".main-multiselect-container{display:flex;flex-wrap:wrap;gap:5px;border:1.5px solid #e6e8ec;padding:12px 14px;font-weight:400;line-height:24px;align-items:center;cursor:pointer;background-color:#fff;border-radius:10px}.main-multiselect-container.is-invalid{border:1.5px solid #fb1b3c!important}.main-multiselect-container .item{display:flex;font-weight:500;justify-content:center;gap:10px;align-items:center;height:34px;padding:5px 12px;font-size:14px;line-height:24px;border-radius:8px;background-color:#e6e8ec;color:#141416}.main-multiselect-container:hover{border:1.5px solid #007df9}.main-multiselect-container:focus-within{border:1.5px solid #007df9}.label-text{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.004em;color:#141416}.helper-text{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.004em;color:#777e90}.helper-text.is-invalid{color:#fb1b3c!important}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { multiselectWidth: [{
                type: Input
            }], multiEmail: [{
                type: Input
            }], label: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class VnlpMultiselectModule {
}
VnlpMultiselectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpMultiselectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpMultiselectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpMultiselectModule, declarations: [VnlpMultiselectComponent], imports: [CommonModule, FormsModule], exports: [VnlpMultiselectComponent] });
VnlpMultiselectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpMultiselectModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpMultiselectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpMultiselectComponent],
                    imports: [CommonModule, FormsModule],
                    exports: [VnlpMultiselectComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpMultiselectComponent, VnlpMultiselectModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-multiselect.mjs.map
