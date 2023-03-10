import { Observable } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb.model';
import { BreadcrumbService } from '../service/breadcrumb.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent {
    private readonly breadcrumbService;
    breadcrumbs$: Observable<Breadcrumb[]>;
    constructor(breadcrumbService: BreadcrumbService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "vnlp-breadcrumb", never, {}, {}, never, never, false>;
}
