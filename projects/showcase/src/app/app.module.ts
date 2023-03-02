import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VnlpButtonModule } from '@em-and-ai/ui-sdk/vnlp-button';
import { VnlpLabelTagModule } from '@em-and-ai/ui-sdk/vnlp-label-tag';
import { VnlpCreateVirtualAgentModule } from '@em-and-ai/ui-sdk/vnlp-create-virtual-agent';
import { VnlpTableModule } from '@em-and-ai/ui-sdk/vnlp-table';
import { VnlpLogoModule } from '@em-and-ai/ui-sdk/vnlp-logo';
import { VnlpSwitchModule } from '../../../va/ui-sdk/vnlp-switch';
import { VnlpInputTextModule } from '../../../va/ui-sdk/vnlp-input-text';
import { VnlpCheckboxListModule } from '../../../va/ui-sdk/vnlp-checkbox-list';
import { VnlpCheckboxModule } from '../../../va/ui-sdk/vnlp-checkbox';
import { VnlpTextareaModule } from '../../../va/ui-sdk/vnlp-textarea';
import { VnlpSwitcherModule } from '../../../va/ui-sdk/vnlp-switcher';
import { VnlpTickboxModule } from '../../../va/ui-sdk/vnlp-tickbox';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
