import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpButtonComponent implements OnInit {
    type: 'primary' | 'light' | 'transparent';
    title: string;
    size: 'sm' | 'lg';
    disabled: boolean;
    icon: string;
    iconPosition: 'left' | 'right';
    onClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpButtonComponent, "vnlp-button", never, { "type": "type"; "title": "title"; "size": "size"; "disabled": "disabled"; "icon": "icon"; "iconPosition": "iconPosition"; }, { "onClick": "onClick"; }, never, never, false>;
}
