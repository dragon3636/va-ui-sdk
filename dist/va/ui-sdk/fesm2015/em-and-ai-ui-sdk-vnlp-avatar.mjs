import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpAvatarComponent {
    constructor() {
        this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU';
        this.status = 'offline';
    }
    ngOnInit() { }
}
VnlpAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpAvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpAvatarComponent, selector: "vnlp-avatar", inputs: { imgUrl: "imgUrl", status: "status" }, ngImport: i0, template: "<div class=\"relative cursor-pointer\">\r\n  <ng-container\r\n    [ngTemplateOutlet]=\"status === 'online' ? online : offline\"\r\n  ></ng-container>\r\n\r\n  <ng-template #online>\r\n    <img class=\"w-[40px] h-[40px] rounded-full\" src=\"{{ imgUrl }}\" />\r\n    <span\r\n      class=\"top-[28px] left-[32px] absolute w-[8px] h-[8px] bg-success border-[1px] border-solid border-white rounded-full\"\r\n    ></span>\r\n  </ng-template>\r\n\r\n  <ng-template #offline>\r\n    <img class=\"w-[40px] h-[40px] rounded-full\" src=\"{{ imgUrl }}\" />\r\n  </ng-template>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-avatar', template: "<div class=\"relative cursor-pointer\">\r\n  <ng-container\r\n    [ngTemplateOutlet]=\"status === 'online' ? online : offline\"\r\n  ></ng-container>\r\n\r\n  <ng-template #online>\r\n    <img class=\"w-[40px] h-[40px] rounded-full\" src=\"{{ imgUrl }}\" />\r\n    <span\r\n      class=\"top-[28px] left-[32px] absolute w-[8px] h-[8px] bg-success border-[1px] border-solid border-white rounded-full\"\r\n    ></span>\r\n  </ng-template>\r\n\r\n  <ng-template #offline>\r\n    <img class=\"w-[40px] h-[40px] rounded-full\" src=\"{{ imgUrl }}\" />\r\n  </ng-template>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { imgUrl: [{
                type: Input
            }], status: [{
                type: Input
            }] } });

class VnlpAvatarModule {
}
VnlpAvatarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpAvatarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpAvatarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpAvatarModule, declarations: [VnlpAvatarComponent], imports: [CommonModule], exports: [VnlpAvatarComponent, CommonModule] });
VnlpAvatarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpAvatarModule, imports: [CommonModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpAvatarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpAvatarComponent],
                    imports: [CommonModule],
                    exports: [VnlpAvatarComponent, CommonModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpAvatarComponent, VnlpAvatarModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-avatar.mjs.map
