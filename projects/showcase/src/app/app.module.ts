import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VnlpButtonModule } from '@em-and-ai/ui-sdk/vnlp-button';
import { VnlpTextareaModule } from '@em-and-ai/ui-sdk/vnlp-textarea';
import { VnlpSwitchModule } from '../../../va/ui-sdk/vnlp-switch/public-api';
import { VnlpLabelTagModule } from '@em-and-ai/ui-sdk/vnlp-label-tag';
import { VnlpCheckboxListModule } from '@em-and-ai/ui-sdk/vnlp-checkbox-list';
import { CardComponent } from '@em-and-ai/ui-sdk/card';
import { VnlpCreateVirtualAgentModule } from '@em-and-ai/ui-sdk/vnlp-create-virtual-agent';
import { VnlpTableModule } from '@em-and-ai/ui-sdk/vnlp-table';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';
import { VnlpTickboxModule } from '../../../va/ui-sdk/vnlp-tickbox/public-api';
import { VnlpInputTextModule } from '@em-and-ai/ui-sdk/vnlp-input-text';
import { VnlpLogoModule } from '@em-and-ai/ui-sdk/vnlp-logo';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VnlpButtonModule,
    CardComponent,
    VnlpCheckboxListModule,
    VnlpLabelTagModule,
    VnlpSwitchModule,
    VnlpTextareaModule,
    VnlpTableModule,
    VnlpCreateVirtualAgentModule,
    VnlpCheckboxModule,
    VnlpTickboxModule,
    VnlpInputTextModule,
    VnlpLogoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
