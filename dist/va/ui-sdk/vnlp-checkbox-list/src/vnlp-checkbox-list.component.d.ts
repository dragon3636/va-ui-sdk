import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpCheckboxListComponent implements OnInit {
    options: any;
    optionsChange: EventEmitter<any>;
    name: string;
    onChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleCheckboxChange(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpCheckboxListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpCheckboxListComponent, "vnlp-checkbox-list", never, { "options": "options"; "name": "name"; }, { "optionsChange": "optionsChange"; "onChange": "onChange"; }, never, never, false>;
}
