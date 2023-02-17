import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-tickbox',
  templateUrl: './vnlp-tickbox.component.html',
  styleUrls: ['./vnlp-tickbox.component.scss'],
})
export class VnlpTickboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  handleCheck() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
