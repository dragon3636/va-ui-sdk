import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpMultiselectComponent implements OnInit {
    multiselectWidth: string;
    multiEmail: boolean;
    label: string;
    valueChange: EventEmitter<any>;
    data: string;
    listData: string[];
    invalidEmail: boolean;
    constructor();
    ngOnInit(): void;
    addData(): void;
    removeDate(data: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpMultiselectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpMultiselectComponent, "vnlp-multiselect", never, { "multiselectWidth": "multiselectWidth"; "multiEmail": "multiEmail"; "label": "label"; }, { "valueChange": "valueChange"; }, never, never, false>;
}
