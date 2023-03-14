import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { FormsModule } from '@angular/forms';
import { VnlpMultiselectModule } from '@em-and-ai/ui-sdk/vnlp-multiselect';
import { VnlpChipLabelModule } from '@em-and-ai/ui-sdk/vnlp-chip-label';
import { VnlpDropdownModule } from '@em-and-ai/ui-sdk/vnlp-dropdown';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    VnlpDropdownModule,
    VnlpMultiselectModule,
    VnlpChipLabelModule,
    FormsModule,
  ],
})
export class OverviewModule {}
