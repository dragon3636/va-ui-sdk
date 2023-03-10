import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class BreadcrumbService {
    constructor(router) {
        this.router = router;
        // Subject emitting the breadcrumb hierarchy
        this._breadcrumbs$ = new BehaviorSubject([]);
        // Observable exposing the breadcrumb hierarchy
        this.breadcrumbs$ = this._breadcrumbs$.asObservable();
        this.router.events
            .pipe(
        // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
            // Construct the breadcrumb hierarchy
            const root = this.router.routerState.snapshot.root;
            let breadcrumbs = [];
            this.addBreadcrumb(root, [], breadcrumbs);
            // Emit the new hierarchy
            this._breadcrumbs$.next(breadcrumbs);
        });
    }
    addBreadcrumb(route, parentUrl, breadcrumbs) {
        if (route) {
            // Construct the route URL
            const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
            // Add an element for the current route part
            if (route.data['breadcrumb']) {
                const breadcrumb = {
                    label: this.getLabel(route.data),
                    url: '/' + routeUrl.join('/'),
                };
                breadcrumbs.push(breadcrumb);
            }
            // Add another element for the next route part
            this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
        }
    }
    getLabel(data) {
        // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
        return typeof data['breadcrumb'] === 'function'
            ? data['breadcrumb'](data)
            : data['breadcrumb'];
    }
}
BreadcrumbService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

class BreadcrumbComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbComponent, deps: [{ token: BreadcrumbService }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BreadcrumbComponent, selector: "vnlp-breadcrumb", ngImport: i0, template: "<ul *ngIf=\"((breadcrumbs$ | async)?.length ?? 0) < 5\" class=\"flex gap-[8px]\">\r\n  <li\r\n    class=\"flex items-center gap-[6px] text-neutral-1 text-sm font-medium\"\r\n    *ngFor=\"let breadcrumb of breadcrumbs$ | async; let i = index\"\r\n  >\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"\r\n        i + 1 != (breadcrumbs$ | async)?.length ? element : current\r\n      \"\r\n    ></ng-container>\r\n\r\n    <ng-template #element>\r\n      <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-bold\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n      <!-- <div>></div> -->\r\n    </ng-template>\r\n\r\n    <ng-template #current>\r\n      <a class=\"text-neutral-5 text-sm\" [routerLink]=\"breadcrumb.url\">\r\n        {{ breadcrumb.label }}\r\n      </a>\r\n    </ng-template>\r\n  </li>\r\n</ul>\r\n\r\n<ul *ngIf=\"((breadcrumbs$ | async)?.length ?? 0) >= 5\" class=\"flex gap-[8px]\">\r\n  <li\r\n    class=\"flex gap-[6px] items-center text-neutral-1 text-sm font-medium\"\r\n    *ngFor=\"let breadcrumb of breadcrumbs$ | async; let i = index\"\r\n  >\r\n    <ng-container *ngIf=\"i === 0\">\r\n      <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-normal\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n      <a>...</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-normal\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n    </ng-container>\r\n\r\n    <ng-container\r\n      *ngIf=\"\r\n        i + 1 != (breadcrumbs$ | async)?.length &&\r\n        i > ((breadcrumbs$ | async)?.length ?? 0) - 4\r\n      \"\r\n    >\r\n      <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-normal\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"i + 1 === ((breadcrumbs$ | async)?.length ?? 0)\">\r\n      <a class=\"text-neutral-5\" [routerLink]=\"breadcrumb.url\">\r\n        {{ breadcrumb.label }}\r\n      </a>\r\n    </ng-container>\r\n  </li>\r\n</ul>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-breadcrumb', template: "<ul *ngIf=\"((breadcrumbs$ | async)?.length ?? 0) < 5\" class=\"flex gap-[8px]\">\r\n  <li\r\n    class=\"flex items-center gap-[6px] text-neutral-1 text-sm font-medium\"\r\n    *ngFor=\"let breadcrumb of breadcrumbs$ | async; let i = index\"\r\n  >\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"\r\n        i + 1 != (breadcrumbs$ | async)?.length ? element : current\r\n      \"\r\n    ></ng-container>\r\n\r\n    <ng-template #element>\r\n      <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-bold\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n      <!-- <div>></div> -->\r\n    </ng-template>\r\n\r\n    <ng-template #current>\r\n      <a class=\"text-neutral-5 text-sm\" [routerLink]=\"breadcrumb.url\">\r\n        {{ breadcrumb.label }}\r\n      </a>\r\n    </ng-template>\r\n  </li>\r\n</ul>\r\n\r\n<ul *ngIf=\"((breadcrumbs$ | async)?.length ?? 0) >= 5\" class=\"flex gap-[8px]\">\r\n  <li\r\n    class=\"flex gap-[6px] items-center text-neutral-1 text-sm font-medium\"\r\n    *ngFor=\"let breadcrumb of breadcrumbs$ | async; let i = index\"\r\n  >\r\n    <ng-container *ngIf=\"i === 0\">\r\n      <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-normal\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n      <a>...</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-normal\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n    </ng-container>\r\n\r\n    <ng-container\r\n      *ngIf=\"\r\n        i + 1 != (breadcrumbs$ | async)?.length &&\r\n        i > ((breadcrumbs$ | async)?.length ?? 0) - 4\r\n      \"\r\n    >\r\n      <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n      <i\r\n        class=\"text-[18px] text-neutral-5 font-normal\"\r\n        [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"\r\n      ></i>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"i + 1 === ((breadcrumbs$ | async)?.length ?? 0)\">\r\n      <a class=\"text-neutral-5\" [routerLink]=\"breadcrumb.url\">\r\n        {{ breadcrumb.label }}\r\n      </a>\r\n    </ng-container>\r\n  </li>\r\n</ul>\r\n" }]
        }], ctorParameters: function () { return [{ type: BreadcrumbService }]; } });

class VnlpHeaderComponent {
    constructor() { }
    ngOnInit() { }
}
VnlpHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpHeaderComponent, selector: "vnlp-header", ngImport: i0, template: "<div class=\"relative bg-white\">\r\n  <div class=\"flex items-center justify-between h-[60px] px-[28px]\">\r\n    <div class=\"text-sm font-semibold\"><vnlp-breadcrumb></vnlp-breadcrumb></div>\r\n    <div class=\"flex gap-[20px] pr-[40px]\">\r\n      <span class=\"text-neutral-4 text-[20px]\">\r\n        <i [class]=\"'icon-vnlp-icon-info-circle-linear'\"></i>\r\n      </span>\r\n      <div class=\"pointer-events-none flex gap-[6px] items-center\">\r\n        <div class=\"text-xs font-bold\">ENG</div>\r\n      </div>\r\n      <div class=\"cursor-pointer\">\r\n        <!-- <app-avatar></app-avatar> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "component", type: BreadcrumbComponent, selector: "vnlp-breadcrumb" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-header', template: "<div class=\"relative bg-white\">\r\n  <div class=\"flex items-center justify-between h-[60px] px-[28px]\">\r\n    <div class=\"text-sm font-semibold\"><vnlp-breadcrumb></vnlp-breadcrumb></div>\r\n    <div class=\"flex gap-[20px] pr-[40px]\">\r\n      <span class=\"text-neutral-4 text-[20px]\">\r\n        <i [class]=\"'icon-vnlp-icon-info-circle-linear'\"></i>\r\n      </span>\r\n      <div class=\"pointer-events-none flex gap-[6px] items-center\">\r\n        <div class=\"text-xs font-bold\">ENG</div>\r\n      </div>\r\n      <div class=\"cursor-pointer\">\r\n        <!-- <app-avatar></app-avatar> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; } });

const routes = [];
class VnlpHeaderModule {
}
VnlpHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpHeaderModule, declarations: [VnlpHeaderComponent, BreadcrumbComponent], imports: [CommonModule, i1.RouterModule], exports: [VnlpHeaderComponent, RouterModule] });
VnlpHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpHeaderModule, imports: [CommonModule, RouterModule.forChild(routes), RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpHeaderComponent, BreadcrumbComponent],
                    imports: [CommonModule, RouterModule.forChild(routes)],
                    exports: [VnlpHeaderComponent, RouterModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, VnlpHeaderComponent, VnlpHeaderModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-header.mjs.map
