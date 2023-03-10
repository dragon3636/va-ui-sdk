import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class UiSdkService {
    constructor() { }
}
UiSdkService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UiSdkService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class UiSdkComponent {
    constructor() { }
    ngOnInit() { }
}
UiSdkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UiSdkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: UiSdkComponent, selector: "lib-ui-sdk", ngImport: i0, template: `
    <p>ui-sdk works!</p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ui-sdk', template: `
    <p>ui-sdk works!</p>
  ` }]
        }], ctorParameters: function () { return []; } });

class UiSdkModule {
}
UiSdkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiSdkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: UiSdkModule, declarations: [UiSdkComponent], exports: [UiSdkComponent] });
UiSdkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UiSdkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UiSdkComponent],
                    imports: [],
                    exports: [UiSdkComponent],
                }]
        }] });

/*
 * Public API Surface of ui-sdk
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UiSdkComponent, UiSdkModule, UiSdkService };
//# sourceMappingURL=em-and-ai-ui-sdk.mjs.map
