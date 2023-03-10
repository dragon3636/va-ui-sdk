import * as i0 from '@angular/core';
import { Injectable, Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { BehaviorSubject, Subscription, Observable as Observable$1 } from 'rxjs';
import * as i3 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

class Menu {
}
Menu.pages = [
    {
        group: 'MAIN',
        items: [
            {
                icon: 'activity-linear',
                label: 'Overview',
                route: '/overview',
            },
            {
                icon: 'emoji-normal-linear',
                label: 'Build Bots',
                route: '/build-bot',
                children: [
                    { label: 'Initializations', route: '/build-bot/initializations' },
                    { label: 'Enity types', route: '/build-bot/daterange' },
                    { label: 'Chatbot', route: '/build-bot/samples' },
                ],
            },
            {
                icon: 'setting-4-linear',
                label: 'Advanced settings',
                route: '/advanced-settings',
                children: [
                    {
                        label: 'initializations',
                        route: '/advanced-settings/bot-setting',
                    },
                    { label: 'AI Voicebot', route: '/advanced-settings/bot-setting' },
                    { label: 'Chatbot', route: '/advanced-settings/bot-setting' },
                ],
            },
            {
                icon: 'microphone-2-linear',
                label: 'Auto call',
                route: '/auto-call',
                children: [],
            },
            {
                icon: 'flag-linear',
                label: 'Campaigns',
                route: '/campaign-management/choose-scenario',
            },
            {
                icon: 'call-linear',
                label: 'Make a call',
                route: '/ivr-outbound',
            },
        ],
    },
    {
        group: 'OTHER',
        items: [
            {
                icon: 'personalcard-linear',
                label: 'Memebers',
                route: '/build-bots',
                children: [],
            },
            {
                icon: 'presention-chart-linear',
                label: 'Statistical Report',
                route: '/build-bots',
                children: [],
            },
            {
                icon: 'info-circle-linear',
                label: 'Version',
                route: '/build-bots',
                children: [],
            },
            {
                icon: 'clock-linear',
                label: 'Histories',
                route: '/build-bots',
                children: [],
            },
            {
                icon: '3dcube-linear',
                label: 'Integrations',
                route: '/build-bots',
                children: [],
            },
        ],
    },
];

class MenuService {
    constructor(router) {
        this.router = router;
        this._showSidebar$ = new BehaviorSubject(true);
        this._pagesMenu$ = new BehaviorSubject([]);
        this.subscription = new Subscription();
        //Set dynamic menu
        this._pagesMenu$.next(Menu.pages);
        //Check router is currently active, handle expand and set to view
        let sub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                //Expand menu base on active route
                this._pagesMenu$.forEach((menuItem) => {
                    menuItem.forEach((menu) => {
                        let activeGroup = false;
                        menu.items.forEach((subMenu) => {
                            const active = this.isActive(subMenu.route);
                            subMenu.expanded = active;
                            subMenu.active = active;
                            if (active)
                                activeGroup = true;
                            if (subMenu.children) {
                                this.expand(subMenu.children);
                            }
                        });
                        menu.active = activeGroup;
                    });
                });
            }
        });
        this.subscription.add(sub);
    }
    get showSideBar$() {
        return this._showSidebar$.asObservable();
    }
    get pagesMenu$() {
        return this._pagesMenu$.asObservable();
    }
    set showSideBar(value) {
        this._showSidebar$.next(value);
    }
    toggleSidebar() {
        this._showSidebar$.next(!this._showSidebar$.value);
    }
    //Handle toggle menu
    toggleMenu(menu) {
        this.showSideBar = true;
        //Handle close menu expanding when another menu is expanded
        this._pagesMenu$.forEach((menuItems) => {
            menuItems.forEach((menuItem) => {
                menuItem.items.forEach((subMenu) => {
                    if (menu.label !== subMenu.label)
                        subMenu.expanded = false;
                });
            });
        });
        menu.expanded = !menu.expanded;
    }
    //Handle toggle sub menu
    toggleSubMenu(submenu) {
        submenu.expanded = !submenu.expanded;
    }
    //Handle set expand menu
    expand(items) {
        items.forEach((item) => {
            item.expanded = this.isActive(item.route);
            if (item.children)
                this.expand(item.children);
        });
    }
    //Check router is currently active
    isActive(instruction) {
        return this.router.isActive(this.router.createUrlTree([instruction]), {
            paths: 'subset',
            queryParams: 'subset',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
MenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MenuService, deps: [{ token: i3.Router }], target: i0.ɵɵFactoryTarget.Injectable });
MenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MenuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i3.Router }]; } });

class SidebarSubmenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.submenu = {};
        this.showSideBar$ = new Observable();
        this.showSideBar$ = this.menuService.showSideBar$;
    }
    ngOnInit() { }
    //Toggle sub menu items
    toggleMenu(menu) {
        this.menuService.toggleSubMenu(menu);
    }
}
SidebarSubmenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SidebarSubmenuComponent, deps: [{ token: MenuService }], target: i0.ɵɵFactoryTarget.Component });
SidebarSubmenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SidebarSubmenuComponent, selector: "app-sidebar-submenu", inputs: { submenu: "submenu" }, ngImport: i0, template: "<div\r\n  class=\"max-h-[0px] overflow-hidden transition-all duration-[500ms]\"\r\n  [ngClass]=\"{\r\n    hidden: !(showSideBar$ | async),\r\n    'max-h-[100vh]': submenu.expanded\r\n  }\"\r\n>\r\n  <ul class=\"flex flex-col pl-[22px]\">\r\n    <li *ngFor=\"let sub of submenu.children\">\r\n      <div (click)=\"toggleMenu(sub)\">\r\n        <!-- Condition -->\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"sub.children ? childMenu : parentMenu\"\r\n          [ngTemplateOutletContext]=\"{ sub: sub }\"\r\n        ></ng-container>\r\n\r\n        <!-- Parent Menu -->\r\n        <ng-template #parentMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a\r\n              [routerLink]=\"sub.route\"\r\n              routerLinkActive=\"text-primary\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\"\r\n              class=\"inline-block w-full text-sm font-normal pl-[30px] pr-[24px]\"\r\n            >\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- Child Menu -->\r\n        <ng-template #childMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a class=\"inline-block w-full cursor-pointer text-sm font-normal\">\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n          <button\r\n            [ngClass]=\"{\r\n              hidden: !(showSideBar$ | async),\r\n              'rotate-90': sub.expanded\r\n            }\"\r\n            class=\"flex items-center p-1 text-gray-400 transition-all duration-500\"\r\n          >\r\n            <span>\r\n              <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n            </span>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <!-- Submenu items -->\r\n      <app-sidebar-submenu [submenu]=\"sub\"></app-sidebar-submenu>\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: SidebarSubmenuComponent, selector: "app-sidebar-submenu", inputs: ["submenu"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SidebarSubmenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-submenu', template: "<div\r\n  class=\"max-h-[0px] overflow-hidden transition-all duration-[500ms]\"\r\n  [ngClass]=\"{\r\n    hidden: !(showSideBar$ | async),\r\n    'max-h-[100vh]': submenu.expanded\r\n  }\"\r\n>\r\n  <ul class=\"flex flex-col pl-[22px]\">\r\n    <li *ngFor=\"let sub of submenu.children\">\r\n      <div (click)=\"toggleMenu(sub)\">\r\n        <!-- Condition -->\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"sub.children ? childMenu : parentMenu\"\r\n          [ngTemplateOutletContext]=\"{ sub: sub }\"\r\n        ></ng-container>\r\n\r\n        <!-- Parent Menu -->\r\n        <ng-template #parentMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a\r\n              [routerLink]=\"sub.route\"\r\n              routerLinkActive=\"text-primary\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\"\r\n              class=\"inline-block w-full text-sm font-normal pl-[30px] pr-[24px]\"\r\n            >\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- Child Menu -->\r\n        <ng-template #childMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a class=\"inline-block w-full cursor-pointer text-sm font-normal\">\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n          <button\r\n            [ngClass]=\"{\r\n              hidden: !(showSideBar$ | async),\r\n              'rotate-90': sub.expanded\r\n            }\"\r\n            class=\"flex items-center p-1 text-gray-400 transition-all duration-500\"\r\n          >\r\n            <span>\r\n              <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n            </span>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <!-- Submenu items -->\r\n      <app-sidebar-submenu [submenu]=\"sub\"></app-sidebar-submenu>\r\n    </li>\r\n  </ul>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: MenuService }]; }, propDecorators: { submenu: [{
                type: Input
            }] } });

class SidebarMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.pagesMenu$ = new Observable$1();
        this.showSideBar$ = new Observable$1();
        this.showSideBar$ = this.menuService.showSideBar$;
        this.pagesMenu$ = this.menuService.pagesMenu$;
    }
    //Toggle sub menu items
    toggleMenu(subMenu) {
        this.menuService.toggleMenu(subMenu);
    }
    toggleSidebar() {
        this.menuService.toggleSidebar();
    }
    ngOnInit() { }
}
SidebarMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SidebarMenuComponent, deps: [{ token: MenuService }], target: i0.ɵɵFactoryTarget.Component });
SidebarMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SidebarMenuComponent, selector: "app-sidebar-menu", ngImport: i0, template: "<div *ngFor=\"let menu of pagesMenu$ | async\">\r\n  <ul class=\"flex flex-col items-center\">\r\n    <li class=\"h-[30px] w-[100%] mt-[88px] px-[10px]\">\r\n      <div\r\n        class=\"text-xs font-semibold text-neutral-5 tracking-[0.015em]\"\r\n        [ngClass]=\"{ 'text-center': !(showSideBar$ | async) }\"\r\n      >\r\n        {{ menu.group }}\r\n      </div>\r\n    </li>\r\n    <!-- List items -->\r\n    <li *ngFor=\"let item of menu.items\" class=\"text-neutral-3\">\r\n      <!-- Menu List -->\r\n      <div\r\n        (click)=\"toggleMenu(item)\"\r\n        routerLinkActive=\"text-primary bg-primary-100\"\r\n        [routerLinkActiveOptions]=\"{ exact: true }\"\r\n        class=\"group relative w-[220px] h-[44px] py-[8px] px-[10px] cursor-pointer hover:bg-primary-100 rounded-[8px]\"\r\n        [ngClass]=\"{\r\n          'text-primary bg-primary-100':\r\n            item.expanded && (showSideBar$ | async),\r\n          'flex items-center justify-center max-w-[40px] max-h-[40px] mb-[10px] hover:bg-primary-100':\r\n            !(showSideBar$ | async),\r\n          'text-neutral-8 hover:text-neutral-3 bg-primary':\r\n            item.expanded && !(showSideBar$ | async)\r\n        }\"\r\n      >\r\n        <!-- Condition -->\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"item.children ? childMenu : parentMenu\"\r\n          [ngTemplateOutletContext]=\"{ item: item }\"\r\n        ></ng-container>\r\n\r\n        <!-- Workaround:: Enable routerLink -->\r\n        <ng-template #parentMenu let-item=\"item\">\r\n          <!-- Icon -->\r\n          <div\r\n            routerLink=\"{{ item.route }}\"\r\n            class=\"flex items-center gap-[14px]\"\r\n          >\r\n            <span>\r\n              <i\r\n                class=\"text-[20px]\"\r\n                [class]=\"'icon icon-vnlp-icon-' + item.icon\"\r\n              ></i>\r\n            </span>\r\n            <a\r\n              *ngIf=\"showSideBar$ | async\"\r\n              class=\"truncate text-sm tracking-[0.0025em] font-normal\"\r\n            >\r\n              {{ item.label }}\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- Workaround:: Disable routerLink -->\r\n        <ng-template #childMenu let-item=\"item\">\r\n          <div class=\"flex items-center gap-[14px]\">\r\n            <span>\r\n              <i\r\n                class=\"text-[20px]\"\r\n                [class]=\"'icon icon-vnlp-icon-' + item.icon\"\r\n              ></i>\r\n            </span>\r\n            <a\r\n              *ngIf=\"showSideBar$ | async\"\r\n              class=\"truncate text-sm font-normal tracking-[0.0025em]\"\r\n            >\r\n              {{ item.label }}\r\n            </a>\r\n          </div>\r\n          <div\r\n            *ngIf=\"item.children\"\r\n            [ngClass]=\"{\r\n              hidden: !(showSideBar$ | async),\r\n              'rotate-[90deg]': item.expanded\r\n            }\"\r\n            class=\"flex items-center pointer-events-none absolute right-[0] top-[8px] text-[18px] text-neutral-5 transition-all duration-[500ms]\"\r\n          >\r\n            <!-- Arrow Icon -->\r\n            <span>\r\n              <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n            </span>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <!-- Submenu items -->\r\n      <app-sidebar-submenu [submenu]=\"item\"></app-sidebar-submenu>\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: SidebarSubmenuComponent, selector: "app-sidebar-submenu", inputs: ["submenu"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SidebarMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngFor=\"let menu of pagesMenu$ | async\">\r\n  <ul class=\"flex flex-col items-center\">\r\n    <li class=\"h-[30px] w-[100%] mt-[88px] px-[10px]\">\r\n      <div\r\n        class=\"text-xs font-semibold text-neutral-5 tracking-[0.015em]\"\r\n        [ngClass]=\"{ 'text-center': !(showSideBar$ | async) }\"\r\n      >\r\n        {{ menu.group }}\r\n      </div>\r\n    </li>\r\n    <!-- List items -->\r\n    <li *ngFor=\"let item of menu.items\" class=\"text-neutral-3\">\r\n      <!-- Menu List -->\r\n      <div\r\n        (click)=\"toggleMenu(item)\"\r\n        routerLinkActive=\"text-primary bg-primary-100\"\r\n        [routerLinkActiveOptions]=\"{ exact: true }\"\r\n        class=\"group relative w-[220px] h-[44px] py-[8px] px-[10px] cursor-pointer hover:bg-primary-100 rounded-[8px]\"\r\n        [ngClass]=\"{\r\n          'text-primary bg-primary-100':\r\n            item.expanded && (showSideBar$ | async),\r\n          'flex items-center justify-center max-w-[40px] max-h-[40px] mb-[10px] hover:bg-primary-100':\r\n            !(showSideBar$ | async),\r\n          'text-neutral-8 hover:text-neutral-3 bg-primary':\r\n            item.expanded && !(showSideBar$ | async)\r\n        }\"\r\n      >\r\n        <!-- Condition -->\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"item.children ? childMenu : parentMenu\"\r\n          [ngTemplateOutletContext]=\"{ item: item }\"\r\n        ></ng-container>\r\n\r\n        <!-- Workaround:: Enable routerLink -->\r\n        <ng-template #parentMenu let-item=\"item\">\r\n          <!-- Icon -->\r\n          <div\r\n            routerLink=\"{{ item.route }}\"\r\n            class=\"flex items-center gap-[14px]\"\r\n          >\r\n            <span>\r\n              <i\r\n                class=\"text-[20px]\"\r\n                [class]=\"'icon icon-vnlp-icon-' + item.icon\"\r\n              ></i>\r\n            </span>\r\n            <a\r\n              *ngIf=\"showSideBar$ | async\"\r\n              class=\"truncate text-sm tracking-[0.0025em] font-normal\"\r\n            >\r\n              {{ item.label }}\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- Workaround:: Disable routerLink -->\r\n        <ng-template #childMenu let-item=\"item\">\r\n          <div class=\"flex items-center gap-[14px]\">\r\n            <span>\r\n              <i\r\n                class=\"text-[20px]\"\r\n                [class]=\"'icon icon-vnlp-icon-' + item.icon\"\r\n              ></i>\r\n            </span>\r\n            <a\r\n              *ngIf=\"showSideBar$ | async\"\r\n              class=\"truncate text-sm font-normal tracking-[0.0025em]\"\r\n            >\r\n              {{ item.label }}\r\n            </a>\r\n          </div>\r\n          <div\r\n            *ngIf=\"item.children\"\r\n            [ngClass]=\"{\r\n              hidden: !(showSideBar$ | async),\r\n              'rotate-[90deg]': item.expanded\r\n            }\"\r\n            class=\"flex items-center pointer-events-none absolute right-[0] top-[8px] text-[18px] text-neutral-5 transition-all duration-[500ms]\"\r\n          >\r\n            <!-- Arrow Icon -->\r\n            <span>\r\n              <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n            </span>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <!-- Submenu items -->\r\n      <app-sidebar-submenu [submenu]=\"item\"></app-sidebar-submenu>\r\n    </li>\r\n  </ul>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: MenuService }]; } });

class VnlpSuvNavVerticalComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.showSideBar$ = new Observable$1();
        this.pagesMenu$ = new Observable$1();
        this.showSideBar$ = this.menuService.showSideBar$;
        this.pagesMenu$ = this.menuService.pagesMenu$;
    }
    toggleSidebar() {
        this.menuService.toggleSidebar();
    }
    ngOnInit() { }
}
VnlpSuvNavVerticalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSuvNavVerticalComponent, deps: [{ token: MenuService }], target: i0.ɵɵFactoryTarget.Component });
VnlpSuvNavVerticalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpSuvNavVerticalComponent, selector: "vnlp-suv-nav-vertical", ngImport: i0, template: "<nav\r\n  [ngClass]=\"(showSideBar$ | async) ? 'w-[240px]' : 'w-[70px]'\"\r\n  class=\"relative overflow-auto scrollbar-thumb-rounded scrollbar-track-rounded hidden h-[100%] flex-col justify-between bg-neutral-8 transition-all duration-300 scrollbar-thin scrollbar-track-neutral-8 scrollbar-thumb-neutral-8 lg:flex\"\r\n>\r\n  <div class=\"px-[4px] py-[10px]\">\r\n    <!-- Menu Items -->\r\n    <div class=\"absolute right-[4px] top-[54px]\">\r\n      <button\r\n        (click)=\"toggleSidebar()\"\r\n        class=\"flex items-center justify-center rounded text-gray-400 transition-all duration-200 focus:outline-none hover:text-gray-500\"\r\n        [ngClass]=\"{ 'rotate-180': !(showSideBar$ | async) }\"\r\n      >\r\n        <i\r\n          class=\"text-[30px]\"\r\n          [class]=\"'icon-vnlp-icon-arrow-circle-right-linear'\"\r\n        ></i>\r\n      </button>\r\n    </div>\r\n\r\n    <app-sidebar-menu></app-sidebar-menu>\r\n  </div>\r\n\r\n  <div class=\"mx-2 my-4 space-y-1\">\r\n    <!-- Sign out -->\r\n    <div\r\n      class=\"group flex h-[40px] cursor-pointer items-center justify-start rounded-[8px] p-2 hover:bg-gray-200 text-neutral-3 text-[20px]\"\r\n    >\r\n      <span>\r\n        <i class=\"text-[20px]\" [class]=\"'icon-vnlp-icon-logout-linear'\"></i>\r\n      </span>\r\n\r\n      <a\r\n        routerLink=\"/auth\"\r\n        *ngIf=\"showSideBar$ | async\"\r\n        class=\"ml-4 text-sm font-normal tracking-[0.004em] focus:outline-none\"\r\n      >\r\n        Log out\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: SidebarMenuComponent, selector: "app-sidebar-menu" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSuvNavVerticalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-suv-nav-vertical', template: "<nav\r\n  [ngClass]=\"(showSideBar$ | async) ? 'w-[240px]' : 'w-[70px]'\"\r\n  class=\"relative overflow-auto scrollbar-thumb-rounded scrollbar-track-rounded hidden h-[100%] flex-col justify-between bg-neutral-8 transition-all duration-300 scrollbar-thin scrollbar-track-neutral-8 scrollbar-thumb-neutral-8 lg:flex\"\r\n>\r\n  <div class=\"px-[4px] py-[10px]\">\r\n    <!-- Menu Items -->\r\n    <div class=\"absolute right-[4px] top-[54px]\">\r\n      <button\r\n        (click)=\"toggleSidebar()\"\r\n        class=\"flex items-center justify-center rounded text-gray-400 transition-all duration-200 focus:outline-none hover:text-gray-500\"\r\n        [ngClass]=\"{ 'rotate-180': !(showSideBar$ | async) }\"\r\n      >\r\n        <i\r\n          class=\"text-[30px]\"\r\n          [class]=\"'icon-vnlp-icon-arrow-circle-right-linear'\"\r\n        ></i>\r\n      </button>\r\n    </div>\r\n\r\n    <app-sidebar-menu></app-sidebar-menu>\r\n  </div>\r\n\r\n  <div class=\"mx-2 my-4 space-y-1\">\r\n    <!-- Sign out -->\r\n    <div\r\n      class=\"group flex h-[40px] cursor-pointer items-center justify-start rounded-[8px] p-2 hover:bg-gray-200 text-neutral-3 text-[20px]\"\r\n    >\r\n      <span>\r\n        <i class=\"text-[20px]\" [class]=\"'icon-vnlp-icon-logout-linear'\"></i>\r\n      </span>\r\n\r\n      <a\r\n        routerLink=\"/auth\"\r\n        *ngIf=\"showSideBar$ | async\"\r\n        class=\"ml-4 text-sm font-normal tracking-[0.004em] focus:outline-none\"\r\n      >\r\n        Log out\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n" }]
        }], ctorParameters: function () { return [{ type: MenuService }]; } });

const routes = [];
class VnlpSuvNavVerticalModule {
}
VnlpSuvNavVerticalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSuvNavVerticalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpSuvNavVerticalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpSuvNavVerticalModule, declarations: [VnlpSuvNavVerticalComponent,
        SidebarMenuComponent,
        SidebarSubmenuComponent], imports: [CommonModule, i3.RouterModule], exports: [VnlpSuvNavVerticalComponent,
        SidebarMenuComponent,
        SidebarSubmenuComponent,
        RouterModule] });
VnlpSuvNavVerticalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSuvNavVerticalModule, imports: [CommonModule, RouterModule.forChild(routes), RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSuvNavVerticalModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SidebarMenuComponent, SidebarSubmenuComponent, VnlpSuvNavVerticalComponent, VnlpSuvNavVerticalModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-suv-nav-vertical.mjs.map
