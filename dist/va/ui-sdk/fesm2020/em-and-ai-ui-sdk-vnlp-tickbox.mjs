import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class VnlpTickboxComponent {
    constructor() {
        this.label = '';
        this.name = '';
        this.checked = false;
        this.checkedChange = new EventEmitter();
        this.disabled = false;
        this.labelPosition = 'right';
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
VnlpTickboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTickboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpTickboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpTickboxComponent, selector: "vnlp-tickbox", inputs: { label: "label", name: "name", checked: "checked", disabled: "disabled", labelPosition: "labelPosition" }, outputs: { checkedChange: "checkedChange", onChange: "onChange" }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{\r\n    'tickbox-container inline-flex justify-between items-center': true,\r\n    disabled: disabled\r\n  }\"\r\n  (click)=\"handleCheck()\"\r\n>\r\n  <span\r\n    *ngIf=\"label\"\r\n    [ngClass]=\"{\r\n      'tickbox-label text-sm text-sm select-none': true,\r\n      'order-1': labelPosition === 'left',\r\n      'ml-2': label && labelPosition === 'left',\r\n      'mr-2': label && labelPosition === 'right'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </span>\r\n  <div\r\n    [ngClass]=\"{\r\n      'tickbox-input': true,\r\n      'tickbox-input--checked': checked\r\n    }\"\r\n  ></div>\r\n</div>\r\n", styles: [".tickbox-container .tickbox-input{width:20px;height:20px;border:1.5px solid #b1b5c3;background-color:#fff;border-radius:50%;transition:all .2s ease-in-out}.tickbox-container .tickbox-input:hover{border:1.5px solid #777e90}.tickbox-container .tickbox-input:active{box-shadow:0 0 1px 4px #e6e8ec}.tickbox-container .tickbox-input--checked{background-color:#007df9;border:1px solid #007df9;position:relative}.tickbox-container .tickbox-input--checked:after{content:\"\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10px;height:10px;background-color:#fff;border-radius:50%}.tickbox-container .tickbox-input--checked:hover{border:1.5px solid #3397fa}.tickbox-container .tickbox-input--checked:active{box-shadow:0 0 1px 4px #e6f2fe}.tickbox-container.disabled{cursor:not-allowed}.tickbox-container.disabled .tickbox-label{color:#b1b5c3}.tickbox-container.disabled .tickbox-input{background-color:#f4f5f6;color:#e6e8ec;box-shadow:none}.tickbox-container.disabled .tickbox-input:hover{border:1.5px solid #b1b5c3}.tickbox-container.disabled .tickbox-input--checked{border:1.5px solid #e6e8ec}.tickbox-container.disabled .tickbox-input--checked:after{background-color:#b1b5c3}.tickbox-container.disabled .tickbox-input--checked:hover{border:1.5px solid #e6e8ec}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTickboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-tickbox', template: "<div\r\n  [ngClass]=\"{\r\n    'tickbox-container inline-flex justify-between items-center': true,\r\n    disabled: disabled\r\n  }\"\r\n  (click)=\"handleCheck()\"\r\n>\r\n  <span\r\n    *ngIf=\"label\"\r\n    [ngClass]=\"{\r\n      'tickbox-label text-sm text-sm select-none': true,\r\n      'order-1': labelPosition === 'left',\r\n      'ml-2': label && labelPosition === 'left',\r\n      'mr-2': label && labelPosition === 'right'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </span>\r\n  <div\r\n    [ngClass]=\"{\r\n      'tickbox-input': true,\r\n      'tickbox-input--checked': checked\r\n    }\"\r\n  ></div>\r\n</div>\r\n", styles: [".tickbox-container .tickbox-input{width:20px;height:20px;border:1.5px solid #b1b5c3;background-color:#fff;border-radius:50%;transition:all .2s ease-in-out}.tickbox-container .tickbox-input:hover{border:1.5px solid #777e90}.tickbox-container .tickbox-input:active{box-shadow:0 0 1px 4px #e6e8ec}.tickbox-container .tickbox-input--checked{background-color:#007df9;border:1px solid #007df9;position:relative}.tickbox-container .tickbox-input--checked:after{content:\"\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10px;height:10px;background-color:#fff;border-radius:50%}.tickbox-container .tickbox-input--checked:hover{border:1.5px solid #3397fa}.tickbox-container .tickbox-input--checked:active{box-shadow:0 0 1px 4px #e6f2fe}.tickbox-container.disabled{cursor:not-allowed}.tickbox-container.disabled .tickbox-label{color:#b1b5c3}.tickbox-container.disabled .tickbox-input{background-color:#f4f5f6;color:#e6e8ec;box-shadow:none}.tickbox-container.disabled .tickbox-input:hover{border:1.5px solid #b1b5c3}.tickbox-container.disabled .tickbox-input--checked{border:1.5px solid #e6e8ec}.tickbox-container.disabled .tickbox-input--checked:after{background-color:#b1b5c3}.tickbox-container.disabled .tickbox-input--checked:hover{border:1.5px solid #e6e8ec}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], name: [{
                type: Input
            }], checked: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class VnlpTickboxModule {
}
VnlpTickboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTickboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpTickboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpTickboxModule, declarations: [VnlpTickboxComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [VnlpTickboxComponent] });
VnlpTickboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTickboxModule, imports: [CommonModule, FormsModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTickboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpTickboxComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    exports: [VnlpTickboxComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpTickboxComponent, VnlpTickboxModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-tickbox.mjs.map
