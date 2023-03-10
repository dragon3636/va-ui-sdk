import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpRadioCardComponent } from './vnlp-radio-card.component';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';
import { VnlpTickboxModule } from '@em-and-ai/ui-sdk/vnlp-tickbox';
@NgModule({
  declarations: [VnlpRadioCardComponent],
  imports: [CommonModule, VnlpTickboxModule, VnlpCheckboxModule],
  exports: [VnlpRadioCardComponent],
})
export class VnlpRadioCardModule {}
