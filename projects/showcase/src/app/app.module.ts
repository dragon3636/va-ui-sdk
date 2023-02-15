import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VnlpButtonModule } from '@va/ui-sdk/vnlp-button';
import { VnlpCheckboxModule } from '@va/ui-sdk/vnlp-checkbox';
import { VnlpCheckboxListModule } from '@va/ui-sdk/vnlp-checkbox-list';
import { CardComponent } from '@va/ui-sdk/card';
import { VnlpLabelTagModule } from '@va/ui-sdk/vnlp-label-tag';
import { VnlpSwitchModule } from '@va/ui-sdk/vnlp-switch';
import { VnlpTextareaModule } from '@va/ui-sdk/vnlp-textarea';

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
