import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpCheckboxComponent {
    constructor() {
        this.label = '';
        this.name = '';
        this.disabled = false;
        this.checked = false;
        this.checkedChange = new EventEmitter();
        this.labelPosition = 'right';
        this.isShowInList = false;
        this.isShowDivider = false;
        this.onChange = new EventEmitter();
    }
    ngOnInit() { }
    handleCheck() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.onChange.emit({
            [this.name]: this.checked,
        });
    }
}
VnlpCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpCheckboxComponent, selector: "vnlp-checkbox", inputs: { label: "label", name: "name", disabled: "disabled", checked: "checked", labelPosition: "labelPosition", isShowInList: "isShowInList", isShowDivider: "isShowDivider" }, outputs: { checkedChange: "checkedChange", onChange: "onChange" }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{\r\n    'vnlp-checkbox-container flex items-center': true,\r\n    disabled: disabled,\r\n    'show-in-list': isShowInList,\r\n    'show-divider': isShowDivider,\r\n    checked: checked\r\n  }\"\r\n  (click)=\"handleCheck()\"\r\n>\r\n  <label\r\n    *ngIf=\"label\"\r\n    [for]=\"name\"\r\n    [ngClass]=\"{\r\n      'text-sm text-600 text-neutral-3 select-none': true,\r\n      'order-2': labelPosition === 'right'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n  <div class=\"\">\r\n    <div\r\n      [ngClass]=\"{\r\n        'default-check-box transition-all ease-in-out duration-200': true,\r\n        'check-box-checked': checked,\r\n        'mr-2': label && labelPosition === 'right'\r\n      }\"\r\n    >\r\n      <i *ngIf=\"checked\" class=\"icon icon-vnlp-icon-tick-square-linear\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".vnlp-checkbox-container{height:18px}.vnlp-checkbox-container.show-in-list{border-radius:10px;padding:10px 8px}.vnlp-checkbox-container.show-in-list:hover{background-color:#f4f5f6}.vnlp-checkbox-container.show-divider:after{content:\"\";position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#e6e8ec}.vnlp-checkbox-container.checked label{color:#007df9}.vnlp-checkbox-container.disabled label{color:#b1b5c3}.vnlp-checkbox-container.disabled .default-check-box{background-color:#e6e8ec}.vnlp-checkbox-container.disabled .default-check-box:hover{border:1.5px solid #b1b5c3;box-shadow:none}.vnlp-checkbox-container.disabled .check-box-checked{background-color:#e6e8ec}.vnlp-checkbox-container.disabled .check-box-checked:hover{background-color:#e6e8ec;border:none}.vnlp-checkbox-container.disabled .check-box-checked:active{box-shadow:none}.vnlp-checkbox-container.disabled.checked label{color:#b1b5c3}.vnlp-checkbox-container .default-check-box{width:18px;height:18px;border:1.5px solid #b1b5c3;background-color:#fff;border-radius:5px}.vnlp-checkbox-container .default-check-box:hover{border:1.5px solid #777e90}.vnlp-checkbox-container .default-check-box:active{box-shadow:0 0 1px 4px #e6e8ec}.vnlp-checkbox-container .check-box-checked{width:18px;height:18px;border:none;background-color:#007df9;border-radius:6px;display:flex;justify-content:center;align-items:center}.vnlp-checkbox-container .check-box-checked i{color:#fff}.vnlp-checkbox-container .check-box-checked:hover{background-color:#3397fa;border:none}.vnlp-checkbox-container .check-box-checked:active{box-shadow:0 0 1px 4px #e6f2fe}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-checkbox', template: "<div\r\n  [ngClass]=\"{\r\n    'vnlp-checkbox-container flex items-center': true,\r\n    disabled: disabled,\r\n    'show-in-list': isShowInList,\r\n    'show-divider': isShowDivider,\r\n    checked: checked\r\n  }\"\r\n  (click)=\"handleCheck()\"\r\n>\r\n  <label\r\n    *ngIf=\"label\"\r\n    [for]=\"name\"\r\n    [ngClass]=\"{\r\n      'text-sm text-600 text-neutral-3 select-none': true,\r\n      'order-2': labelPosition === 'right'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n  <div class=\"\">\r\n    <div\r\n      [ngClass]=\"{\r\n        'default-check-box transition-all ease-in-out duration-200': true,\r\n        'check-box-checked': checked,\r\n        'mr-2': label && labelPosition === 'right'\r\n      }\"\r\n    >\r\n      <i *ngIf=\"checked\" class=\"icon icon-vnlp-icon-tick-square-linear\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".vnlp-checkbox-container{height:18px}.vnlp-checkbox-container.show-in-list{border-radius:10px;padding:10px 8px}.vnlp-checkbox-container.show-in-list:hover{background-color:#f4f5f6}.vnlp-checkbox-container.show-divider:after{content:\"\";position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#e6e8ec}.vnlp-checkbox-container.checked label{color:#007df9}.vnlp-checkbox-container.disabled label{color:#b1b5c3}.vnlp-checkbox-container.disabled .default-check-box{background-color:#e6e8ec}.vnlp-checkbox-container.disabled .default-check-box:hover{border:1.5px solid #b1b5c3;box-shadow:none}.vnlp-checkbox-container.disabled .check-box-checked{background-color:#e6e8ec}.vnlp-checkbox-container.disabled .check-box-checked:hover{background-color:#e6e8ec;border:none}.vnlp-checkbox-container.disabled .check-box-checked:active{box-shadow:none}.vnlp-checkbox-container.disabled.checked label{color:#b1b5c3}.vnlp-checkbox-container .default-check-box{width:18px;height:18px;border:1.5px solid #b1b5c3;background-color:#fff;border-radius:5px}.vnlp-checkbox-container .default-check-box:hover{border:1.5px solid #777e90}.vnlp-checkbox-container .default-check-box:active{box-shadow:0 0 1px 4px #e6e8ec}.vnlp-checkbox-container .check-box-checked{width:18px;height:18px;border:none;background-color:#007df9;border-radius:6px;display:flex;justify-content:center;align-items:center}.vnlp-checkbox-container .check-box-checked i{color:#fff}.vnlp-checkbox-container .check-box-checked:hover{background-color:#3397fa;border:none}.vnlp-checkbox-container .check-box-checked:active{box-shadow:0 0 1px 4px #e6f2fe}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input
            }], checked: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], labelPosition: [{
                type: Input
            }], isShowInList: [{
                type: Input
            }], isShowDivider: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class VnlpCheckboxModule {
}
VnlpCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxModule, declarations: [VnlpCheckboxComponent], imports: [CommonModule], exports: [VnlpCheckboxComponent] });
VnlpCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpCheckboxComponent],
                    imports: [CommonModule],
                    exports: [VnlpCheckboxComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpCheckboxComponent, VnlpCheckboxModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-checkbox.mjs.map
