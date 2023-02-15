import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpTextareaComponent } from './vnlp-textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpTextareaComponent],
  imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule],
  exports: [VnlpTextareaComponent],
})
export class VnlpTextareaModule {}
