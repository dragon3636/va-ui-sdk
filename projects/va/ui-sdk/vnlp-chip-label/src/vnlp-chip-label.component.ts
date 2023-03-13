import { Component, OnInit, Input } from '@angular/core';

type Type = 1 | 2 | 3;
type Style = null | 'icon' | 'text icon' | 'icon text' | 'with image';

@Component({
  selector: 'vnlp-chip-label',
  templateUrl: './vnlp-chip-label.component.html',
  styleUrls: ['./vnlp-chip-label.component.scss'],
})
export class VnlpChipLabelComponent implements OnInit {
  @Input() type: Type = 1;
  @Input() style: Style = 'text icon';
  @Input() imgUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU';

  constructor() {}

  ngOnInit(): void {}
}
