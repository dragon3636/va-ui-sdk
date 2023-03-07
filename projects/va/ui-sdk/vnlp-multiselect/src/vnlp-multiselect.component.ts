import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { validateEmail } from './helpers';

@Component({
  selector: 'vnlp-multiselect',
  templateUrl: './vnlp-multiselect.component.html',
  styleUrls: ['./vnlp-multiselect.component.scss'],
})
export class VnlpMultiselectComponent implements OnInit {
  @Input() multiselectWidth: string = "400px";
  @Input() multiEmail: boolean = true;
  @Input() label: string = "Label";
  @Output() valueChange = new EventEmitter();
  data: string = '';
  listData: string[] = [];
  invalidEmail: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  //Handle add value to list data
  addData(): void {
    //In default case
    if (!this.multiEmail) {
      if (this.listData.includes(this.data.trim())) {
        this.data = '';
        // emit changes
        this.valueChange.emit('duplicate');
        return;
      }

      if (this.data !== '') {
        this.listData.push(this.data.trim());
        // emit changes
        this.valueChange.emit(this.listData);
        this.data = '';
      }
    } else {
      //In case input email
      if (this.data !== '') {
        if (!validateEmail(this.data.trim())) {
          this.invalidEmail = true;
          return;
        }
        this.listData.push(this.data.trim());
        // emit changes
        this.valueChange.emit(this.listData);
        this.data = '';
        this.invalidEmail = false;
      }
    }
  }

  //Handle remove specific value from list data
  removeDate(data: string): void {
    if (this.listData.indexOf(data) >= 0) {
      this.listData.splice(this.listData.indexOf(data), 1);
      // emit changes
      this.valueChange.emit(this.listData);
    }
  }
}
