import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vnlp-multiselect',
  templateUrl: './vnlp-multiselect.component.html',
  styleUrls: ['./vnlp-multiselect.component.scss']
})
export class VnlpMultiselectComponent implements OnInit {

  @Input() type: string = "";
  @Input() width: string = "200px";

  constructor() { }

  ngOnInit(): void {
  }

}
