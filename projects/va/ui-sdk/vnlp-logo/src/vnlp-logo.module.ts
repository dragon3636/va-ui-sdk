import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpLogoComponent } from './vnlp-logo.component';
@NgModule({
  declarations: [VnlpLogoComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpLogoComponent],
})
export class VnlpLogoModule {}
