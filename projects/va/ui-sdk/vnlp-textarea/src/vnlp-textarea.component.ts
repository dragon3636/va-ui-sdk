import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-textarea',
  templateUrl: './vnlp-textarea.component.html',
  styleUrls: ['./vnlp-textarea.component.scss'],
})
export class VnlpTextareaComponent implements OnInit {
  @Input() label = 'Label';
  @Input() name = '';
  @Input() value = '';
  @Input() error = false;
  @Input() placeholder = 'Placeholder';
  @Input() disabled = false;
  @Input() cols = '30';
  @Input() rows = '10';
  @Input() maxLength = '75';
  @Output() valueChange = new EventEmitter();
  @Output() onBlur = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleChange(newValue: any) {
    this.valueChange.emit(newValue);
  }

  handleBlur(event: any) {
    this.onBlur.emit();
    event.target.blur();
  }
}
