import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VnlpHeaderComponent } from './vnlp-header.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';
import { I18nModule } from '@em-and-ai/ui-sdk/i18n';

const routes: Routes = [
];

@NgModule({
  declarations: [
    VnlpHeaderComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule.forChild(routes)
  ],
  exports: [VnlpHeaderComponent, RouterModule],
})
export class VnlpHeaderModule { }
