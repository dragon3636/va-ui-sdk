import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpSwitchComponent } from './vnlp-switch.component';
@NgModule({
  declarations: [VnlpSwitchComponent],
  imports: [CommonModule, I18nModule],
  exports: [VnlpSwitchComponent],
})
export class VnlpSwitchModule {}
