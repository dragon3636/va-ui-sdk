import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

type Mode = 'create' | 'show';
type LabelType = 'gray' | 'orange' | 'red' | 'blue' | 'green';

@Component({
  selector: 'vnlp-create-virtual-agent',
  templateUrl: './vnlp-create-virtual-agent.component.html',
  styleUrls: ['./vnlp-create-virtual-agent.component.scss'],
})
export class VnlpCreateVirtualAgentComponent implements OnInit {
  @Input() label: string = 'create virtual agent';
  @Input() mode: Mode = 'create';
  @Input() disabled: boolean = false;
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() labelText: string = 'label';
  @Input() labelType: LabelType = 'gray';
  @Input() type: string = 'voice';
  @Input() options = [
    {
      icon: '3d-rotate-linear',
      label: 'option 1',
      key: 'option 1',
    },
    {
      icon: 'bluetooth-2-linear',
      label: 'option 2',
      key: 'option 2',
    },
    {
      icon: 'car-linear',
      label: 'option 3',
      key: 'option 3',
    },
  ];
  @Output() onClick = new EventEmitter();
  @Output() onOptionClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleCreate() {
    this.onClick.emit();
  }

  onClickOption(data: any) {
    this.onOptionClick.emit(data);
  }
}
