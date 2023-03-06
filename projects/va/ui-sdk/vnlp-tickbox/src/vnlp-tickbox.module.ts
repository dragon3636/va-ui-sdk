import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpTickboxComponent } from './vnlp-tickbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpTickboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [VnlpTickboxComponent],
})
export class VnlpTickboxModule {}
