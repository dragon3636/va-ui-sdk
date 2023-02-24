import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpCheckboxComponent } from './vnlp-checkbox.component';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

@NgModule({
  declarations: [VnlpCheckboxComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpCheckboxComponent],
})
export class VnlpCheckboxModule {}
