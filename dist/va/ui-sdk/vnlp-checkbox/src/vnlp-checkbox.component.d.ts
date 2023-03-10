import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpCheckboxComponent implements OnInit {
    label: string;
    name: string;
    disabled: boolean;
    checked: boolean;
    checkedChange: EventEmitter<any>;
    labelPosition: 'left' | 'right';
    isShowInList: boolean;
    isShowDivider: boolean;
    onChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpCheckboxComponent, "vnlp-checkbox", never, { "label": "label"; "name": "name"; "disabled": "disabled"; "checked": "checked"; "labelPosition": "labelPosition"; "isShowInList": "isShowInList"; "isShowDivider": "isShowDivider"; }, { "checkedChange": "checkedChange"; "onChange": "onChange"; }, never, never, false>;
}
