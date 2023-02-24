import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VnlpCalendarComponent } from './vnlp-calendar.component';

@NgModule({
  declarations: [ VnlpCalendarComponent ],
  imports: [ CommonModule, FormsModule ],
  exports: [ VnlpCalendarComponent, CommonModule, FormsModule ]
})
export class VnlpCalendarModule { }
