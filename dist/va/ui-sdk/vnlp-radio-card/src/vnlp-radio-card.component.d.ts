import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpRadioCardComponent implements OnInit {
    label: string;
    name: string;
    type: 'checkbox' | 'radiobox';
    description: string;
    checked: boolean;
    checkedChange: EventEmitter<boolean>;
    disabled: boolean;
    labelPosition: 'left' | 'right';
    onChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpRadioCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpRadioCardComponent, "vnlp-radio-card", never, { "label": "label"; "name": "name"; "type": "type"; "description": "description"; "checked": "checked"; "disabled": "disabled"; "labelPosition": "labelPosition"; }, { "checkedChange": "checkedChange"; "onChange": "onChange"; }, never, never, false>;
}
