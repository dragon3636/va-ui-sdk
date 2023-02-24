import {
  Component,
  Input,
  forwardRef,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  ViewChild,
  OnInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'vnlp-dropdown',
  templateUrl: './vnlp-dropdown.component.html',
  styleUrls: ['./vnlp-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VnlpDropdownComponent),
      multi: true
    }
  ]
})
export class VnlpDropdownComponent implements OnInit {

  @Input() imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU";
  @Input() status: string = "offline"

  constructor() { }

  ngOnInit(): void {
  }

}
