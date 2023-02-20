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
import { VnlpInputTextModule } from '@va/ui-sdk/vnlp-input-text';
import { VnlpCreateVirtualAgentModule } from '@va/ui-sdk/vnlp-create-virtual-agent';
import { VnlpTickboxModule } from '@va/ui-sdk/vnlp-tickbox/src/vnlp-tickbox.module';
import { VnlpLogoModule } from '@va/ui-sdk/vnlp-logo';
import { VnlpTableModule } from '@va/ui-sdk/vnlp-table/src/vnlp-table/vnlp-table.module';

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
    VnlpInputTextModule,
    VnlpCreateVirtualAgentModule,
    VnlpTickboxModule,
    VnlpLogoModule,
    VnlpTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
