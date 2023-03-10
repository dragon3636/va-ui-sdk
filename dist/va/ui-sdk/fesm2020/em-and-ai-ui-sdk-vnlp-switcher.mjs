import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpSwitcherComponent {
    constructor() {
        this.switcherList = [
            { title: 'Section 1', icon: 'design-grid-filled', key: 'key1' },
            { title: 'Section 2', icon: 'pen-line', key: 'key2' },
            { title: 'Section 3', icon: 'pie-04-line', key: 'key3' },
            { title: 'Section 4', icon: 'doughnut-filled', key: 'key4' },
        ];
        this.name = '';
        this.selected = 'key1';
        this.onChange = new EventEmitter();
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.selectedIndex =
            this.switcherList.findIndex((f) => f.key === this.selected) | 0;
    }
    handleSwitch(index) {
        this.selectedIndex = index;
        this.onChange.emit({
            [this.name]: this.switcherList[index],
        });
    }
}
VnlpSwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpSwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpSwitcherComponent, selector: "vnlp-switcher", inputs: { switcherList: "switcherList", name: "name", selected: "selected" }, outputs: { onChange: "onChange" }, ngImport: i0, template: "<div class=\"sth\">\r\n  <ul class=\"vnlp-switcher-container\">\r\n    <div\r\n      class=\"slider\"\r\n      [ngStyle]=\"{\r\n        width: 'calc(' + 100 / switcherList.length + '% + 2px)',\r\n        left:\r\n          selectedIndex === 0\r\n            ? '4px'\r\n            : selectedIndex === switcherList.length - 1\r\n            ? 'calc(' + selectedIndex * (100 / switcherList.length) + '% - 6px)'\r\n            : 'calc(' + selectedIndex * (100 / switcherList.length) + '% - 2px)'\r\n      }\"\r\n      [attr.data-index]=\"selectedIndex\"\r\n    ></div>\r\n    <li\r\n      *ngFor=\"let section of switcherList; index as i\"\r\n      [class.active]=\"section?.title === selected\"\r\n      (click)=\"handleSwitch(i)\"\r\n      [style.width.%]=\"100 / switcherList.length\"\r\n      [class.selected]=\"selectedIndex === i\"\r\n    >\r\n      <i\r\n        *ngIf=\"section?.icon\"\r\n        [class]=\"'mr-2 icon icon-vnlp-icon-' + section?.icon\"\r\n      ></i>\r\n\r\n      <span *ngIf=\"section?.title\">{{ section?.title }}</span>\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".vnlp-switcher-container{min-width:532px;border-radius:12px;background-color:#e6e8ec;padding:0 4px;display:inline-flex;align-items:center;justify-content:space-between;position:relative}.vnlp-switcher-container .slider{position:absolute;top:4px;z-index:2;bottom:4px;left:0;background-color:#fff;border-radius:10px;transition:all .2s ease-in-out}.vnlp-switcher-container li{width:-moz-fit-content;width:fit-content;height:100%;overflow:hidden;padding:12px 16px;cursor:pointer;-webkit-user-select:none;user-select:none;color:#777e90;display:flex;align-items:center;justify-content:center;position:relative}.vnlp-switcher-container li:not(:last-child):after{content:\"\";position:absolute;top:50%;transform:translateY(-50%);right:0;width:1px;height:50%;background-color:#b1b5c3}.vnlp-switcher-container li.selected{color:#141416}.vnlp-switcher-container li i,.vnlp-switcher-container li span{z-index:2}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitcherComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-switcher', template: "<div class=\"sth\">\r\n  <ul class=\"vnlp-switcher-container\">\r\n    <div\r\n      class=\"slider\"\r\n      [ngStyle]=\"{\r\n        width: 'calc(' + 100 / switcherList.length + '% + 2px)',\r\n        left:\r\n          selectedIndex === 0\r\n            ? '4px'\r\n            : selectedIndex === switcherList.length - 1\r\n            ? 'calc(' + selectedIndex * (100 / switcherList.length) + '% - 6px)'\r\n            : 'calc(' + selectedIndex * (100 / switcherList.length) + '% - 2px)'\r\n      }\"\r\n      [attr.data-index]=\"selectedIndex\"\r\n    ></div>\r\n    <li\r\n      *ngFor=\"let section of switcherList; index as i\"\r\n      [class.active]=\"section?.title === selected\"\r\n      (click)=\"handleSwitch(i)\"\r\n      [style.width.%]=\"100 / switcherList.length\"\r\n      [class.selected]=\"selectedIndex === i\"\r\n    >\r\n      <i\r\n        *ngIf=\"section?.icon\"\r\n        [class]=\"'mr-2 icon icon-vnlp-icon-' + section?.icon\"\r\n      ></i>\r\n\r\n      <span *ngIf=\"section?.title\">{{ section?.title }}</span>\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".vnlp-switcher-container{min-width:532px;border-radius:12px;background-color:#e6e8ec;padding:0 4px;display:inline-flex;align-items:center;justify-content:space-between;position:relative}.vnlp-switcher-container .slider{position:absolute;top:4px;z-index:2;bottom:4px;left:0;background-color:#fff;border-radius:10px;transition:all .2s ease-in-out}.vnlp-switcher-container li{width:-moz-fit-content;width:fit-content;height:100%;overflow:hidden;padding:12px 16px;cursor:pointer;-webkit-user-select:none;user-select:none;color:#777e90;display:flex;align-items:center;justify-content:center;position:relative}.vnlp-switcher-container li:not(:last-child):after{content:\"\";position:absolute;top:50%;transform:translateY(-50%);right:0;width:1px;height:50%;background-color:#b1b5c3}.vnlp-switcher-container li.selected{color:#141416}.vnlp-switcher-container li i,.vnlp-switcher-container li span{z-index:2}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { switcherList: [{
                type: Input
            }], name: [{
                type: Input
            }], selected: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class VnlpSwitcherModule {
}
VnlpSwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitcherModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpSwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitcherModule, declarations: [VnlpSwitcherComponent], imports: [CommonModule], exports: [VnlpSwitcherComponent] });
VnlpSwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitcherModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpSwitcherComponent],
                    imports: [CommonModule],
                    exports: [VnlpSwitcherComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpSwitcherComponent, VnlpSwitcherModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-switcher.mjs.map
