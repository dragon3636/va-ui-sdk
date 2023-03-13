import { VnlpSearchModule } from '@em-and-ai/ui-sdk/vnlp-search';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { VnlpSuvNavVerticalModule } from '@em-and-ai/ui-sdk/vnlp-suv-nav-vertical';
import { VnlpHeaderModule } from '@em-and-ai/ui-sdk/vnlp-header';
import { VnlpAvatarModule } from '@em-and-ai/ui-sdk/vnlp-avatar';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    VnlpAvatarModule,
    VnlpHeaderModule,
    VnlpSuvNavVerticalModule,
    VnlpSearchModule,
  ],
})
export class LayoutModule {}
