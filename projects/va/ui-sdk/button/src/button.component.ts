import { Component, Input } from '@angular/core';

@Component({
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.first-component-disabled]': 'disabled',
    // Add a class that applies to all components.
    'class': 'first-component-base'
  },
  inputs: ['disabled'],
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  label = 'Click me';
}
