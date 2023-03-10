import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpLabelTagComponent {
    constructor() {
        this.text = 'Label';
        this.type = 'gray';
        this.typeList = {
            gray: {
                textColor: 'primary',
                bgc: 'primary-100',
            },
            orange: {
                textColor: 'secondary',
                bgc: 'secondary-100',
            },
            red: {
                textColor: 'error',
                bgc: 'error-100',
            },
            blue: {
                textColor: 'primary',
                bgc: 'primary-100',
            },
            green: {
                textColor: 'success',
                bgc: 'success-100',
            },
        };
    }
    ngOnInit() { }
}
VnlpLabelTagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpLabelTagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpLabelTagComponent, selector: "vnlp-label-tag", inputs: { text: "text", type: "type" }, ngImport: i0, template: "<span\r\n  class=\"hidden text-neutral-7 bg-neutral-4 text-secondary bg-secondary-100 text-error bg-error-100 text-primary bg-primary-100 text-success bg-success-100\"\r\n></span>\r\n\r\n<span\r\n  [ngClass]=\"[\r\n    'text-[12px] h-[24px] inline-flex items-center rounded-md px-[6px] py-[8px]',\r\n    'bg-' + typeList[type].bgc,\r\n    'text-' + typeList[type].textColor\r\n  ]\"\r\n>\r\n  {{ text }}\r\n</span>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-label-tag', template: "<span\r\n  class=\"hidden text-neutral-7 bg-neutral-4 text-secondary bg-secondary-100 text-error bg-error-100 text-primary bg-primary-100 text-success bg-success-100\"\r\n></span>\r\n\r\n<span\r\n  [ngClass]=\"[\r\n    'text-[12px] h-[24px] inline-flex items-center rounded-md px-[6px] py-[8px]',\r\n    'bg-' + typeList[type].bgc,\r\n    'text-' + typeList[type].textColor\r\n  ]\"\r\n>\r\n  {{ text }}\r\n</span>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class VnlpLabelTagModule {
}
VnlpLabelTagModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpLabelTagModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagModule, declarations: [VnlpLabelTagComponent], imports: [CommonModule], exports: [VnlpLabelTagComponent] });
VnlpLabelTagModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpLabelTagComponent],
                    imports: [CommonModule],
                    exports: [VnlpLabelTagComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpLabelTagComponent, VnlpLabelTagModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-label-tag.mjs.map
