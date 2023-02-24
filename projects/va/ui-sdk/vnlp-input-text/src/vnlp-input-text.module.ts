import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpInputTextComponent } from './vnlp-input-text.component';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpInputTextComponent],
  imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule],
  exports: [VnlpInputTextComponent],
})
export class VnlpInputTextModule {}
