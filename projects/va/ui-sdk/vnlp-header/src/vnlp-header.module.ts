import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VnlpHeaderComponent } from './vnlp-header.component';
import { VnlpSearchModule } from 'projects/va/ui-sdk/vnlp-search';
import { VnlpAvatarModule } from 'projects/va/ui-sdk/vnlp-avatar';
import { VnlpBreadcrumbModule } from 'projects/va/ui-sdk/vnlp-breadcrumb';

@NgModule({
  declarations: [VnlpHeaderComponent],
  imports: [
    VnlpSearchModule,
    VnlpAvatarModule,
    VnlpBreadcrumbModule,
    CommonModule,
  ],
  exports: [VnlpHeaderComponent],
})
export class VnlpHeaderModule {}
