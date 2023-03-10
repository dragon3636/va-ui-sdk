import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpDividersComponent } from './vnlp-dividers.component';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

@NgModule({
  declarations: [VnlpDividersComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpDividersComponent],
})
export class VnlpDividersModule {}
