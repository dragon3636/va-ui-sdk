import { VnlpPopoverModule } from './../../../va/ui-sdk/vnlp-popover/src/vnlp-popover.module';
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
import { VnlpTickboxModule } from '@em-and-ai/ui-sdk/vnlp-tickbox';
import { VnlpSwitcherModule } from '@em-and-ai/ui-sdk/vnlp-switcher';
import { VnlpInputTextModule } from '@em-and-ai/ui-sdk/vnlp-input-text';
import { VnlpCheckboxModule } from '@em-and-ai/ui-sdk/vnlp-checkbox';

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
    VnlpPopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
