import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpTableComponent } from './vnlp-table.component';
import { VnlpCheckboxModule } from '@va/ui-sdk/vnlp-checkbox';

@NgModule({
  declarations: [VnlpTableComponent],
  imports: [CommonModule, I18nModule, VnlpCheckboxModule],
  exports: [VnlpTableComponent],
})
export class VnlpTableModule {}
