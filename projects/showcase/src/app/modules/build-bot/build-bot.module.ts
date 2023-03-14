import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildBotRoutingModule } from './build-bot-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BuildBotComponent } from './build-bot.component';
import { FormsModule } from '@angular/forms';
import { VnlpStepBarModule } from '@em-and-ai/ui-sdk/vnlp-step-bar';
import { InitializationsComponent } from './pages/Initializations/initializations.component';
import { DateRangeComponent } from './pages/datepicker/datepicker.component';
import { VnlpDividersModule } from '@em-and-ai/ui-sdk/vnlp-dividers';
import { VnlpCalendarModule } from '@em-and-ai/ui-sdk/vnlp-calendar';
import { VnlpSearchModule } from '@em-and-ai/ui-sdk/vnlp-search';

@NgModule({
  declarations: [
    BuildBotComponent,
    InitializationsComponent,
    DateRangeComponent,
  ],
  imports: [
    VnlpStepBarModule,
    VnlpCalendarModule,
    VnlpSearchModule,
    VnlpDividersModule,
    CommonModule,
    BuildBotRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class BuildBotModule {}
