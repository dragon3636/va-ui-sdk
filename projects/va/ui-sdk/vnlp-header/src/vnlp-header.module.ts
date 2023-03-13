import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VnlpHeaderComponent } from './vnlp-header.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';
import { VnlpSearchModule } from 'projects/va/ui-sdk/vnlp-search';
import { VnlpAvatarModule } from 'projects/va/ui-sdk/vnlp-avatar';

const routes: Routes = [];

@NgModule({
  declarations: [VnlpHeaderComponent, BreadcrumbComponent],
  imports: [
    VnlpSearchModule,
    VnlpAvatarModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [VnlpHeaderComponent, RouterModule],
})
export class VnlpHeaderModule {}
