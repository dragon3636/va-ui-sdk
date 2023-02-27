import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VnlpButtonModule } from '@em-and-ai/ui-sdk/vnlp-button';
import { VnlpTextareaModule } from '@em-and-ai/ui-sdk/vnlp-textarea';
import { VnlpSwitchModule } from '@em-and-ai/ui-sdk/vnlp-switch';
import { VnlpLabelTagModule } from '@em-and-ai/ui-sdk/vnlp-label-tag';
import { VnlpCheckboxListModule } from '@em-and-ai/ui-sdk/vnlp-checkbox-list';
import { CardComponent } from '@em-and-ai/ui-sdk/card';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VnlpButtonModule,
    VnlpCheckboxModule,
    CardComponent,
    VnlpCheckboxListModule,
    VnlpLabelTagModule,
    VnlpSwitchModule,
    VnlpTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
