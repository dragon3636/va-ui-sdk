import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-logo',
  templateUrl: './vnlp-logo.component.html',
  styleUrls: ['./vnlp-logo.component.scss'],
})
export class VnlpLogoComponent implements OnInit {
  @Input() type: 'normal' | 'vertical' | 'horizontal' = 'normal';
  @Output() onClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.onClick.emit();
  }
}
