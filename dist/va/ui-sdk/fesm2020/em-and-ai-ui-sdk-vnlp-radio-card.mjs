import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@em-and-ai/ui-sdk/vnlp-tickbox';
import { VnlpTickboxModule } from '@em-and-ai/ui-sdk/vnlp-tickbox';
import * as i3 from '@em-and-ai/ui-sdk/vnlp-checkbox';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';

class VnlpRadioCardComponent {
    constructor() {
        this.label = 'Radio card';
        this.name = '';
        this.type = 'radiobox';
        this.description = '';
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
        this.checkedChange.emit();
        this.onChange.emit({
            [this.name]: this.checked,
        });
    }
}
VnlpRadioCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpRadioCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpRadioCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpRadioCardComponent, selector: "vnlp-radio-card", inputs: { label: "label", name: "name", type: "type", description: "description", checked: "checked", disabled: "disabled", labelPosition: "labelPosition" }, outputs: { checkedChange: "checkedChange", onChange: "onChange" }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{\r\n    'vnlp-radio-card-container': true,\r\n    checked: checked,\r\n    disabled: disabled\r\n  }\"\r\n  (click)=\"handleCheck()\"\r\n>\r\n  <div\r\n    [ngClass]=\"{\r\n      'inline-flex justify-start items-center': true,\r\n      'justify-between': labelPosition === 'left'\r\n    }\"\r\n  >\r\n    <vnlp-tickbox\r\n      *ngIf=\"type === 'radiobox'\"\r\n      [ngClass]=\"{\r\n        'inline-flex justify-start items-center': true,\r\n        'mr-2': labelPosition === 'right'\r\n      }\"\r\n      [(checked)]=\"checked\"\r\n      [disabled]=\"disabled\"\r\n      (onChange)=\"handleCheck()\"\r\n    ></vnlp-tickbox>\r\n    <vnlp-checkbox\r\n      *ngIf=\"type === 'checkbox'\"\r\n      [(checked)]=\"checked\"\r\n      [disabled]=\"disabled\"\r\n      (onChange)=\"handleCheck()\"\r\n      [ngClass]=\"{\r\n        'mr-2': labelPosition === 'right'\r\n      }\"\r\n    ></vnlp-checkbox>\r\n    <div\r\n      [ngClass]=\"{\r\n        label: true,\r\n        'inline-flex -order-1': labelPosition === 'left'\r\n      }\"\r\n    >\r\n      {{ label }}\r\n    </div>\r\n  </div>\r\n  <p *ngIf=\"description\" class=\"description mt-2\">\r\n    {{ description }}\r\n  </p>\r\n</div>\r\n", styles: [".vnlp-radio-card-container{min-width:320px;display:inline-flex;flex-direction:column;padding:18px 16px;border-radius:10px;border:1px solid #e6e8ec;background-color:#fff;cursor:pointer;transition:all .2s ease-in-out;-webkit-user-select:none;user-select:none}.vnlp-radio-card-container .label{font-size:14px;font-weight:700}.vnlp-radio-card-container .description{font-size:14px;color:#777e90}.vnlp-radio-card-container:hover{border:1px solid #b1b5c3}.vnlp-radio-card-container:active{box-shadow:0 0 1px 3px #e6e8ec}.vnlp-radio-card-container.checked{border:1px solid #007df9;background-color:#e6f2fe}.vnlp-radio-card-container.checked:hover{border:1px solid #66b1fb}.vnlp-radio-card-container.checked:active{box-shadow:0 0 1px 3px #cce5fe}.vnlp-radio-card-container.disabled{cursor:not-allowed;background-color:#f4f5f6;border:none}.vnlp-radio-card-container.disabled:active{box-shadow:none}.vnlp-radio-card-container.disabled.checked{box-shadow:none;border:none}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.VnlpTickboxComponent, selector: "vnlp-tickbox", inputs: ["label", "name", "checked", "disabled", "labelPosition"], outputs: ["checkedChange", "onChange"] }, { kind: "component", type: i3.VnlpCheckboxComponent, selector: "vnlp-checkbox", inputs: ["label", "name", "disabled", "checked", "labelPosition", "isShowInList", "isShowDivider"], outputs: ["checkedChange", "onChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpRadioCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-radio-card', template: "<div\r\n  [ngClass]=\"{\r\n    'vnlp-radio-card-container': true,\r\n    checked: checked,\r\n    disabled: disabled\r\n  }\"\r\n  (click)=\"handleCheck()\"\r\n>\r\n  <div\r\n    [ngClass]=\"{\r\n      'inline-flex justify-start items-center': true,\r\n      'justify-between': labelPosition === 'left'\r\n    }\"\r\n  >\r\n    <vnlp-tickbox\r\n      *ngIf=\"type === 'radiobox'\"\r\n      [ngClass]=\"{\r\n        'inline-flex justify-start items-center': true,\r\n        'mr-2': labelPosition === 'right'\r\n      }\"\r\n      [(checked)]=\"checked\"\r\n      [disabled]=\"disabled\"\r\n      (onChange)=\"handleCheck()\"\r\n    ></vnlp-tickbox>\r\n    <vnlp-checkbox\r\n      *ngIf=\"type === 'checkbox'\"\r\n      [(checked)]=\"checked\"\r\n      [disabled]=\"disabled\"\r\n      (onChange)=\"handleCheck()\"\r\n      [ngClass]=\"{\r\n        'mr-2': labelPosition === 'right'\r\n      }\"\r\n    ></vnlp-checkbox>\r\n    <div\r\n      [ngClass]=\"{\r\n        label: true,\r\n        'inline-flex -order-1': labelPosition === 'left'\r\n      }\"\r\n    >\r\n      {{ label }}\r\n    </div>\r\n  </div>\r\n  <p *ngIf=\"description\" class=\"description mt-2\">\r\n    {{ description }}\r\n  </p>\r\n</div>\r\n", styles: [".vnlp-radio-card-container{min-width:320px;display:inline-flex;flex-direction:column;padding:18px 16px;border-radius:10px;border:1px solid #e6e8ec;background-color:#fff;cursor:pointer;transition:all .2s ease-in-out;-webkit-user-select:none;user-select:none}.vnlp-radio-card-container .label{font-size:14px;font-weight:700}.vnlp-radio-card-container .description{font-size:14px;color:#777e90}.vnlp-radio-card-container:hover{border:1px solid #b1b5c3}.vnlp-radio-card-container:active{box-shadow:0 0 1px 3px #e6e8ec}.vnlp-radio-card-container.checked{border:1px solid #007df9;background-color:#e6f2fe}.vnlp-radio-card-container.checked:hover{border:1px solid #66b1fb}.vnlp-radio-card-container.checked:active{box-shadow:0 0 1px 3px #cce5fe}.vnlp-radio-card-container.disabled{cursor:not-allowed;background-color:#f4f5f6;border:none}.vnlp-radio-card-container.disabled:active{box-shadow:none}.vnlp-radio-card-container.disabled.checked{box-shadow:none;border:none}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], name: [{
                type: Input
            }], type: [{
                type: Input
            }], description: [{
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

class VnlpRadioCardModule {
}
VnlpRadioCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpRadioCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpRadioCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpRadioCardModule, declarations: [VnlpRadioCardComponent], imports: [CommonModule, VnlpTickboxModule, VnlpCheckboxModule], exports: [VnlpRadioCardComponent] });
VnlpRadioCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpRadioCardModule, imports: [CommonModule, VnlpTickboxModule, VnlpCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpRadioCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpRadioCardComponent],
                    imports: [CommonModule, VnlpTickboxModule, VnlpCheckboxModule],
                    exports: [VnlpRadioCardComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpRadioCardComponent, VnlpRadioCardModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-radio-card.mjs.map
