import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

type IconSide = 'left' | 'right';
type ButtonType = 'primary' | 'light' | 'transparent';
type TextSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'vnlp-button',
  templateUrl: './vnlp-button.component.html',
  styleUrls: ['./vnlp-button.component.scss'],
})
export class VnlpButtonComponent implements OnInit {
  @Input() type: ButtonType = 'primary';
  @Input() title = 'button';
  @Input() size: TextSize = 'sm';
  @Input() disabled = false;
  @Input() icon = 'star-filled';
  @Input() iconPosition: IconSide = 'left';
  @Output() onClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit();
  }
}
