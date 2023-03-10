import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpMultiselectComponent } from './vnlp-multiselect.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpMultiselectComponent],
  imports: [CommonModule, FormsModule],
  exports: [VnlpMultiselectComponent],
})
export class VnlpMultiselectModule {}
