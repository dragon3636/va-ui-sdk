import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
// import { VnlpSuvNavVerticalModule} from '@em-and-ai/ui-sdk/vnlp-suv-nav-vertical';
import { VnlpHeaderModule } from '@em-and-ai/ui-sdk/vnlp-header';
import {
  VnlpAvatarModule,
} from '@em-and-ai/ui-sdk/vnlp-avatar';
import { VnlpSuvNavVerticalModule } from 'projects/va/ui-sdk/vnlp-suv-nav-vertical';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    VnlpAvatarModule,
    VnlpHeaderModule,
    VnlpSuvNavVerticalModule
  ],
})
export class LayoutModule {}
