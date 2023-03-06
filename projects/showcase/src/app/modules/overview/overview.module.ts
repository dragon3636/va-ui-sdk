import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
// import { VnlpDropdownModule } from '@em-and-ai/ui-sdk/vnlp-dropdown'
import { FormsModule } from '@angular/forms';
import { VnlpDropdownModule } from 'projects/va/ui-sdk/vnlp-dropdown';

@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    VnlpDropdownModule,
    FormsModule
  ],
})
export class OverviewModule { }
