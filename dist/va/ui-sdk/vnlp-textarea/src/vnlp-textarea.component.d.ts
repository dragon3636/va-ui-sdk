import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpTextareaComponent implements OnInit {
    label: string;
    valueChange: EventEmitter<any>;
    name: string;
    value: string;
    error: boolean;
    placeholder: string;
    disabled: boolean;
    rows: string;
    maxLength: string;
    width: string;
    onChange: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleChange(newValue: any): void;
    handleBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpTextareaComponent, "vnlp-textarea", never, { "label": "label"; "name": "name"; "value": "value"; "error": "error"; "placeholder": "placeholder"; "disabled": "disabled"; "rows": "rows"; "maxLength": "maxLength"; "width": "width"; }, { "valueChange": "valueChange"; "onChange": "onChange"; "onBlur": "onBlur"; }, never, never, false>;
}
