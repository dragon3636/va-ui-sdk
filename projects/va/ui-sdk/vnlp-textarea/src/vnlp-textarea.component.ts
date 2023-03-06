import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-textarea',
  templateUrl: './vnlp-textarea.component.html',
  styleUrls: ['./vnlp-textarea.component.scss'],
})
export class VnlpTextareaComponent implements OnInit {
  @Input() label: string = 'Label';
  @Output() valueChange = new EventEmitter();
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() error: boolean = false;
  @Input() placeholder: string = 'Placeholder';
  @Input() disabled: boolean = false;
  @Input() rows: string = '3';
  @Input() maxLength: string = '75';
  @Input() width: string = '320';

  @Output() onChange = new EventEmitter();
  @Output() onBlur = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleChange(newValue: any) {
    this.valueChange.emit(newValue);
    this.onChange.emit({
      [this.name]: this.value,
    });
  }

  handleBlur() {
    this.onBlur.emit();
  }
}
