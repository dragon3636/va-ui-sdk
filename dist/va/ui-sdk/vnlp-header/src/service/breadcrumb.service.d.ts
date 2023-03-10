import { Router } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumb.model';
import * as i0 from "@angular/core";
export declare class BreadcrumbService {
    private router;
    private readonly _breadcrumbs$;
    readonly breadcrumbs$: import("rxjs").Observable<Breadcrumb[]>;
    constructor(router: Router);
    private addBreadcrumb;
    private getLabel;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadcrumbService>;
}
