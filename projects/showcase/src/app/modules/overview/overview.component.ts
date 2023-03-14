import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  selectedVal: any = '';
  listData = [
    { id: 1, value: 'Codecademy', isSelected: false },
    { id: 2, value: 'Coursera', isSelected: false },
    { id: 3, value: 'Khan Academy', isSelected: false },
    { id: 4, value: 'LinkedIn Learning', isSelected: false },
    { id: 5, value: 'Open Culture', isSelected: true },
    { id: 6, value: 'Sophia', isSelected: false },
    { id: 7, value: 'Teacher Training Videos', isSelected: true },
    { id: 8, value: 'Udemy', isSelected: false },
    { id: 9, value: 'Virtual Nerd Mobile Math', isSelected: false },
    { id: 10, value: 'Techsmith', isSelected: false },
  ];

  dropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
    placeholder: 'Placeholder',
    dropdownWidth: '100%',
  };

  dropdownSettings2= {
    singleSelection: true,
    allowSearchFilter: true,
    placeholder: 'Placeholder',
    dropdownWidth: '321px',
  };

  constructor() {}

  ngOnInit(): void {}

  getDropdownValue(selectedItems: any) {
    console.log(selectedItems);
  }

  getMultiselectValue(selectedItems: any) {
    console.log(selectedItems);
  }
}
