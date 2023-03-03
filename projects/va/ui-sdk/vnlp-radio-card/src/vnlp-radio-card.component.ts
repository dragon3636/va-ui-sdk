import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-radio-card',
  templateUrl: './vnlp-radio-card.component.html',
  styleUrls: ['./vnlp-radio-card.component.scss'],
})
export class VnlpRadioCardComponent implements OnInit {
  @Input() label: string = 'Radio card';
  @Input() name: string = '';
  @Input() type: 'checkbox' | 'radiobox' = 'radiobox';
  @Input() description: string = '';
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'left' | 'right' = 'right';

  @Output() onChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleCheck() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit();
    this.onChange.emit({
      [this.name]: this.checked,
    });
  }
}
