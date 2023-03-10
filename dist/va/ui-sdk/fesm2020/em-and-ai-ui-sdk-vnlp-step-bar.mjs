import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpStepBarComponent {
    constructor() {
        this.currentStep = 1;
        this.stepList = [
            {
                step: 1,
                name: 'Initialization',
            },
            {
                step: 2,
                name: 'Template',
            },
            {
                step: 3,
                name: 'Information setting',
            },
            {
                step: 4,
                name: 'abcxyz',
            },
        ];
    }
    ngOnInit() { }
}
VnlpStepBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpStepBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpStepBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpStepBarComponent, selector: "vnlp-step-bar", inputs: { currentStep: "currentStep", stepList: "stepList" }, ngImport: i0, template: "<div class=\"flex justify-start ml-[24px]\">\r\n  <div class=\"flex items-center gap-[10px]\">\r\n    <!-- Condition -->\r\n    <ng-container *ngFor=\"let step of stepList\">\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"step.step > 1 ? line : noLine\"\r\n        [ngTemplateOutletContext]=\"{ step: step }\"\r\n      ></ng-container>\r\n      <ng-template #line>\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"step.step <= currentStep ? inProcess : unProcess\"\r\n        ></ng-container>\r\n        <ng-template #inProcess>\r\n          <div class=\"w-[45px] h-[1px] bg-primary rounded-[1px]\"></div>\r\n          <div\r\n            class=\"h-[20px] w-[20px] rounded-full bg-primary text-center text-[12px] text-white leading-0 tracking-normal font-bold\"\r\n          >\r\n            {{ step.step }}\r\n          </div>\r\n          <div class=\"text-sm font-medium text-neutral-2\">{{ step.name }}</div>\r\n        </ng-template>\r\n        <ng-template #unProcess>\r\n          <div class=\"w-[45px] h-[2px] bg-neutral-5 rounded-[1px]\"></div>\r\n          <div\r\n            class=\"w-[20px] rounded-full bg-neutral-6 text-center text-[12px] text-white leading-0 tracking-normal font-bold\"\r\n          >\r\n            {{ step.step }}\r\n          </div>\r\n          <div class=\"text-sm font-medium text-neutral-5\">{{ step.name }}</div>\r\n        </ng-template>\r\n      </ng-template>\r\n      <ng-template #noLine>\r\n        <div\r\n          class=\"h-[20px] w-[20px] rounded-full bg-primary text-center text-white text-[12px] leading-0 tracking-normal font-bold\"\r\n        >\r\n          {{ step.step }}\r\n        </div>\r\n        <div class=\"text-sm font-medium text-neutral-2\">{{ step.name }}</div>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpStepBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-step-bar', template: "<div class=\"flex justify-start ml-[24px]\">\r\n  <div class=\"flex items-center gap-[10px]\">\r\n    <!-- Condition -->\r\n    <ng-container *ngFor=\"let step of stepList\">\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"step.step > 1 ? line : noLine\"\r\n        [ngTemplateOutletContext]=\"{ step: step }\"\r\n      ></ng-container>\r\n      <ng-template #line>\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"step.step <= currentStep ? inProcess : unProcess\"\r\n        ></ng-container>\r\n        <ng-template #inProcess>\r\n          <div class=\"w-[45px] h-[1px] bg-primary rounded-[1px]\"></div>\r\n          <div\r\n            class=\"h-[20px] w-[20px] rounded-full bg-primary text-center text-[12px] text-white leading-0 tracking-normal font-bold\"\r\n          >\r\n            {{ step.step }}\r\n          </div>\r\n          <div class=\"text-sm font-medium text-neutral-2\">{{ step.name }}</div>\r\n        </ng-template>\r\n        <ng-template #unProcess>\r\n          <div class=\"w-[45px] h-[2px] bg-neutral-5 rounded-[1px]\"></div>\r\n          <div\r\n            class=\"w-[20px] rounded-full bg-neutral-6 text-center text-[12px] text-white leading-0 tracking-normal font-bold\"\r\n          >\r\n            {{ step.step }}\r\n          </div>\r\n          <div class=\"text-sm font-medium text-neutral-5\">{{ step.name }}</div>\r\n        </ng-template>\r\n      </ng-template>\r\n      <ng-template #noLine>\r\n        <div\r\n          class=\"h-[20px] w-[20px] rounded-full bg-primary text-center text-white text-[12px] leading-0 tracking-normal font-bold\"\r\n        >\r\n          {{ step.step }}\r\n        </div>\r\n        <div class=\"text-sm font-medium text-neutral-2\">{{ step.name }}</div>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { currentStep: [{
                type: Input
            }], stepList: [{
                type: Input
            }] } });

// import { I18nModule } from '@em-and-ai/ui-sdk/i18n';
class VnlpStepBarModule {
}
VnlpStepBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpStepBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpStepBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpStepBarModule, declarations: [VnlpStepBarComponent], imports: [CommonModule], exports: [VnlpStepBarComponent] });
VnlpStepBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpStepBarModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpStepBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpStepBarComponent],
                    imports: [CommonModule],
                    exports: [VnlpStepBarComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpStepBarComponent, VnlpStepBarModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-step-bar.mjs.map
