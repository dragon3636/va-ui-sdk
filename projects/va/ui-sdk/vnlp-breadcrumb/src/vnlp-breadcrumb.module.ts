import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpBreadcrumbComponent } from './vnlp-breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [VnlpBreadcrumbComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [VnlpBreadcrumbComponent, RouterModule],
})
export class VnlpBreadcrumbModule {}
