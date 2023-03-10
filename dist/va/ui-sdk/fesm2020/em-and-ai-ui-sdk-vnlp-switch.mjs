import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpSwitchComponent {
    constructor() {
        this.checked = false;
        this.checkedChange = new EventEmitter();
        this.disabled = false;
        this.label = 'Label';
        this.name = 'name';
        this.labelPosition = 'right';
        this.size = 'sm';
        this.onChange = new EventEmitter();
    }
    ngOnInit() { }
    handleClick() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.onChange.emit({
            [this.name]: this.checked,
        });
    }
}
VnlpSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpSwitchComponent, selector: "vnlp-switch", inputs: { checked: "checked", disabled: "disabled", label: "label", name: "name", labelPosition: "labelPosition", size: "size" }, outputs: { checkedChange: "checkedChange", onChange: "onChange" }, ngImport: i0, template: "<div class=\"switch-container inline-flex items-center\">\r\n  <label\r\n    [for]=\"name\"\r\n    [ngClass]=\"{\r\n      'text-sm text-600 mx-2 text-neutral-1 select-none': true,\r\n      'order-2': labelPosition === 'left'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n  <input\r\n    [id]=\"name\"\r\n    [name]=\"name\"\r\n    type=\"checkbox\"\r\n    [checked]=\"checked\"\r\n    (click)=\"handleClick()\"\r\n    [disabled]=\"disabled\"\r\n    [ngClass]=\"{ 'mx-1': true, md: size === 'md' }\"\r\n  />\r\n</div>\r\n", styles: [".switch-container input[type=checkbox]{position:relative;-webkit-appearance:none;appearance:none;width:38px;height:24px;border-radius:50px;background-color:#e6e8ec;cursor:pointer;transition:.2s}.switch-container input[type=checkbox].md{width:56px;height:32px}.switch-container input[type=checkbox].md:after{width:24px;height:24px}.switch-container input[type=checkbox]:hover{box-shadow:0 0 1px 3px #cce5fe}.switch-container input[type=checkbox]:checked[type=checkbox]{background:#007df9}.switch-container input[type=checkbox]:checked[type=checkbox]:disabled{background-color:#e6f2fe}.switch-container input[type=checkbox]:disabled{background-color:#f4f5f6;box-shadow:none}.switch-container input[type=checkbox]:after{content:\"\";position:absolute;top:4px;left:4px;width:16px;height:16px;background:#ffffff;border-radius:50%;transition:.2s}.switch-container input:checked[type=checkbox]:after{left:44%}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-switch', template: "<div class=\"switch-container inline-flex items-center\">\r\n  <label\r\n    [for]=\"name\"\r\n    [ngClass]=\"{\r\n      'text-sm text-600 mx-2 text-neutral-1 select-none': true,\r\n      'order-2': labelPosition === 'left'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n  <input\r\n    [id]=\"name\"\r\n    [name]=\"name\"\r\n    type=\"checkbox\"\r\n    [checked]=\"checked\"\r\n    (click)=\"handleClick()\"\r\n    [disabled]=\"disabled\"\r\n    [ngClass]=\"{ 'mx-1': true, md: size === 'md' }\"\r\n  />\r\n</div>\r\n", styles: [".switch-container input[type=checkbox]{position:relative;-webkit-appearance:none;appearance:none;width:38px;height:24px;border-radius:50px;background-color:#e6e8ec;cursor:pointer;transition:.2s}.switch-container input[type=checkbox].md{width:56px;height:32px}.switch-container input[type=checkbox].md:after{width:24px;height:24px}.switch-container input[type=checkbox]:hover{box-shadow:0 0 1px 3px #cce5fe}.switch-container input[type=checkbox]:checked[type=checkbox]{background:#007df9}.switch-container input[type=checkbox]:checked[type=checkbox]:disabled{background-color:#e6f2fe}.switch-container input[type=checkbox]:disabled{background-color:#f4f5f6;box-shadow:none}.switch-container input[type=checkbox]:after{content:\"\";position:absolute;top:4px;left:4px;width:16px;height:16px;background:#ffffff;border-radius:50%;transition:.2s}.switch-container input:checked[type=checkbox]:after{left:44%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { checked: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], name: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], size: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class VnlpSwitchModule {
}
VnlpSwitchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpSwitchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchModule, declarations: [VnlpSwitchComponent], imports: [CommonModule], exports: [VnlpSwitchComponent] });
VnlpSwitchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpSwitchComponent],
                    imports: [CommonModule],
                    exports: [VnlpSwitchComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpSwitchComponent, VnlpSwitchModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-switch.mjs.map
