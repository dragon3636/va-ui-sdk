import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vnlp-switch',
  templateUrl: './vnlp-switch.component.html',
  styleUrls: ['./vnlp-switch.component.scss'],
})
export class VnlpSwitchComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = 'Label';
  @Input() name: string = 'Label';
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Output() checkedChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
