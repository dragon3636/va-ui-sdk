import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpDropdownComponent } from './vnlp-dropdown.component';
import { FormsModule } from '@angular/forms';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';

@NgModule({
  declarations: [VnlpDropdownComponent],
  imports: [VnlpCheckboxModule, CommonModule, FormsModule],
  exports: [VnlpDropdownComponent],
})
export class VnlpDropdownModule {}
