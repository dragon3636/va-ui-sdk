import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpButtonComponent } from './vnlp-button.component';
import { I18nModule } from '@va/ui-sdk/i18n';

@NgModule({
  declarations: [VnlpButtonComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpButtonComponent],
})
export class VnlpButtonModule {}
