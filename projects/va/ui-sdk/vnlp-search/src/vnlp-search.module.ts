import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpSearchComponent } from './vnlp-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [VnlpSearchComponent],
})
export class VnlpSearchModule {}
