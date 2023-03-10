import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './models/menu.model';
import { MenuService } from './services/menu.service';
import * as i0 from "@angular/core";
export declare class VnlpSuvNavVerticalComponent implements OnInit {
    private menuService;
    showSideBar$: Observable<boolean>;
    pagesMenu$: Observable<MenuItem[]>;
    constructor(menuService: MenuService);
    toggleSidebar(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpSuvNavVerticalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpSuvNavVerticalComponent, "vnlp-suv-nav-vertical", never, {}, {}, never, never, false>;
}
