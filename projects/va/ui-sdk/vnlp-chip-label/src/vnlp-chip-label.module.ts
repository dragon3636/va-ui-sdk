import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpChipLabelComponent } from './vnlp-chip-label.component';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

@NgModule({
  declarations: [VnlpChipLabelComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpChipLabelComponent],
})
export class VnlpChipLabelModule {}
