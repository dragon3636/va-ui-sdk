import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class VnlpInputTextComponent {
    constructor() {
        this.label = 'Label';
        this.name = '';
        this.value = '';
        this.valueChange = new EventEmitter();
        this.error = false;
        this.placeholder = 'Placeholder';
        this.disabled = false;
        this.icon = '';
        this.informationText = '';
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnInit() { }
    handleChange() {
        this.valueChange.emit(this.value);
        this.onChange.emit({
            [this.name]: this.value,
        });
    }
    handleBlur(event) {
        this.onBlur.emit();
        event.target.blur();
    }
    clearInput() {
        this.value = '';
        this.handleChange();
    }
}
VnlpInputTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpInputTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpInputTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpInputTextComponent, selector: "vnlp-input-text", inputs: { label: "label", name: "name", value: "value", error: "error", placeholder: "placeholder", disabled: "disabled", icon: "icon", informationText: "informationText" }, outputs: { valueChange: "valueChange", onChange: "onChange", onBlur: "onBlur" }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{\r\n    'inline-block': true,\r\n    error: input.touched && input.dirty && !input.value,\r\n    disabled: disabled,\r\n    'show-icon': icon,\r\n    information: informationText\r\n  }\"\r\n>\r\n  <label [for]=\"name\" class=\"inline-block text-sm mb-2\">{{ label }}</label>\r\n  <div ngClass=\"relative inline-block w-full\">\r\n    <label [for]=\"name\" *ngIf=\"icon\" class=\"input-icon\">\r\n      <i [class]=\"'icon icon-vnlp-icon-' + icon\"></i>\r\n    </label>\r\n    <label\r\n      *ngIf=\"value.length > 0\"\r\n      [for]=\"name\"\r\n      class=\"close-icon\"\r\n      (click)=\"clearInput()\"\r\n    >\r\n      <i class=\"icon icon-vnlp-icon-close-circle-linear\"></i>\r\n    </label>\r\n\r\n    <input\r\n      [name]=\"name\"\r\n      [id]=\"name\"\r\n      class=\"w-full h-[48px] rounded-[10px] transition-all ease-in-out duration-200\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"handleChange()\"\r\n      (blur)=\"handleBlur($event)\"\r\n      (keyup.enter)=\"handleBlur($event)\"\r\n      type=\"text\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      #input=\"ngModel\"\r\n    />\r\n    <div *ngIf=\"informationText\" class=\"info-text text-sm error-msg mt-2\">\r\n      {{ informationText }}\r\n    </div>\r\n    <div\r\n      *ngIf=\"input.touched && input.dirty && !input.value && !informationText\"\r\n      class=\"text-sm error-msg mt-2\"\r\n    >\r\n      Field required\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".show-icon input{padding-left:50px}input{padding:12px 18px;box-shadow:0 0 1px 1.5px #e6e8ec}input::placeholder{color:#b1b5c3}input:focus{box-shadow:0 0 1px 1.5px #007df9;caret-color:#007df9}input:focus~.info-text{color:#007df9}input:focus~.input-icon i{color:#007df9}input:focus:hover{box-shadow:0 0 1px 1.5px #007df9}input:focus:hover~.info-text{color:#007df9}input:hover{box-shadow:0 0 1px 1.5px #99cbfd}input:hover~.info-text{color:#007df9}.input-icon{position:absolute;top:12px;left:16px}.input-icon i{font-size:18px;color:#b1b5c3}.close-icon{position:absolute;top:12px;right:10px;font-size:18px;cursor:pointer}.error input{background-color:#ffe8ec;box-shadow:0 0 1px 1.5px #fb1b3c}.error input:hover{box-shadow:0 0 1px 1.5px #fb1b3c}.error input:hover~.info-text,.error input:focus~.info-text{color:#fb1b3c}.error input:hover~.input-icon i,.error input:focus~.input-icon i{color:#fb1b3c}.error .input-icon i{color:#fb1b3c}.error .error-msg{color:#fb1b3c;font-weight:500}.disabled input{color:#b1b5c3;background-color:#f4f5f6;cursor:not-allowed}.disabled input:hover{box-shadow:0 0 1px 1.5px #e6e8ec}.disabled input:hover~.info-text,.disabled input:focus~.info-text{color:#b1b5c3}.disabled input:hover~.input-icon i,.disabled input:focus~.input-icon i{color:#b1b5c3}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpInputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-input-text', template: "<div\r\n  [ngClass]=\"{\r\n    'inline-block': true,\r\n    error: input.touched && input.dirty && !input.value,\r\n    disabled: disabled,\r\n    'show-icon': icon,\r\n    information: informationText\r\n  }\"\r\n>\r\n  <label [for]=\"name\" class=\"inline-block text-sm mb-2\">{{ label }}</label>\r\n  <div ngClass=\"relative inline-block w-full\">\r\n    <label [for]=\"name\" *ngIf=\"icon\" class=\"input-icon\">\r\n      <i [class]=\"'icon icon-vnlp-icon-' + icon\"></i>\r\n    </label>\r\n    <label\r\n      *ngIf=\"value.length > 0\"\r\n      [for]=\"name\"\r\n      class=\"close-icon\"\r\n      (click)=\"clearInput()\"\r\n    >\r\n      <i class=\"icon icon-vnlp-icon-close-circle-linear\"></i>\r\n    </label>\r\n\r\n    <input\r\n      [name]=\"name\"\r\n      [id]=\"name\"\r\n      class=\"w-full h-[48px] rounded-[10px] transition-all ease-in-out duration-200\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"handleChange()\"\r\n      (blur)=\"handleBlur($event)\"\r\n      (keyup.enter)=\"handleBlur($event)\"\r\n      type=\"text\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      #input=\"ngModel\"\r\n    />\r\n    <div *ngIf=\"informationText\" class=\"info-text text-sm error-msg mt-2\">\r\n      {{ informationText }}\r\n    </div>\r\n    <div\r\n      *ngIf=\"input.touched && input.dirty && !input.value && !informationText\"\r\n      class=\"text-sm error-msg mt-2\"\r\n    >\r\n      Field required\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".show-icon input{padding-left:50px}input{padding:12px 18px;box-shadow:0 0 1px 1.5px #e6e8ec}input::placeholder{color:#b1b5c3}input:focus{box-shadow:0 0 1px 1.5px #007df9;caret-color:#007df9}input:focus~.info-text{color:#007df9}input:focus~.input-icon i{color:#007df9}input:focus:hover{box-shadow:0 0 1px 1.5px #007df9}input:focus:hover~.info-text{color:#007df9}input:hover{box-shadow:0 0 1px 1.5px #99cbfd}input:hover~.info-text{color:#007df9}.input-icon{position:absolute;top:12px;left:16px}.input-icon i{font-size:18px;color:#b1b5c3}.close-icon{position:absolute;top:12px;right:10px;font-size:18px;cursor:pointer}.error input{background-color:#ffe8ec;box-shadow:0 0 1px 1.5px #fb1b3c}.error input:hover{box-shadow:0 0 1px 1.5px #fb1b3c}.error input:hover~.info-text,.error input:focus~.info-text{color:#fb1b3c}.error input:hover~.input-icon i,.error input:focus~.input-icon i{color:#fb1b3c}.error .input-icon i{color:#fb1b3c}.error .error-msg{color:#fb1b3c;font-weight:500}.disabled input{color:#b1b5c3;background-color:#f4f5f6;cursor:not-allowed}.disabled input:hover{box-shadow:0 0 1px 1.5px #e6e8ec}.disabled input:hover~.info-text,.disabled input:focus~.info-text{color:#b1b5c3}.disabled input:hover~.input-icon i,.disabled input:focus~.input-icon i{color:#b1b5c3}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], error: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], informationText: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onBlur: [{
                type: Output
            }] } });

class VnlpInputTextModule {
}
VnlpInputTextModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpInputTextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpInputTextModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpInputTextModule, declarations: [VnlpInputTextComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [VnlpInputTextComponent] });
VnlpInputTextModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpInputTextModule, imports: [CommonModule, FormsModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpInputTextModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpInputTextComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    exports: [VnlpInputTextComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpInputTextComponent, VnlpInputTextModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-input-text.mjs.map
