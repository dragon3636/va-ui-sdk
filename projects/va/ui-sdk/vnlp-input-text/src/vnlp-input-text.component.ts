import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

type IconSide = 'left' | 'right';

@Component({
  selector: 'vnlp-input-text',
  templateUrl: './vnlp-input-text.component.html',
  styleUrls: ['./vnlp-input-text.component.scss'],
})
export class VnlpInputTextComponent implements OnInit {
  @Input() label: string = 'Label';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() error: boolean = false;
  @Input() placeholder: string = 'Placeholder';
  @Input() disabled: boolean = false;
  @Input() icon: string = 'apple-line';
  @Input() iconPosition: IconSide = 'right';
  @Input() success: boolean = false;
  @Input() informationText: string = '';
  @Output() onChange = new EventEmitter();
  @Output() onEnter = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() valueChange = new EventEmitter();

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
