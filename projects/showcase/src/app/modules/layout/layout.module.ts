import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { VnlpSuvNavVerticalComponent } from '@va/ui-sdk/vnlp-suv-nav-vertical/src/vnlp-suv-nav-vertical.component'
import { SidebarMenuComponent } from '@va/ui-sdk/vnlp-suv-nav-vertical/src/sidebar-menu/sidebar-menu.component'
import { SidebarSubmenuComponent } from '@va/ui-sdk/vnlp-suv-nav-vertical/src/sidebar-submenu/sidebar-submenu.component'
import { VnlpHeaderComponent } from '@va/ui-sdk/vnlp-header/src/vnlp-header.component'
import { BreadcrumbComponent } from '@va/ui-sdk/vnlp-header/src/components/breadcrumb.component'
import { VnlpAvatarComponent } from '@va/ui-sdk/vnlp-avatar/src/vnlp-avatar.component'

@NgModule({
  declarations: [
    LayoutComponent,
    VnlpSuvNavVerticalComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    VnlpHeaderComponent,
    BreadcrumbComponent,
    VnlpAvatarComponent
  ],
  imports: [CommonModule, LayoutRoutingModule,HttpClientModule],
})
export class LayoutModule {}
