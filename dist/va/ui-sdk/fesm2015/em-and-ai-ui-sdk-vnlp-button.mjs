import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpButtonComponent {
    constructor() {
        this.type = 'primary';
        this.title = 'button';
        this.size = 'sm';
        this.disabled = false;
        this.icon = '';
        this.iconPosition = 'left';
        this.onClick = new EventEmitter();
    }
    ngOnInit() { }
    handleClick() {
        this.onClick.emit();
    }
}
VnlpButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpButtonComponent, selector: "vnlp-button", inputs: { type: "type", title: "title", size: "size", disabled: "disabled", icon: "icon", iconPosition: "iconPosition" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<button\r\n  [ngClass]=\"{\r\n    'px-3 py-4 rounded-lg inline-flex justify-between items-center capitalize disabled:opacity-50 transition ease-in-out duration-200': true,\r\n    primary: type === 'primary',\r\n    light: type === 'light',\r\n    transparent: type === 'transparent',\r\n    sm: size === 'sm',\r\n    lg: size === 'lg',\r\n    'show-icon': icon\r\n  }\"\r\n  (click)=\"handleClick()\"\r\n  [disabled]=\"disabled\"\r\n>\r\n  <span\r\n    [ngClass]=\"{\r\n      'font-bold text-light': true,\r\n      'order-1': icon && iconPosition === 'right',\r\n      'ml-2': icon && iconPosition === 'right',\r\n      'mr-2': icon && iconPosition === 'left',\r\n      'text-sm': size === 'sm',\r\n      'text-lg': size === 'lg'\r\n    }\"\r\n  >\r\n    {{ title }}\r\n  </span>\r\n  <span *ngIf=\"icon\" class=\"input-icon\">\r\n    <i [class]=\"'icon icon-vnlp-icon-' + icon\"></i>\r\n  </span>\r\n</button>\r\n", styles: ["button{color:#fff}button.sm{height:40px}button.lg{height:48px}.primary{background-color:#007df9}.primary:hover{background-color:#0064c7}.primary:disabled{border:unset;background-color:#007df9}.light{color:#141416;background-color:#fff;box-shadow:0 0 1px 2px #e6e8ec}.light:hover{background-color:#141416;box-shadow:0 0 1px 2px #141416}.light:hover span,.light:hover .icon{color:#fff}.light:disabled{background-color:#141416;box-shadow:0 0 1px 2px #e6e8ec}.light:disabled span{color:#fff}.light:disabled .icon{color:#fff}.transparent{background-color:transparent;box-shadow:0 0 1px 2px #777e90;color:#fff}.transparent:hover{color:#141416;background-color:#fff;box-shadow:0 0 1px 2px #fff}.transparent:disabled{background-color:#fff;box-shadow:0 0 1px 2px #fff}.transparent:disabled span{color:#141416}.transparent:disabled .icon{color:#141416}.button-icon{width:16px;height:16px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-button', template: "<button\r\n  [ngClass]=\"{\r\n    'px-3 py-4 rounded-lg inline-flex justify-between items-center capitalize disabled:opacity-50 transition ease-in-out duration-200': true,\r\n    primary: type === 'primary',\r\n    light: type === 'light',\r\n    transparent: type === 'transparent',\r\n    sm: size === 'sm',\r\n    lg: size === 'lg',\r\n    'show-icon': icon\r\n  }\"\r\n  (click)=\"handleClick()\"\r\n  [disabled]=\"disabled\"\r\n>\r\n  <span\r\n    [ngClass]=\"{\r\n      'font-bold text-light': true,\r\n      'order-1': icon && iconPosition === 'right',\r\n      'ml-2': icon && iconPosition === 'right',\r\n      'mr-2': icon && iconPosition === 'left',\r\n      'text-sm': size === 'sm',\r\n      'text-lg': size === 'lg'\r\n    }\"\r\n  >\r\n    {{ title }}\r\n  </span>\r\n  <span *ngIf=\"icon\" class=\"input-icon\">\r\n    <i [class]=\"'icon icon-vnlp-icon-' + icon\"></i>\r\n  </span>\r\n</button>\r\n", styles: ["button{color:#fff}button.sm{height:40px}button.lg{height:48px}.primary{background-color:#007df9}.primary:hover{background-color:#0064c7}.primary:disabled{border:unset;background-color:#007df9}.light{color:#141416;background-color:#fff;box-shadow:0 0 1px 2px #e6e8ec}.light:hover{background-color:#141416;box-shadow:0 0 1px 2px #141416}.light:hover span,.light:hover .icon{color:#fff}.light:disabled{background-color:#141416;box-shadow:0 0 1px 2px #e6e8ec}.light:disabled span{color:#fff}.light:disabled .icon{color:#fff}.transparent{background-color:transparent;box-shadow:0 0 1px 2px #777e90;color:#fff}.transparent:hover{color:#141416;background-color:#fff;box-shadow:0 0 1px 2px #fff}.transparent:disabled{background-color:#fff;box-shadow:0 0 1px 2px #fff}.transparent:disabled span{color:#141416}.transparent:disabled .icon{color:#141416}.button-icon{width:16px;height:16px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class VnlpButtonModule {
}
VnlpButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpButtonModule, declarations: [VnlpButtonComponent], imports: [CommonModule], exports: [VnlpButtonComponent] });
VnlpButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpButtonModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpButtonComponent],
                    imports: [CommonModule],
                    exports: [VnlpButtonComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpButtonComponent, VnlpButtonModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-button.mjs.map
