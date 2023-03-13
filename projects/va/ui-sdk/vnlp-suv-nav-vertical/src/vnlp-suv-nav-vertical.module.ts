import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpSuvNavVerticalComponent } from './vnlp-suv-nav-vertical.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './sidebar-submenu/sidebar-submenu.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    VnlpSuvNavVerticalComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [
    VnlpSuvNavVerticalComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    RouterModule,
  ],
})
export class VnlpSuvNavVerticalModule {}
