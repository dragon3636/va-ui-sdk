import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';
import { VnlpRadioCardComponent } from './vnlp-radio-card.component';
@NgModule({
  declarations: [VnlpRadioCardComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpRadioCardComponent],
})
export class VnlpRadioCardModule {}
