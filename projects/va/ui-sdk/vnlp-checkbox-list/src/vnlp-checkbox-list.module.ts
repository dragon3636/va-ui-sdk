import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';
import { VnlpCheckboxListComponent } from './vnlp-checkbox-list.component';
@NgModule({
  declarations: [VnlpCheckboxListComponent],
  imports: [CommonModule, I18nModule, VnlpCheckboxModule],
  exports: [VnlpCheckboxListComponent],
})
export class VnlpCheckboxListModule {}
