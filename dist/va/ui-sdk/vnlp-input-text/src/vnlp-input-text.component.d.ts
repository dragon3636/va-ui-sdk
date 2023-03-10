import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpInputTextComponent implements OnInit {
    label: string;
    name: string;
    value: string;
    valueChange: EventEmitter<any>;
    error: boolean;
    placeholder: string;
    disabled: boolean;
    icon: string;
    informationText: string;
    onChange: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleChange(): void;
    handleBlur(event: any): void;
    clearInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpInputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpInputTextComponent, "vnlp-input-text", never, { "label": "label"; "name": "name"; "value": "value"; "error": "error"; "placeholder": "placeholder"; "disabled": "disabled"; "icon": "icon"; "informationText": "informationText"; }, { "valueChange": "valueChange"; "onChange": "onChange"; "onBlur": "onBlur"; }, never, never, false>;
}
