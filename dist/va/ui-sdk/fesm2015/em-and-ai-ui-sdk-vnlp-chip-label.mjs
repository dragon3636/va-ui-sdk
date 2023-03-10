import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpChipLabelComponent {
    constructor() {
        this.firstType = 1;
        this.secondType = 'text icon';
        this.height = '34px';
        this.width = '83px';
        this.backgroundColor = '#007DF9';
        this.border = '4px solid map-get($color, primary)';
        this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU';
    }
    ngOnInit() { }
}
VnlpChipLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpChipLabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpChipLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpChipLabelComponent, selector: "vnlp-chip-label", inputs: { firstType: "firstType", secondType: "secondType", height: "height", width: "width", backgroundColor: "backgroundColor", border: "border", imgUrl: "imgUrl" }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{ 'rounded-[8px]': secondType !== null }\"\r\n  class=\"flex items-center justify-center gap-[6px] rounded-[10px] py-[5px] px-[12px]\"\r\n  [ngStyle]=\"{\r\n    width: width,\r\n    height: height,\r\n    'background-color': backgroundColor,\r\n    border: border\r\n  }\"\r\n>\r\n  <div\r\n    *ngIf=\"secondType !== 'icon'\"\r\n    [ngClass]=\"{ 'order-1': secondType === 'icon text' }\"\r\n    class=\"text-[14px] font-normal text-neutral-8\"\r\n  >\r\n    Chip\r\n  </div>\r\n  <i\r\n    *ngIf=\"secondType !== null && secondType !== 'with image'\"\r\n    [class]=\"'icon-vnlp-icon-add-circle-linear'\"\r\n  ></i>\r\n  <img\r\n    *ngIf=\"secondType === 'with image'\"\r\n    class=\"h-[20px] w-[20px] rounded-[50%]\"\r\n    src=\"{{ imgUrl }}\"\r\n  />\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpChipLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-chip-label', template: "<div\r\n  [ngClass]=\"{ 'rounded-[8px]': secondType !== null }\"\r\n  class=\"flex items-center justify-center gap-[6px] rounded-[10px] py-[5px] px-[12px]\"\r\n  [ngStyle]=\"{\r\n    width: width,\r\n    height: height,\r\n    'background-color': backgroundColor,\r\n    border: border\r\n  }\"\r\n>\r\n  <div\r\n    *ngIf=\"secondType !== 'icon'\"\r\n    [ngClass]=\"{ 'order-1': secondType === 'icon text' }\"\r\n    class=\"text-[14px] font-normal text-neutral-8\"\r\n  >\r\n    Chip\r\n  </div>\r\n  <i\r\n    *ngIf=\"secondType !== null && secondType !== 'with image'\"\r\n    [class]=\"'icon-vnlp-icon-add-circle-linear'\"\r\n  ></i>\r\n  <img\r\n    *ngIf=\"secondType === 'with image'\"\r\n    class=\"h-[20px] w-[20px] rounded-[50%]\"\r\n    src=\"{{ imgUrl }}\"\r\n  />\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { firstType: [{
                type: Input
            }], secondType: [{
                type: Input
            }], height: [{
                type: Input
            }], width: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], border: [{
                type: Input
            }], imgUrl: [{
                type: Input
            }] } });

class VnlpChipLabelModule {
}
VnlpChipLabelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpChipLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpChipLabelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpChipLabelModule, declarations: [VnlpChipLabelComponent], imports: [CommonModule], exports: [VnlpChipLabelComponent] });
VnlpChipLabelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpChipLabelModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpChipLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpChipLabelComponent],
                    imports: [CommonModule],
                    exports: [VnlpChipLabelComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpChipLabelComponent, VnlpChipLabelModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-chip-label.mjs.map
