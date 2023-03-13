import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'vnlp-input-text',
  templateUrl: './vnlp-input-text.component.html',
  styleUrls: ['./vnlp-input-text.component.scss'],
})
export class VnlpInputTextComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter();
  @Input() error: boolean = false;
  @Input() placeholder: string = 'Placeholder';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() informationText: string = '';

  @Output() onChange = new EventEmitter();
  @Output() onBlur = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    this.valueChange.emit(this.value);
    this.onChange.emit({
      [this.name]: this.value,
    });
  }

  handleBlur(event: any) {
    this.onBlur.emit();
    event.target.blur();
  }

  clearInput() {
    this.value = '';
    this.handleChange();
  }
}
