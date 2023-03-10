import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpPopoverComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.options = [];
        this.position = 'bottom center';
        this.onOptionClick = new EventEmitter();
        this.showOptions = false;
    }
    ngOnInit() { }
    onShowOptions() {
        this.showOptions = !this.showOptions;
    }
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showOptions = false;
        }
    }
    onClickOption(key) {
        this.onOptionClick.emit(key);
        this.showOptions = false;
    }
}
VnlpPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
VnlpPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpPopoverComponent, selector: "vnlp-popover", inputs: { options: "options", position: "position" }, outputs: { onOptionClick: "onOptionClick" }, host: { listeners: { "document:click": "clickout($event)" } }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{\r\n    'popover-options-container': true,\r\n    opened: showOptions\r\n  }\"\r\n>\r\n  <span class=\"more-options-icon\" (click)=\"onShowOptions()\">\r\n    <i class=\"icon icon-vnlp-icon-more-linear text-xxl\"></i>\r\n  </span>\r\n  <ul *ngIf=\"showOptions\" [class]=\"'options ' + position\">\r\n    <li\r\n      *ngFor=\"let option of options\"\r\n      class=\"text-sm text-left p-2 select-none\"\r\n      (click)=\"onClickOption(option.key)\"\r\n    >\r\n      <i *ngIf=\"option.icon\" [class]=\"'icon icon-vnlp-icon-' + option.icon\"></i>\r\n      <span>{{ option.label }}</span>\r\n    </li>\r\n\r\n    <li\r\n      *ngIf=\"!options.length\"\r\n      class=\"text-sm text-left p-2 select-none empty-option\"\r\n    >\r\n      Empty option...\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".popover-options-container{display:flex;align-items:center;border-radius:10px;position:relative}.popover-options-container .more-options-icon{color:#777e90;box-shadow:0 0 1px 1px #e6e8ec;background-color:#fff;border-radius:10px}.popover-options-container .options{position:absolute;min-width:200px;background-color:#fff;box-shadow:0 3px 8px #0000003d;z-index:1;border-radius:6px;overflow:hidden}.popover-options-container .options.top{bottom:110%}.popover-options-container .options.left{right:0}.popover-options-container .options.right{left:0}.popover-options-container .options.bottom{top:110%}.popover-options-container .options.center{left:50%;transform:translate(-50%)}.popover-options-container .options li{white-space:nowrap}.popover-options-container .options li.empty-option:hover{background-color:unset}.popover-options-container .options li:hover,.popover-options-container .options li.opened{background-color:#e6f2fe}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-popover', template: "<div\r\n  [ngClass]=\"{\r\n    'popover-options-container': true,\r\n    opened: showOptions\r\n  }\"\r\n>\r\n  <span class=\"more-options-icon\" (click)=\"onShowOptions()\">\r\n    <i class=\"icon icon-vnlp-icon-more-linear text-xxl\"></i>\r\n  </span>\r\n  <ul *ngIf=\"showOptions\" [class]=\"'options ' + position\">\r\n    <li\r\n      *ngFor=\"let option of options\"\r\n      class=\"text-sm text-left p-2 select-none\"\r\n      (click)=\"onClickOption(option.key)\"\r\n    >\r\n      <i *ngIf=\"option.icon\" [class]=\"'icon icon-vnlp-icon-' + option.icon\"></i>\r\n      <span>{{ option.label }}</span>\r\n    </li>\r\n\r\n    <li\r\n      *ngIf=\"!options.length\"\r\n      class=\"text-sm text-left p-2 select-none empty-option\"\r\n    >\r\n      Empty option...\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".popover-options-container{display:flex;align-items:center;border-radius:10px;position:relative}.popover-options-container .more-options-icon{color:#777e90;box-shadow:0 0 1px 1px #e6e8ec;background-color:#fff;border-radius:10px}.popover-options-container .options{position:absolute;min-width:200px;background-color:#fff;box-shadow:0 3px 8px #0000003d;z-index:1;border-radius:6px;overflow:hidden}.popover-options-container .options.top{bottom:110%}.popover-options-container .options.left{right:0}.popover-options-container .options.right{left:0}.popover-options-container .options.bottom{top:110%}.popover-options-container .options.center{left:50%;transform:translate(-50%)}.popover-options-container .options li{white-space:nowrap}.popover-options-container .options li.empty-option:hover{background-color:unset}.popover-options-container .options li:hover,.popover-options-container .options li.opened{background-color:#e6f2fe}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { options: [{
                type: Input
            }], position: [{
                type: Input
            }], onOptionClick: [{
                type: Output
            }], clickout: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class VnlpPopoverModule {
}
VnlpPopoverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpPopoverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverModule, declarations: [VnlpPopoverComponent], imports: [CommonModule], exports: [VnlpPopoverComponent] });
VnlpPopoverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpPopoverComponent],
                    imports: [CommonModule],
                    exports: [VnlpPopoverComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpPopoverComponent, VnlpPopoverModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-popover.mjs.map
