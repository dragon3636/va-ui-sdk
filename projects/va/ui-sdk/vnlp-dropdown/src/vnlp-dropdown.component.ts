import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
} from '@angular/core';

import { DropDownSetting, ItemSelected } from './models/vnlp-dropdown.model';

@Component({
  selector: 'vnlp-dropdown',
  templateUrl: './vnlp-dropdown.component.html',
  styleUrls: ['./vnlp-dropdown.component.scss'],
})
export class VnlpDropdownComponent implements OnInit {
  @ViewChild('dropdownContainer') dropdownContainerElement?: ElementRef;
  @ViewChild('inputDropdown') inputDropdownElement?: ElementRef;
  @Output() valueChange = new EventEmitter();
  tempListData: ItemSelected[] = [];
  listData: ItemSelected[] = [];
  @Input() dropDownSettings: DropDownSetting = {
    allowSearchFilter: true,
    singleSelection: true,
    placeholder: 'select option',
    dropdownWidth: '400px',
  };
  @Input() set data(val: ItemSelected[]) {
    if (val && val.length > 0) {
      this.listData = val.map((x) => {
        x.isSelected = false;
        return x;
      });
      this.tempListData = val.map((x) => {
        x.isSelected = false;
        return x;
      });
    }
  };
  @Input() label: string = "label"

  get userData() {
    return this.listData;
  }
  isShowdataPanel: boolean = false;
  selectedOptions: ItemSelected[] = [];

  constructor(private ele: ElementRef) {}

  get empty() {
    return this.tempListData.length === 0;
  }

  //Handle selected option value
  selectOption(colIndex: number, data: ItemSelected, isSelected?: boolean) {
    if (!this.dropDownSettings.singleSelection) {
      //Case single selection
      this.userData[colIndex].isSelected = isSelected ? false : true;
      if (!isSelected) {
        let newSelectedObj = {
          id: data.id,
          value: data.value,
        };
        this.selectedOptions.push(newSelectedObj);
      } else {
        var dIndex = this.selectedOptions.findIndex(
          (x: ItemSelected) => x.id == data.id
        );
        this.selectedOptions.splice(dIndex, 1);
      }

      // emit changes
      this.changes(this.selectedOptions);
    } else {
      //Case multiple selection
      this.selectedOptions = [];
      this.userData[colIndex].isSelected = !this.userData[colIndex].isSelected;
      let newSelectedObj = {
        id: data.id,
        value: data.value,
      };
      this.selectedOptions.push(newSelectedObj);
      //emit changes
      this.changes(this.selectedOptions);
      this.toggleDataPanel();
    }
  }

  //Handle search item
  async handleSearch(value: string) {
    const val = value.toLowerCase();
    this.listData = await this.tempListData.filter((data: ItemSelected) => {
      if (data.value.toLowerCase().indexOf(val) !== -1 || !val) {
        return data;
      }
      return;
    });
  }

  //Remove selected item
  removefromselected(sel: string, i: number) {
    var findIdex = this.userData.findIndex((x: ItemSelected) => x.value == sel);
    this.userData[findIdex].isSelected = false;
    this.selectedOptions.splice(i, 1);

    //emit changes
    this.changes(this.selectedOptions);
  }

  //Handle change and emit value
  changes(selectedOptions: ItemSelected[]) {
    if (selectedOptions.length > 0) {
      //case multiple selection emit list selection
      if (!this.dropDownSettings.singleSelection) {
        this.valueChange.emit(selectedOptions);
      } else {
        //case multiple selection emit selection
        this.valueChange.emit(selectedOptions[0]);
      }
    } else {
      this.valueChange.emit();
    }
  }

  toggleDataPanel() {
    this.isShowdataPanel = !this.isShowdataPanel;
  }

  ngOnInit(): void {}

  closeDropdown() {
    if (this.isShowdataPanel) {
      this.isShowdataPanel = false;
    }
  }

  //Handle close element when click outside dropdown container
  @HostListener('document:click', ['$event']) onBlur(e: MouseEvent) {
    if (
      e.target === this.inputDropdownElement?.nativeElement ||
      this.inputDropdownElement?.nativeElement.contains(e.target)
    ) {
      return;
    }

    if (
      e.target !== this.inputDropdownElement?.nativeElement &&
      !this.dropdownContainerElement?.nativeElement.contains(e.target)
    ) {
      this.closeDropdown();
    }
  }
}
