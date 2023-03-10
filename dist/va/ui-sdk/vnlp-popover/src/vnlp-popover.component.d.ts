import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpPopoverComponent implements OnInit {
    private eRef;
    options: {
        icon?: string;
        label: string;
        key: string;
    }[];
    position: 'top left' | 'top right' | 'top center' | 'bottom left' | 'bottom right' | 'bottom center';
    onOptionClick: EventEmitter<any>;
    showOptions: boolean;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    onShowOptions(): void;
    clickout(event: any): void;
    onClickOption(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpPopoverComponent, "vnlp-popover", never, { "options": "options"; "position": "position"; }, { "onOptionClick": "onOptionClick"; }, never, never, false>;
}
