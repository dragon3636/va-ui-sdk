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
  @Output() onClick = new EventEmitter();

  showOptions: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleCreate() {
    this.onClick.emit();
  }

  handleBindingDataChange(data: any) {
    console.log(data);
  }
}
