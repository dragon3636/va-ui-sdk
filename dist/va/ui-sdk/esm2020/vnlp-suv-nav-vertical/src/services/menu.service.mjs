import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Menu } from '../constants/menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class MenuService {
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
MenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MenuService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
MenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MenuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmEvdWktc2RrL3ZubHAtc3V2LW5hdi12ZXJ0aWNhbC9zcmMvc2VydmljZXMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBTXpDLE1BQU0sT0FBTyxXQUFXO0lBS3RCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjFCLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDcEQsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBYSxFQUFFLENBQUMsQ0FBQztRQUNqRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEMsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxpRUFBaUU7UUFDakUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO2dCQUNsQyxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDeEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxD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O1lBQ2YsV0FBVyxFQUFFLFFBQVE7WUFDckIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O3lHQXpGVSxXQUFXOzZHQUFYLFdBQVcsY0FGVixNQUFNOzRGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9jb25zdGFudHMvbWVudSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBTdWJNZW51SXRlbSB9IGZyb20gJy4uL21vZGVscy9tZW51Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfc2hvd1NpZGViYXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcclxuICBwdWJsaWMgX3BhZ2VzTWVudSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lbnVJdGVtW10+KFtdKTtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgLy9TZXQgZHluYW1pYyBtZW51XHJcbiAgICB0aGlzLl9wYWdlc01lbnUkLm5leHQoTWVudS5wYWdlcyk7XHJcblxyXG4gICAgLy9DaGVjayByb3V0ZXIgaXMgY3VycmVudGx5IGFjdGl2ZSwgaGFuZGxlIGV4cGFuZCBhbmQgc2V0IHRvIHZpZXdcclxuICAgIGxldCBzdWIgPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgLy9FeHBhbmQgbWVudSBiYXNlIG9uIGFjdGl2ZSByb3V0ZVxyXG4gICAgICAgIHRoaXMuX3BhZ2VzTWVudSQuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgIG1lbnVJdGVtLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZUdyb3VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1lbnUuaXRlbXMuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoc3ViTWVudS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgc3ViTWVudS5leHBhbmRlZCA9IGFjdGl2ZTtcclxuICAgICAgICAgICAgICBzdWJNZW51LmFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgICAgICAgICBpZiAoYWN0aXZlKSBhY3RpdmVHcm91cCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Yk1lbnUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kKHN1Yk1lbnUuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lbnUuYWN0aXZlID0gYWN0aXZlR3JvdXA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHN1Yik7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1NpZGVCYXIkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaWRlYmFyJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlc01lbnUkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VzTWVudSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgc2hvd1NpZGVCYXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dTaWRlYmFyJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5fc2hvd1NpZGViYXIkLm5leHQoIXRoaXMuX3Nob3dTaWRlYmFyJC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvL0hhbmRsZSB0b2dnbGUgbWVudVxyXG4gIHB1YmxpYyB0b2dnbGVNZW51KG1lbnU6IFN1Yk1lbnVJdGVtKSB7XHJcbiAgICB0aGlzLnNob3dTaWRlQmFyID0gdHJ1ZTtcclxuICAgIC8vSGFuZGxlIGNsb3NlIG1lbnUgZXhwYW5kaW5nIHdoZW4gYW5vdGhlciBtZW51IGlzIGV4cGFuZGVkXHJcbiAgICB0aGlzLl9wYWdlc01lbnUkLmZvckVhY2goKG1lbnVJdGVtcykgPT4ge1xyXG4gICAgICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcclxuICAgICAgICBtZW51SXRlbS5pdGVtcy5mb3JFYWNoKChzdWJNZW51KSA9PiB7XHJcbiAgICAgICAgICBpZiAobWVudS5sYWJlbCAhPT0gc3ViTWVudS5sYWJlbCkgc3ViTWVudS5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgbWVudS5leHBhbmRlZCA9ICFtZW51LmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgLy9IYW5kbGUgdG9nZ2xlIHN1YiBtZW51XHJcbiAgcHVibGljIHRvZ2dsZVN1Yk1lbnUoc3VibWVudTogU3ViTWVudUl0ZW0pIHtcclxuICAgIHN1Ym1lbnUuZXhwYW5kZWQgPSAhc3VibWVudS5leHBhbmRlZDtcclxuICB9XHJcblxyXG4gIC8vSGFuZGxlIHNldCBleHBhbmQgbWVudVxyXG4gIHByaXZhdGUgZXhwYW5kKGl0ZW1zOiBBcnJheTxTdWJNZW51SXRlbT4pIHtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5leHBhbmRlZCA9IHRoaXMuaXNBY3RpdmUoaXRlbS5yb3V0ZSk7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB0aGlzLmV4cGFuZChpdGVtLmNoaWxkcmVuKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9DaGVjayByb3V0ZXIgaXMgY3VycmVudGx5IGFjdGl2ZVxyXG4gIHByaXZhdGUgaXNBY3RpdmUoaW5zdHJ1Y3Rpb246IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlci5pc0FjdGl2ZSh0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKFtpbnN0cnVjdGlvbl0pLCB7XHJcbiAgICAgIHBhdGhzOiAnc3Vic2V0JyxcclxuICAgICAgcXVlcnlQYXJhbXM6ICdzdWJzZXQnLFxyXG4gICAgICBmcmFnbWVudDogJ2lnbm9yZWQnLFxyXG4gICAgICBtYXRyaXhQYXJhbXM6ICdpZ25vcmVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=