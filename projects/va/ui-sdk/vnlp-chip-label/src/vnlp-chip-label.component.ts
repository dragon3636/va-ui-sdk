import { Component, OnInit, Input } from '@angular/core';

type FirstType = 1 | 2 | 3;
type SecondType = null | 'icon' | 'text icon' | 'icon text' | 'with image';

@Component({
  selector: 'vnlp-chip-label',
  templateUrl: './vnlp-chip-label.component.html',
  styleUrls: ['./vnlp-chip-label.component.scss'],
})
export class VnlpChipLabelComponent implements OnInit {
  @Input() firstType: FirstType = 1;
  @Input() secondType: SecondType = null;
  @Input() height: string = '34px';
  @Input() width: string = '83px';
  @Input() backgroundColor: string = '#E6F2FE';
  @Input() border: string = '10px solid #007DF9';
  @Input() imgUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU';

  constructor() {}

  ngOnInit(): void {}
}
