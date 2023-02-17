import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnlp-checkbox-list',
  templateUrl: './vnlp-checkbox-list.component.html',
  styleUrls: ['./vnlp-checkbox-list.component.scss'],
})
export class VnlpCheckboxListComponent implements OnInit {
  @Input() options: any = [];
  @Input() isCheckboxInList = true;
  @Input() showDivider = false;

  constructor() {}

  ngOnInit(): void {}
}
