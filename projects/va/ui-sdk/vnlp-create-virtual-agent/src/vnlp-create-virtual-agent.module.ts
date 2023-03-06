import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpCreateVirtualAgentComponent } from './vnlp-create-virtual-agent.component';
import { VnlpLabelTagModule } from '@em-and-ai/ui-sdk/vnlp-label-tag';
import { VnlpPopoverModule } from '@em-and-ai/ui-sdk/vnlp-popover';

@NgModule({
  declarations: [VnlpCreateVirtualAgentComponent],
  imports: [CommonModule, VnlpLabelTagModule, VnlpPopoverModule],
  exports: [VnlpCreateVirtualAgentComponent],
})
export class VnlpCreateVirtualAgentModule {}
