import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildBotRoutingModule } from './build-bot-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BuildBotComponent } from './build-bot.component';
import { FormsModule } from '@angular/forms';
import { VnlpStepBarComponent } from '@va/ui-sdk/vnlp-step-bar/src/vnlp-step-bar.component'
import { InitializationsComponent } from './pages/Initializations/initializations.component'
import { DateRangeComponent } from './pages/datepicker/datepicker.component'
import { VnlpCalendarComponent } from '@va/ui-sdk/vnlp-calendar/src/vnlp-calendar.component'
import { VnlpSearchComponent } from '@va/ui-sdk/vnlp-search/src/vnlp-search.component'

@NgModule({
  declarations: [
    BuildBotComponent,
    VnlpStepBarComponent,
    VnlpCalendarComponent,
    InitializationsComponent,
    VnlpSearchComponent,
    DateRangeComponent
  ],
  imports: [
    CommonModule,
    BuildBotRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class BuildBotModule { }
