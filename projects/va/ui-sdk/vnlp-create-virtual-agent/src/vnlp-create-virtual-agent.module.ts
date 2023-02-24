import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';
import { VnlpCreateVirtualAgentComponent } from './vnlp-create-virtual-agent.component';
import { VnlpLabelTagModule } from '@em-and-ai/ui-sdk/vnlp-label-tag';

@NgModule({
  declarations: [VnlpCreateVirtualAgentComponent],
  imports: [CommonModule, I18nModule, VnlpLabelTagModule],
  exports: [VnlpCreateVirtualAgentComponent],
})
export class VnlpCreateVirtualAgentModule {}
