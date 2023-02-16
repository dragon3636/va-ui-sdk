import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpTickboxComponent } from './vnlp-tickbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpTickboxComponent],
  imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule],
  exports: [VnlpTickboxComponent],
})
export class VnlpTickboxModule {}
