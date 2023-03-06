import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vnlp-switch',
  templateUrl: './vnlp-switch.component.html',
  styleUrls: ['./vnlp-switch.component.scss'],
})
export class VnlpSwitchComponent implements OnInit {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() label: string = 'Label';
  @Input() name: string = 'name';
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() size: 'sm' | 'md' = 'sm';

  @Output() onChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.onChange.emit({
      [this.name]: this.checked,
    });
  }
}
