import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Breadcrumb } from '../models/breadcrumb.model';
import { BreadcrumbService } from '../service/breadcrumb.service';

@Component({
  selector: 'vnlp-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
