import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vnlp-popover',
  templateUrl: './vnlp-popover.component.html',
  styleUrls: ['./vnlp-popover.component.scss'],
})
export class VnlpPopoverComponent implements OnInit {
  showOptions: boolean = false;
  constructor() {}

  ngOnInit() {}

  onShowOptions() {
    this.showOptions = !this.showOptions;
  }
}
