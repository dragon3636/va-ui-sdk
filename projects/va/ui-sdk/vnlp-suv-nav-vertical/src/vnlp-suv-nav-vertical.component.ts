import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './models/menu.model';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'vnlp-suv-nav-vertical',
  templateUrl: './vnlp-suv-nav-vertical.component.html',
})
export class VnlpSuvNavVerticalComponent implements OnInit {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  ngOnInit(): void {}
}
