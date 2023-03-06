import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vnlp-dividers',
  templateUrl: './vnlp-dividers.component.html',
  styleUrls: ['./vnlp-dividers.component.scss']
})
export class VnlpDividersComponent implements OnInit {

  @Input() type: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}