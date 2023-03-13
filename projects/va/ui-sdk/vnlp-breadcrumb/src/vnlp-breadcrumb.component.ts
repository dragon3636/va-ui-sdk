import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Breadcrumb } from './models/vnlp-breadcrumb.model';
import { BreadcrumbService } from './service/vnlp-breadcrumb.service';

@Component({
  selector: 'vnlp-breadcrumb',
  templateUrl: './vnlp-breadcrumb.component.html',
  styleUrls: ['./vnlp-breadcrumb.component.scss'],
})
export class VnlpBreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
