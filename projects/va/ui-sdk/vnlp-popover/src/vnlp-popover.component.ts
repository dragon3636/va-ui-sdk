import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'vnlp-popover',
  templateUrl: './vnlp-popover.component.html',
  styleUrls: ['./vnlp-popover.component.scss'],
})
export class VnlpPopoverComponent implements OnInit {
  @Input() options: {
    icon?: string;
    label: string;
    key: string;
  }[] = [];
  @Input() position:
    | 'top left'
    | 'top right'
    | 'top center'
    | 'bottom left'
    | 'bottom right'
    | 'bottom center' = 'bottom center';
  @Output() onOptionClick = new EventEmitter();

  showOptions: boolean = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  onShowOptions() {
    this.showOptions = !this.showOptions;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showOptions = false;
    }
  }

  onClickOption(key: string) {
    this.onOptionClick.emit(key);
    this.showOptions = false;
  }
}
