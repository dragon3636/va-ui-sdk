import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
declare type LabelType = 'gray' | 'orange' | 'red' | 'blue' | 'green';
export declare class VnlpLabelTagComponent implements OnInit {
    text: string;
    type: LabelType;
    typeList: {
        gray: {
            textColor: string;
            bgc: string;
        };
        orange: {
            textColor: string;
            bgc: string;
        };
        red: {
            textColor: string;
            bgc: string;
        };
        blue: {
            textColor: string;
            bgc: string;
        };
        green: {
            textColor: string;
            bgc: string;
        };
    };
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpLabelTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpLabelTagComponent, "vnlp-label-tag", never, { "text": "text"; "type": "type"; }, {}, never, never, false>;
}
export {};
