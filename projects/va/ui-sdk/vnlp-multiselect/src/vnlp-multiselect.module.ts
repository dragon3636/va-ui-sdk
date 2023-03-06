import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpMultiselectComponent } from './vnlp-multiselect.component';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

@NgModule({
  declarations: [VnlpMultiselectComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpMultiselectComponent],
})
export class VnlpDividersModule {}
