import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpStepBarComponent } from './vnlp-step-bar.component';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

@NgModule({
  declarations: [VnlpStepBarComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpStepBarComponent],
})
export class VnlpStepBarModule {}
