import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';
import { VnlpLabelTagComponent } from './vnlp-label-tag.component';
@NgModule({
  declarations: [VnlpLabelTagComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpLabelTagComponent],
})
export class VnlpLabelTagModule {}
