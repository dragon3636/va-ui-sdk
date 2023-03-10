import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpSwitcherComponent implements OnInit {
    switcherList: {
        title: string;
        icon: string;
        key: string;
    }[];
    name: string;
    selected: string;
    onChange: EventEmitter<any>;
    selectedIndex: number;
    constructor();
    ngOnInit(): void;
    handleSwitch(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpSwitcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpSwitcherComponent, "vnlp-switcher", never, { "switcherList": "switcherList"; "name": "name"; "selected": "selected"; }, { "onChange": "onChange"; }, never, never, false>;
}
