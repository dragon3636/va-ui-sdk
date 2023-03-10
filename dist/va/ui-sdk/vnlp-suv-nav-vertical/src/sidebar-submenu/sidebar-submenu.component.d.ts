import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SubMenuItem } from '../models/menu.model';
import { MenuService } from '../services/menu.service';
import * as i0 from "@angular/core";
export declare class SidebarSubmenuComponent implements OnInit {
    private menuService;
    submenu: SubMenuItem;
    showSideBar$: Observable<boolean>;
    constructor(menuService: MenuService);
    ngOnInit(): void;
    toggleMenu(menu: SubMenuItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarSubmenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarSubmenuComponent, "app-sidebar-submenu", never, { "submenu": "submenu"; }, {}, never, never, false>;
}
