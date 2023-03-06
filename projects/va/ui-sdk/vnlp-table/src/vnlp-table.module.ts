import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpTableComponent } from './vnlp-table.component';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';

@NgModule({
  declarations: [VnlpTableComponent],
  imports: [VnlpCheckboxModule, CommonModule],
  exports: [VnlpTableComponent],
})
export class VnlpTableModule {}
