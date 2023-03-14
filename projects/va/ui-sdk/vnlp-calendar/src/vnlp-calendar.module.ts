import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VnlpCalendarComponent } from './vnlp-calendar.component';
import { VnlpButtonModule } from 'projects/va/ui-sdk/vnlp-button';

@NgModule({
  declarations: [VnlpCalendarComponent],
  imports: [CommonModule, FormsModule, VnlpButtonModule],
  exports: [VnlpCalendarComponent, CommonModule, FormsModule],
})
export class VnlpCalendarModule {}
