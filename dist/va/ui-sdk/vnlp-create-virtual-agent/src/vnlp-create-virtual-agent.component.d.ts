import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
declare type Mode = 'create' | 'show';
declare type LabelType = 'gray' | 'orange' | 'red' | 'blue' | 'green';
export declare class VnlpCreateVirtualAgentComponent implements OnInit {
    label: string;
    mode: Mode;
    disabled: boolean;
    title: string;
    description: string;
    labelText: string;
    labelType: LabelType;
    type: string;
    onClick: EventEmitter<any>;
    onOptionClick: EventEmitter<any>;
    showOptions: boolean;
    constructor();
    ngOnInit(): void;
    handleCreate(): void;
    onClickOption(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpCreateVirtualAgentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpCreateVirtualAgentComponent, "vnlp-create-virtual-agent", never, { "label": "label"; "mode": "mode"; "disabled": "disabled"; "title": "title"; "description": "description"; "labelText": "labelText"; "labelType": "labelType"; "type": "type"; }, { "onClick": "onClick"; "onOptionClick": "onOptionClick"; }, never, never, false>;
}
export {};
