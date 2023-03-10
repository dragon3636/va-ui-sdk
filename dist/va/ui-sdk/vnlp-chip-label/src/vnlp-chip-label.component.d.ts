import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
declare type FirstType = 1 | 2 | 3;
declare type SecondType = null | 'icon' | 'text icon' | 'icon text' | 'with image';
export declare class VnlpChipLabelComponent implements OnInit {
    firstType: FirstType;
    secondType: SecondType;
    height: string;
    width: string;
    backgroundColor: string;
    border: string;
    imgUrl: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpChipLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpChipLabelComponent, "vnlp-chip-label", never, { "firstType": "firstType"; "secondType": "secondType"; "height": "height"; "width": "width"; "backgroundColor": "backgroundColor"; "border": "border"; "imgUrl": "imgUrl"; }, {}, never, never, false>;
}
export {};
