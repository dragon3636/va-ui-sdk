import { Component, Input, OnInit } from '@angular/core';

type LabelType = 'gray' | 'orange' | 'red' | 'blue' | 'green';

@Component({
  selector: 'vnlp-label-tag',
  templateUrl: './vnlp-label-tag.component.html',
  styleUrls: ['./vnlp-label-tag.component.scss'],
})
export class VnlpLabelTagComponent implements OnInit {
  @Input() text: string = 'Label';
  @Input() type: LabelType = 'gray';

  typeList = {
    gray: {
      textColor: 'neutral-7',
      bgc: 'neutral-4',
    },
    orange: {
      textColor: 'secondary',
      bgc: 'secondary-100',
    },
    red: {
      textColor: 'error',
      bgc: 'error-100',
    },
    blue: {
      textColor: 'primary',
      bgc: 'primary-100',
    },
    green: {
      textColor: 'success',
      bgc: 'success-100',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
