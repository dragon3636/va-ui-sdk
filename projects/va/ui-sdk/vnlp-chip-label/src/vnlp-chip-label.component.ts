import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vnlp-chip-label',
  templateUrl: './vnlp-chip-label.component.html',
  styleUrls: ['./vnlp-chip-label.component.scss']
})
export class VnlpChipLabelComponent implements OnInit {

  @Input() type: string = "";
  @Input() width: string = "200px";

  constructor() { }

  ngOnInit(): void {
  }

}
