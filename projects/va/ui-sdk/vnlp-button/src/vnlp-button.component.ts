import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-button',
  templateUrl: './vnlp-button.component.html',
  styleUrls: ['./vnlp-button.component.scss'],
})
export class VnlpButtonComponent implements OnInit {
  @Input() type: 'primary' | 'light' | 'transparent' = 'primary';
  @Input() title: string = 'button';
  @Input() size: 'sm' | 'lg' = 'sm';
  @Input() disabled: boolean = false;
  @Input() icon: string = 'star-filled';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Output() onClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit();
  }
}
