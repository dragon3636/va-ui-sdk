import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vnlp-step-bar',
  templateUrl: './vnlp-step-bar.component.html',
  styleUrls: ['./vnlp-step-bar.component.scss']
})
export class VnlpStepBarComponent implements OnInit {

  @Input() currentStep: number = 1;
  stepList = [
    {
      step: 1,
      name: "Initialization"
    },
    {
      step: 2,
      name: "Template"
    },
    {
      step: 3,
      name: "Information setting"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
