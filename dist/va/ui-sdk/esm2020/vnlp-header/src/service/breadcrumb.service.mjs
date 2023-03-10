import { Injectable } from '@angular/core';
import { NavigationEnd, } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class BreadcrumbService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmEvdWktc2RrL3ZubHAtaGVhZGVyL3NyYy9zZXJ2aWNlL2JyZWFkY3J1bWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxhQUFhLEdBRWQsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3hDLE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFObEMsNENBQTRDO1FBQzNCLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQWUsRUFBRSxDQUFDLENBQUM7UUFFdkUsK0NBQStDO1FBQ3RDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUd4RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJO1FBQ0gsbUdBQW1HO1FBQ25HLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUNsRDthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLHFDQUFxQztZQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25ELElBQUksV0FBVyxHQUFpQixFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRTFDLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxhQUFhLENBQ25CLEtBQW9DLEVBQ3BDLFNBQW1CLEVBQ25CLFdBQXlCO1FBRXpCLElBQUksS0FBSyxFQUFFO1lBQ1QsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXBFLDRDQUE0QztZQUM1QyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sVUFBVSxHQUFHO29CQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNoQyxHQUFHLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUM5QixDQUFDO2dCQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDOUI7WUFFRCw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsSUFBVTtRQUN6Qiw4SEFBOEg7UUFDOUgsT0FBTyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO1lBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7K0dBcERVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gIERhdGEsXHJcbiAgTmF2aWdhdGlvbkVuZCxcclxuICBSb3V0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICcuLi9tb2RlbHMvYnJlYWRjcnVtYi5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYlNlcnZpY2Uge1xyXG4gIC8vIFN1YmplY3QgZW1pdHRpbmcgdGhlIGJyZWFkY3J1bWIgaGllcmFyY2h5XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfYnJlYWRjcnVtYnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCcmVhZGNydW1iW10+KFtdKTtcclxuXHJcbiAgLy8gT2JzZXJ2YWJsZSBleHBvc2luZyB0aGUgYnJlYWRjcnVtYiBoaWVyYXJjaHlcclxuICByZWFkb25seSBicmVhZGNydW1icyQgPSB0aGlzLl9icmVhZGNydW1icyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAucGlwZShcclxuICAgICAgICAvLyBGaWx0ZXIgdGhlIE5hdmlnYXRpb25FbmQgZXZlbnRzIGFzIHRoZSBicmVhZGNydW1iIGlzIHVwZGF0ZWQgb25seSB3aGVuIHRoZSByb3V0ZSByZWFjaGVzIGl0cyBlbmRcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIGJyZWFkY3J1bWIgaGllcmFyY2h5XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3Q7XHJcbiAgICAgICAgbGV0IGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iW10gPSBbXTtcclxuICAgICAgICB0aGlzLmFkZEJyZWFkY3J1bWIocm9vdCwgW10sIGJyZWFkY3J1bWJzKTtcclxuXHJcbiAgICAgICAgLy8gRW1pdCB0aGUgbmV3IGhpZXJhcmNoeVxyXG4gICAgICAgIHRoaXMuX2JyZWFkY3J1bWJzJC5uZXh0KGJyZWFkY3J1bWJzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEJyZWFkY3J1bWIoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB8IG51bGwsXHJcbiAgICBwYXJlbnRVcmw6IHN0cmluZ1tdLFxyXG4gICAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJbXVxyXG4gICkge1xyXG4gICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgcm91dGUgVVJMXHJcbiAgICAgIGNvbnN0IHJvdXRlVXJsID0gcGFyZW50VXJsLmNvbmNhdChyb3V0ZS51cmwubWFwKCh1cmwpID0+IHVybC5wYXRoKSk7XHJcblxyXG4gICAgICAvLyBBZGQgYW4gZWxlbWVudCBmb3IgdGhlIGN1cnJlbnQgcm91dGUgcGFydFxyXG4gICAgICBpZiAocm91dGUuZGF0YVsnYnJlYWRjcnVtYiddKSB7XHJcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYiA9IHtcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLmdldExhYmVsKHJvdXRlLmRhdGEpLFxyXG4gICAgICAgICAgdXJsOiAnLycgKyByb3V0ZVVybC5qb2luKCcvJyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBZGQgYW5vdGhlciBlbGVtZW50IGZvciB0aGUgbmV4dCByb3V0ZSBwYXJ0XHJcbiAgICAgIHRoaXMuYWRkQnJlYWRjcnVtYihyb3V0ZS5maXJzdENoaWxkLCByb3V0ZVVybCwgYnJlYWRjcnVtYnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMYWJlbChkYXRhOiBEYXRhKSB7XHJcbiAgICAvLyBUaGUgYnJlYWRjcnVtYiBjYW4gYmUgZGVmaW5lZCBhcyBhIHN0YXRpYyBzdHJpbmcgb3IgYXMgYSBmdW5jdGlvbiB0byBjb25zdHJ1Y3QgdGhlIGJyZWFkY3J1bWIgZWxlbWVudCBvdXQgb2YgdGhlIHJvdXRlIGRhdGFcclxuICAgIHJldHVybiB0eXBlb2YgZGF0YVsnYnJlYWRjcnVtYiddID09PSAnZnVuY3Rpb24nXHJcbiAgICAgID8gZGF0YVsnYnJlYWRjcnVtYiddKGRhdGEpXHJcbiAgICAgIDogZGF0YVsnYnJlYWRjcnVtYiddO1xyXG4gIH1cclxufVxyXG4iXX0=