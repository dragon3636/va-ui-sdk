import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-textarea',
  templateUrl: './vnlp-textarea.component.html',
  styleUrls: ['./vnlp-textarea.component.scss'],
})
export class VnlpTextareaComponent implements OnInit {
  @Input() label: string = 'Label';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() error: boolean = false;
  @Input() placeholder: string = 'Placeholder';
  @Input() disabled: boolean = false;
  @Input() cols: string = '30';
  @Input() rows: string = '10';
  @Input() maxLength: string = '75';
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
