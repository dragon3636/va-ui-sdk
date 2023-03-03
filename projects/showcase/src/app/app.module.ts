import { VnlpCheckboxModule } from './../../../va/ui-sdk/vnlp-checkbox/src/vnlp-checkbox.module';
import { VnlpTickboxModule } from './../../../va/ui-sdk/vnlp-tickbox/src/vnlp-tickbox.module';
import { VnlpInputTextModule } from './../../../va/ui-sdk/vnlp-input-text/src/vnlp-input-text.module';
import { VnlpSwitcherModule } from './../../../va/ui-sdk/vnlp-switcher/src/vnlp-switcher.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VnlpButtonModule } from '@em-and-ai/ui-sdk/vnlp-button';
import { VnlpLabelTagModule } from '@em-and-ai/ui-sdk/vnlp-label-tag';
import { VnlpCreateVirtualAgentModule } from '@em-and-ai/ui-sdk/vnlp-create-virtual-agent';
import { VnlpTableModule } from '@em-and-ai/ui-sdk/vnlp-table';
import { VnlpLogoModule } from '@em-and-ai/ui-sdk/vnlp-logo';
import { VnlpSwitchModule } from '@em-and-ai/ui-sdk/vnlp-switch';
import { VnlpCheckboxListModule } from '@em-and-ai/ui-sdk/vnlp-checkbox-list';
import { VnlpTextareaModule } from '@em-and-ai/ui-sdk/vnlp-textarea';
import { VnlpRadioCardModule } from '@em-and-ai/ui-sdk/vnlp-radio-card';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VnlpButtonModule,
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
    VnlpSwitcherModule,
    VnlpRadioCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
