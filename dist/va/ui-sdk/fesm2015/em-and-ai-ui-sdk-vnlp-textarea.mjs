import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class VnlpTextareaComponent {
    constructor() {
        this.label = 'Label';
        this.valueChange = new EventEmitter();
        this.name = '';
        this.value = '';
        this.error = false;
        this.placeholder = 'Placeholder';
        this.disabled = false;
        this.rows = '3';
        this.maxLength = '75';
        this.width = '320';
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnInit() { }
    handleChange(newValue) {
        this.valueChange.emit(newValue);
        this.onChange.emit({
            [this.name]: this.value,
        });
    }
    handleBlur() {
        this.onBlur.emit();
    }
}
VnlpTextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpTextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpTextareaComponent, selector: "vnlp-textarea", inputs: { label: "label", name: "name", value: "value", error: "error", placeholder: "placeholder", disabled: "disabled", rows: "rows", maxLength: "maxLength", width: "width" }, outputs: { valueChange: "valueChange", onChange: "onChange", onBlur: "onBlur" }, ngImport: i0, template: "<div class=\"vnlp-textarea-container inline-block\">\r\n  <label [for]=\"name\" class=\"inline-block text-sm mb-2 font-medium\">\r\n    {{ label }}\r\n  </label>\r\n  <div class=\"relative\" [style.width.px]=\"width\">\r\n    <textarea\r\n      [name]=\"name\"\r\n      [id]=\"name\"\r\n      [rows]=\"rows\"\r\n      class=\"w-full rounded-lg\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"handleChange($event)\"\r\n      (blur)=\"handleBlur()\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [maxlength]=\"maxLength\"\r\n    ></textarea>\r\n  </div>\r\n  <span class=\"counter flex justify-end\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n", styles: [".vnlp-textarea-container textarea{padding:12px 18px;width:100%;height:100%;box-shadow:0 0 4px 1px #e6e8ec;resize:none;transition:all .2s ease-in-out}.vnlp-textarea-container textarea::placeholder{color:#b1b5c3}.vnlp-textarea-container textarea:focus{outline:none;box-shadow:0 0 4px 1px #007df9;caret-color:#007df9}.vnlp-textarea-container textarea:focus:hover{box-shadow:0 0 4px 1px #007df9}.vnlp-textarea-container textarea:focus+.info-text{color:#007df9}.vnlp-textarea-container textarea:hover{box-shadow:0 0 4px 1px #99cbfd;outline:none}.vnlp-textarea-container textarea:disabled{cursor:default;background-color:#f4f5f6;box-shadow:0 0 4px 1px #e6e8ec}.vnlp-textarea-container .counter{color:#b1b5c3;font-size:14px}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-textarea', template: "<div class=\"vnlp-textarea-container inline-block\">\r\n  <label [for]=\"name\" class=\"inline-block text-sm mb-2 font-medium\">\r\n    {{ label }}\r\n  </label>\r\n  <div class=\"relative\" [style.width.px]=\"width\">\r\n    <textarea\r\n      [name]=\"name\"\r\n      [id]=\"name\"\r\n      [rows]=\"rows\"\r\n      class=\"w-full rounded-lg\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"handleChange($event)\"\r\n      (blur)=\"handleBlur()\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [maxlength]=\"maxLength\"\r\n    ></textarea>\r\n  </div>\r\n  <span class=\"counter flex justify-end\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n", styles: [".vnlp-textarea-container textarea{padding:12px 18px;width:100%;height:100%;box-shadow:0 0 4px 1px #e6e8ec;resize:none;transition:all .2s ease-in-out}.vnlp-textarea-container textarea::placeholder{color:#b1b5c3}.vnlp-textarea-container textarea:focus{outline:none;box-shadow:0 0 4px 1px #007df9;caret-color:#007df9}.vnlp-textarea-container textarea:focus:hover{box-shadow:0 0 4px 1px #007df9}.vnlp-textarea-container textarea:focus+.info-text{color:#007df9}.vnlp-textarea-container textarea:hover{box-shadow:0 0 4px 1px #99cbfd;outline:none}.vnlp-textarea-container textarea:disabled{cursor:default;background-color:#f4f5f6;box-shadow:0 0 4px 1px #e6e8ec}.vnlp-textarea-container .counter{color:#b1b5c3;font-size:14px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], error: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], rows: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], width: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onBlur: [{
                type: Output
            }] } });

class VnlpTextareaModule {
}
VnlpTextareaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpTextareaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaModule, declarations: [VnlpTextareaComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [VnlpTextareaComponent] });
VnlpTextareaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaModule, imports: [CommonModule, FormsModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpTextareaComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    exports: [VnlpTextareaComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpTextareaComponent, VnlpTextareaModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-textarea.mjs.map
