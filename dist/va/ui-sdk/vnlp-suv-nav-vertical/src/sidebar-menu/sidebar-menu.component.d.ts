import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem, SubMenuItem } from '../models/menu.model';
import { MenuService } from '../services/menu.service';
import * as i0 from "@angular/core";
export declare class SidebarMenuComponent implements OnInit {
    private menuService;
    pagesMenu$: Observable<MenuItem[]>;
    showSideBar$: Observable<boolean>;
    constructor(menuService: MenuService);
    toggleMenu(subMenu: SubMenuItem): void;
    toggleSidebar(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarMenuComponent, "app-sidebar-menu", never, {}, {}, never, never, false>;
}
