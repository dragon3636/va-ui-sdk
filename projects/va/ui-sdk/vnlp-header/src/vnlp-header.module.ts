import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VnlpHeaderComponent } from './vnlp-header.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [VnlpHeaderComponent, BreadcrumbComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [VnlpHeaderComponent, RouterModule],
})
export class VnlpHeaderModule {}
