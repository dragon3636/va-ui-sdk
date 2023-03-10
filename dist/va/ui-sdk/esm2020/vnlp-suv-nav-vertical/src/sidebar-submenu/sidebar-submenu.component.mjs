import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as i0 from "@angular/core";
import * as i1 from "../services/menu.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
export class SidebarSubmenuComponent {
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
SidebarSubmenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SidebarSubmenuComponent, deps: [{ token: i1.MenuService }], target: i0.ɵɵFactoryTarget.Component });
SidebarSubmenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SidebarSubmenuComponent, selector: "app-sidebar-submenu", inputs: { submenu: "submenu" }, ngImport: i0, template: "<div\r\n  class=\"max-h-[0px] overflow-hidden transition-all duration-[500ms]\"\r\n  [ngClass]=\"{\r\n    hidden: !(showSideBar$ | async),\r\n    'max-h-[100vh]': submenu.expanded\r\n  }\"\r\n>\r\n  <ul class=\"flex flex-col pl-[22px]\">\r\n    <li *ngFor=\"let sub of submenu.children\">\r\n      <div (click)=\"toggleMenu(sub)\">\r\n        <!-- Condition -->\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"sub.children ? childMenu : parentMenu\"\r\n          [ngTemplateOutletContext]=\"{ sub: sub }\"\r\n        ></ng-container>\r\n\r\n        <!-- Parent Menu -->\r\n        <ng-template #parentMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a\r\n              [routerLink]=\"sub.route\"\r\n              routerLinkActive=\"text-primary\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\"\r\n              class=\"inline-block w-full text-sm font-normal pl-[30px] pr-[24px]\"\r\n            >\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- Child Menu -->\r\n        <ng-template #childMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a class=\"inline-block w-full cursor-pointer text-sm font-normal\">\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n          <button\r\n            [ngClass]=\"{\r\n              hidden: !(showSideBar$ | async),\r\n              'rotate-90': sub.expanded\r\n            }\"\r\n            class=\"flex items-center p-1 text-gray-400 transition-all duration-500\"\r\n          >\r\n            <span>\r\n              <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n            </span>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <!-- Submenu items -->\r\n      <app-sidebar-submenu [submenu]=\"sub\"></app-sidebar-submenu>\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: SidebarSubmenuComponent, selector: "app-sidebar-submenu", inputs: ["submenu"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SidebarSubmenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-submenu', template: "<div\r\n  class=\"max-h-[0px] overflow-hidden transition-all duration-[500ms]\"\r\n  [ngClass]=\"{\r\n    hidden: !(showSideBar$ | async),\r\n    'max-h-[100vh]': submenu.expanded\r\n  }\"\r\n>\r\n  <ul class=\"flex flex-col pl-[22px]\">\r\n    <li *ngFor=\"let sub of submenu.children\">\r\n      <div (click)=\"toggleMenu(sub)\">\r\n        <!-- Condition -->\r\n        <ng-container\r\n          [ngTemplateOutlet]=\"sub.children ? childMenu : parentMenu\"\r\n          [ngTemplateOutletContext]=\"{ sub: sub }\"\r\n        ></ng-container>\r\n\r\n        <!-- Parent Menu -->\r\n        <ng-template #parentMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a\r\n              [routerLink]=\"sub.route\"\r\n              routerLinkActive=\"text-primary\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\"\r\n              class=\"inline-block w-full text-sm font-normal pl-[30px] pr-[24px]\"\r\n            >\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- Child Menu -->\r\n        <ng-template #childMenu let-sub=\"sub\">\r\n          <div\r\n            class=\"flex items-center h-[40px] text-neutral-4 border-l-[2px] border-solid border-gray-200 cursor-pointer\"\r\n          >\r\n            <a class=\"inline-block w-full cursor-pointer text-sm font-normal\">\r\n              {{ sub.label }}\r\n            </a>\r\n          </div>\r\n          <button\r\n            [ngClass]=\"{\r\n              hidden: !(showSideBar$ | async),\r\n              'rotate-90': sub.expanded\r\n            }\"\r\n            class=\"flex items-center p-1 text-gray-400 transition-all duration-500\"\r\n          >\r\n            <span>\r\n              <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n            </span>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <!-- Submenu items -->\r\n      <app-sidebar-submenu [submenu]=\"sub\"></app-sidebar-submenu>\r\n    </li>\r\n  </ul>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.MenuService }]; }, propDecorators: { submenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1zdWJtZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZhL3VpLXNkay92bmxwLXN1di1uYXYtdmVydGljYWwvc3JjL3NpZGViYXItc3VibWVudS9zaWRlYmFyLXN1Ym1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmEvdWktc2RrL3ZubHAtc3V2LW5hdi12ZXJ0aWNhbC9zcmMvc2lkZWJhci1zdWJtZW51L3NpZGViYXItc3VibWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBU3RELE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUIsWUFBTyxHQUFnQixFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBd0IsSUFBSSxVQUFVLEVBQVcsQ0FBQztRQUduRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7SUFFRCxRQUFRLEtBQVUsQ0FBQztJQUVuQix1QkFBdUI7SUFDaEIsVUFBVSxDQUFDLElBQWlCO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O3FIQWJVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLDJGQ1ZwQyx3bkVBMkRBLGc2QkRqRGEsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UscUJBQXFCO2tHQUtmLE9BQU87c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1Yk1lbnVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL21lbnUubW9kZWwnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lbnUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLXN1Ym1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXItc3VibWVudS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhclN1Ym1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWJtZW51ID0gPFN1Yk1lbnVJdGVtPnt9O1xyXG4gIHB1YmxpYyBzaG93U2lkZUJhciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSkge1xyXG4gICAgdGhpcy5zaG93U2lkZUJhciQgPSB0aGlzLm1lbnVTZXJ2aWNlLnNob3dTaWRlQmFyJDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgLy9Ub2dnbGUgc3ViIG1lbnUgaXRlbXNcclxuICBwdWJsaWMgdG9nZ2xlTWVudShtZW51OiBTdWJNZW51SXRlbSkge1xyXG4gICAgdGhpcy5tZW51U2VydmljZS50b2dnbGVTdWJNZW51KG1lbnUpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJtYXgtaC1bMHB4XSBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tWzUwMG1zXVwiXHJcbiAgW25nQ2xhc3NdPVwie1xyXG4gICAgaGlkZGVuOiAhKHNob3dTaWRlQmFyJCB8IGFzeW5jKSxcclxuICAgICdtYXgtaC1bMTAwdmhdJzogc3VibWVudS5leHBhbmRlZFxyXG4gIH1cIlxyXG4+XHJcbiAgPHVsIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBwbC1bMjJweF1cIj5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgc3ViIG9mIHN1Ym1lbnUuY2hpbGRyZW5cIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlTWVudShzdWIpXCI+XHJcbiAgICAgICAgPCEtLSBDb25kaXRpb24gLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic3ViLmNoaWxkcmVuID8gY2hpbGRNZW51IDogcGFyZW50TWVudVwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzdWI6IHN1YiB9XCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDwhLS0gUGFyZW50IE1lbnUgLS0+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNwYXJlbnRNZW51IGxldC1zdWI9XCJzdWJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBoLVs0MHB4XSB0ZXh0LW5ldXRyYWwtNCBib3JkZXItbC1bMnB4XSBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJzdWIucm91dGVcIlxyXG4gICAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJ0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7IGV4YWN0OiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtIGZvbnQtbm9ybWFsIHBsLVszMHB4XSBwci1bMjRweF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3sgc3ViLmxhYmVsIH19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDwhLS0gQ2hpbGQgTWVudSAtLT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2NoaWxkTWVudSBsZXQtc3ViPVwic3ViXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgaC1bNDBweF0gdGV4dC1uZXV0cmFsLTQgYm9yZGVyLWwtWzJweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAge3sgc3ViLmxhYmVsIH19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICAgaGlkZGVuOiAhKHNob3dTaWRlQmFyJCB8IGFzeW5jKSxcclxuICAgICAgICAgICAgICAncm90YXRlLTkwJzogc3ViLmV4cGFuZGVkXHJcbiAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHAtMSB0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIFtjbGFzc109XCInaWNvbi12bmxwLWljb24tYXJyb3ctcmlnaHQtMy1saW5lYXInXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSBTdWJtZW51IGl0ZW1zIC0tPlxyXG4gICAgICA8YXBwLXNpZGViYXItc3VibWVudSBbc3VibWVudV09XCJzdWJcIj48L2FwcC1zaWRlYmFyLXN1Ym1lbnU+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG4iXX0=