import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SubMenuItem } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss'],
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem>{};
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
  }

  ngOnInit(): void {}

  //Toggle sub menu items
  public toggleMenu(menu: SubMenuItem) {
    this.menuService.toggleSubMenu(menu);
  }
}
