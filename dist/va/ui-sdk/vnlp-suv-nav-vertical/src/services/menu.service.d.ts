import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MenuItem, SubMenuItem } from '../models/menu.model';
import * as i0 from "@angular/core";
export declare class MenuService implements OnDestroy {
    private router;
    private _showSidebar$;
    _pagesMenu$: BehaviorSubject<MenuItem[]>;
    private subscription;
    constructor(router: Router);
    get showSideBar$(): import("rxjs").Observable<boolean>;
    get pagesMenu$(): import("rxjs").Observable<MenuItem[]>;
    set showSideBar(value: boolean);
    toggleSidebar(): void;
    toggleMenu(menu: SubMenuItem): void;
    toggleSubMenu(submenu: SubMenuItem): void;
    private expand;
    private isActive;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}
