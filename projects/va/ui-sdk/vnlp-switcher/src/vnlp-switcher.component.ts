import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vnlp-switcher',
  templateUrl: './vnlp-switcher.component.html',
  styleUrls: ['./vnlp-switcher.component.scss'],
})
export class VnlpSwitcherComponent implements OnInit {
  @Input() switcherList: {
    title: string;
    icon: string;
    key: string;
  }[] = [
    { title: 'Section 1', icon: 'design-grid-filled', key: 'key1' },
    { title: 'Section 2', icon: 'pen-line', key: 'key2' },
    { title: 'Section 3', icon: 'pie-04-line', key: 'key3' },
    { title: 'Section 4', icon: 'doughnut-filled', key: 'key4' },
  ];
  @Input() name: string = '';
  @Input() selected = 'key1';
  @Output() onChange = new EventEmitter();

  selectedIndex = 0;
  constructor() {}

  ngOnInit() {
    this.selectedIndex =
      this.switcherList.findIndex((f) => f.key === this.selected) | 0;
  }

  handleSwitch(index: number) {
    this.selectedIndex = index;
    this.onChange.emit({
      [this.name]: this.switcherList[index],
    });
  }
}
