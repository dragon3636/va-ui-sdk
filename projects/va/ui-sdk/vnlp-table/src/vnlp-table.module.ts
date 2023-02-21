import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpTableComponent } from './vnlp-table.component';

@NgModule({
  declarations: [VnlpTableComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpTableComponent],
})
export class VnlpTableModule {}
