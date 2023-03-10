import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpLogoComponent implements OnInit {
    type: 'normal' | 'vertical' | 'horizontal';
    onClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpLogoComponent, "vnlp-logo", never, { "type": "type"; }, { "onClick": "onClick"; }, never, never, false>;
}
