import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpTickboxComponent implements OnInit {
    label: string;
    name: string;
    checked: boolean;
    checkedChange: EventEmitter<boolean>;
    disabled: boolean;
    labelPosition: 'left' | 'right';
    onChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpTickboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpTickboxComponent, "vnlp-tickbox", never, { "label": "label"; "name": "name"; "checked": "checked"; "disabled": "disabled"; "labelPosition": "labelPosition"; }, { "checkedChange": "checkedChange"; "onChange": "onChange"; }, never, never, false>;
}
