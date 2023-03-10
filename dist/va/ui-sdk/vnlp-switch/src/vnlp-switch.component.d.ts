import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpSwitchComponent implements OnInit {
    checked: boolean;
    checkedChange: EventEmitter<any>;
    disabled: boolean;
    label: string;
    name: string;
    labelPosition: 'left' | 'right';
    size: 'sm' | 'md';
    onChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpSwitchComponent, "vnlp-switch", never, { "checked": "checked"; "disabled": "disabled"; "label": "label"; "name": "name"; "labelPosition": "labelPosition"; "size": "size"; }, { "checkedChange": "checkedChange"; "onChange": "onChange"; }, never, never, false>;
}
