import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vnlp-checkbox',
  templateUrl: './vnlp-checkbox.component.html',
  styleUrls: ['./vnlp-checkbox.component.scss'],
})
export class VnlpCheckboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() isShowInList: boolean = false;
  @Input() isShowDivider: boolean = false;
  @Output() checkedChange = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  handleCheck() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.onChange.emit(this.checked);
  }
}
