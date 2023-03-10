import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

class VnlpDividersComponent {
    constructor() {
        this.type = '';
        this.width = '200px';
    }
    ngOnInit() { }
}
VnlpDividersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDividersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpDividersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpDividersComponent, selector: "vnlp-dividers", inputs: { type: "type", width: "width" }, ngImport: i0, template: "<ng-container\r\n  [ngTemplateOutlet]=\"type === 'Dividers 1x' ? normal : bold\"\r\n></ng-container>\r\n\r\n<ng-template #normal>\r\n  <div\r\n    class=\"border-[1px] border-solid border-stroke\"\r\n    [ngStyle]=\"{ width: width }\"\r\n  ></div>\r\n</ng-template>\r\n\r\n<ng-template #bold>\r\n  <div\r\n    class=\"border-[2px] border-solid border-stroke\"\r\n    [ngStyle]=\"{ width: width }\"\r\n  ></div>\r\n</ng-template>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDividersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-dividers', template: "<ng-container\r\n  [ngTemplateOutlet]=\"type === 'Dividers 1x' ? normal : bold\"\r\n></ng-container>\r\n\r\n<ng-template #normal>\r\n  <div\r\n    class=\"border-[1px] border-solid border-stroke\"\r\n    [ngStyle]=\"{ width: width }\"\r\n  ></div>\r\n</ng-template>\r\n\r\n<ng-template #bold>\r\n  <div\r\n    class=\"border-[2px] border-solid border-stroke\"\r\n    [ngStyle]=\"{ width: width }\"\r\n  ></div>\r\n</ng-template>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], width: [{
                type: Input
            }] } });

class VnlpDividersModule {
}
VnlpDividersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDividersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpDividersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpDividersModule, declarations: [VnlpDividersComponent], imports: [CommonModule, I18nModule], exports: [VnlpDividersComponent] });
VnlpDividersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDividersModule, imports: [CommonModule, I18nModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpDividersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpDividersComponent],
                    imports: [CommonModule, I18nModule],
                    exports: [VnlpDividersComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpDividersComponent, VnlpDividersModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-dividers.mjs.map
