import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

type IconSide = 'left' | 'right';
type ButtonType = 'primary' | 'light' | 'transparent';
type TextSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'vnlp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType = 'primary';
  @Input() title: string = 'button';
  @Input() size: TextSize = 'sm';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: IconSide = 'left';
  @Output() onClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit();
  }
}
