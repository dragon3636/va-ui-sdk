import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { DropDownSetting, ItemSelected } from './models/vnlp-dropdown.model';
import * as i0 from "@angular/core";
export declare class VnlpDropdownComponent implements OnInit {
    private ele;
    dropdownContainerElement?: ElementRef;
    inputDropdownElement?: ElementRef;
    valueChange: EventEmitter<any>;
    tempListData: ItemSelected[];
    listData: ItemSelected[];
    dropDownSettings: DropDownSetting;
    set data(val: ItemSelected[]);
    label: string;
    get userData(): ItemSelected[];
    isShowdataPanel: boolean;
    selectedOptions: ItemSelected[];
    constructor(ele: ElementRef);
    get empty(): boolean;
    selectOption(colIndex: number, data: ItemSelected, isSelected?: boolean): void;
    handleSearch(value: string): Promise<void>;
    removefromselected(sel: string, i: number): void;
    changes(selectedOptions: ItemSelected[]): void;
    toggleDataPanel(): void;
    ngOnInit(): void;
    closeDropdown(): void;
    onBlur(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpDropdownComponent, "vnlp-dropdown", never, { "dropDownSettings": "dropDownSettings"; "data": "data"; "label": "label"; }, { "valueChange": "valueChange"; }, never, never, false>;
}
