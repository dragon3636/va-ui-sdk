import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpDropdownComponent } from './vnlp-dropdown.component';

@NgModule({
  declarations: [ VnlpDropdownComponent ],
  imports: [ CommonModule ],
  exports: [ VnlpDropdownComponent, CommonModule ]
})
export class VnlpDropdownModule { }
