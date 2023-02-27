import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from '@angular/core';

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
  @Output() onClickUpdateVirtualAgent = new EventEmitter();
  @Output() onClickAddSubVirtualAgent = new EventEmitter();
  @Output() onClickDeleteVirtualAgent = new EventEmitter();

  showOptions: boolean = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  handleClick() {
    this.onClick.emit();
  }

  onShowOptions() {
    if (this.disabled) return;
    this.showOptions = !this.showOptions;
  }

  handleClickUpdateVirtualAgent(e: any) {
    this.onClickUpdateVirtualAgent.emit();
    this.showOptions = false;
    e.stopPropagation();
  }

  handleClickAddSubVirtualAgent(e: any) {
    this.onClickAddSubVirtualAgent.emit();
    this.showOptions = false;
    e.stopPropagation();
  }

  handleClickDeleteVirtualAgent(e: any) {
    this.onClickDeleteVirtualAgent.emit();
    this.showOptions = false;
    e.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showOptions = false;
    }
  }
}
