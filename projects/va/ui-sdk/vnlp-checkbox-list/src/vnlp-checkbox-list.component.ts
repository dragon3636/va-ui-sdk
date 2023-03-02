import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-checkbox-list',
  templateUrl: './vnlp-checkbox-list.component.html',
  styleUrls: ['./vnlp-checkbox-list.component.scss'],
})
export class VnlpCheckboxListComponent implements OnInit {
  @Input() options: any = [];
  @Output() optionsChange = new EventEmitter();
  @Input() name: string = '';

  @Output() onChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleCheckboxChange(data: any) {
    this.onChange.emit({
      [this.name]: this.options,
    });
  }
}
