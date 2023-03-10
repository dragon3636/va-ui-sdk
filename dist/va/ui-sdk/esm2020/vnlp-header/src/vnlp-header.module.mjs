import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpHeaderComponent } from './vnlp-header.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [];
export class VnlpHeaderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmEvdWktc2RrL3ZubHAtaGVhZGVyL3NyYy92bmxwLWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFdkQsTUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDO0FBTzFCLE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFKWixtQkFBbUIsRUFBRSxtQkFBbUIsYUFDN0MsWUFBWSw4QkFDWixtQkFBbUIsRUFBRSxZQUFZOytHQUVoQyxnQkFBZ0IsWUFIakIsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQ3RCLFlBQVk7NEZBRWhDLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztvQkFDeEQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztpQkFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVm5scEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdm5scC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW107XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1ZubHBIZWFkZXJDb21wb25lbnQsIEJyZWFkY3J1bWJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbVm5scEhlYWRlckNvbXBvbmVudCwgUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZubHBIZWFkZXJNb2R1bGUge31cclxuIl19