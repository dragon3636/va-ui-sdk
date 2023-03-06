import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  selectedVal: any = "";
  listData = [
    { id: 1, value: "Codecademy" },
    { id: 2, value: "Coursera" },
    { id: 3, value: "Khan Academy" },
    { id: 4, value: "LinkedIn Learning" },
    { id: 5, value: "Open Culture" },
    { id: 6 , value: "Sophia" },
    { id: 7, value: "Teacher Training Videos" },
    { id: 8, value: "Udemy" },
    { id: 9, value: "Virtual Nerd Mobile Math" },
    { id: 10, value: "Techsmith" },
  ];

  dropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
  };

  constructor() {}

  ngOnInit(): void {}

  getDropdownValue(selectedItems : any) {
    console.log(selectedItems)
  }

}
