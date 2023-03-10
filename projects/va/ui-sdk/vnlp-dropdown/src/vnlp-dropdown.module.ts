import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpDropdownComponent } from './vnlp-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpDropdownComponent],
  imports: [CommonModule, FormsModule],
  exports: [VnlpDropdownComponent],
})
export class VnlpDropdownModule {}
