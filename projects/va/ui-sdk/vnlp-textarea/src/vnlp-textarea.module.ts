import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpTextareaComponent } from './vnlp-textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpTextareaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [VnlpTextareaComponent],
})
export class VnlpTextareaModule {}
