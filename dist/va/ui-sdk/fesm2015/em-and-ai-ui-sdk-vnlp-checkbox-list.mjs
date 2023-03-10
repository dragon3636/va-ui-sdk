import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@em-and-ai/ui-sdk/vnlp-checkbox';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';

class VnlpCheckboxListComponent {
    constructor() {
        this.options = [];
        this.optionsChange = new EventEmitter();
        this.name = '';
        this.onChange = new EventEmitter();
    }
    ngOnInit() { }
    handleCheckboxChange(data) {
        this.onChange.emit({
            [this.name]: this.options,
        });
    }
}
VnlpCheckboxListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpCheckboxListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpCheckboxListComponent, selector: "vnlp-checkbox-list", inputs: { options: "options", name: "name" }, outputs: { optionsChange: "optionsChange", onChange: "onChange" }, ngImport: i0, template: "<ul class=\"vnlp-checkbox-list-container\">\r\n  <li *ngFor=\"let option of options\" class=\"mb-2\">\r\n    <vnlp-checkbox\r\n      [(checked)]=\"option.checked\"\r\n      [label]=\"option.title\"\r\n      (onChange)=\"handleCheckboxChange($event)\"\r\n    ></vnlp-checkbox>\r\n  </li>\r\n</ul>\r\n", styles: [".vnlp-checkbox-list-container{display:flex;flex-direction:column}.vnlp-checkbox-list-container.checkbox-in-list li{background-color:red}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.VnlpCheckboxComponent, selector: "vnlp-checkbox", inputs: ["label", "name", "disabled", "checked", "labelPosition", "isShowInList", "isShowDivider"], outputs: ["checkedChange", "onChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-checkbox-list', template: "<ul class=\"vnlp-checkbox-list-container\">\r\n  <li *ngFor=\"let option of options\" class=\"mb-2\">\r\n    <vnlp-checkbox\r\n      [(checked)]=\"option.checked\"\r\n      [label]=\"option.title\"\r\n      (onChange)=\"handleCheckboxChange($event)\"\r\n    ></vnlp-checkbox>\r\n  </li>\r\n</ul>\r\n", styles: [".vnlp-checkbox-list-container{display:flex;flex-direction:column}.vnlp-checkbox-list-container.checkbox-in-list li{background-color:red}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { options: [{
                type: Input
            }], optionsChange: [{
                type: Output
            }], name: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class VnlpCheckboxListModule {
}
VnlpCheckboxListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpCheckboxListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListModule, declarations: [VnlpCheckboxListComponent], imports: [CommonModule, VnlpCheckboxModule], exports: [VnlpCheckboxListComponent] });
VnlpCheckboxListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListModule, imports: [CommonModule, VnlpCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpCheckboxListComponent],
                    imports: [CommonModule, VnlpCheckboxModule],
                    exports: [VnlpCheckboxListComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpCheckboxListComponent, VnlpCheckboxListModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-checkbox-list.mjs.map
