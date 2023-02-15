import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vnlp-checkbox',
  templateUrl: './vnlp-checkbox.component.html',
  styleUrls: ['./vnlp-checkbox.component.scss'],
})
export class VnlpCheckboxComponent implements OnInit {
  @Input() label = 'Label';
  @Input() name = '';
  @Input() disabled = false;
  @Input() checked = false;
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Output() checkedChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  handleCheck() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
