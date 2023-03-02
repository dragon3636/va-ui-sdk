import { VnlpCheckboxModule } from 'projects/va/ui-sdk/vnlp-checkbox/public-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpCheckboxListComponent } from './vnlp-checkbox-list.component';
@NgModule({
  declarations: [VnlpCheckboxListComponent],
  imports: [CommonModule, VnlpCheckboxModule],
  exports: [VnlpCheckboxListComponent],
})
export class VnlpCheckboxListModule {}
