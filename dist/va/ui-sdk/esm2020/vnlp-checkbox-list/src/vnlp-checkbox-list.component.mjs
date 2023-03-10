import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@em-and-ai/ui-sdk/vnlp-checkbox";
export class VnlpCheckboxListComponent {
    constructor() {
        this.options = [];
        this.optionsChange = new EventEmitter();
        this.name = '';
        this.onChange = new EventEmitter();
    }
    ngOnInit() { }
    handleCheckboxChange(data) {
        this.onChange.emit({
            [this.name]: this.options,
        });
    }
}
VnlpCheckboxListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpCheckboxListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpCheckboxListComponent, selector: "vnlp-checkbox-list", inputs: { options: "options", name: "name" }, outputs: { optionsChange: "optionsChange", onChange: "onChange" }, ngImport: i0, template: "<ul class=\"vnlp-checkbox-list-container\">\r\n  <li *ngFor=\"let option of options\" class=\"mb-2\">\r\n    <vnlp-checkbox\r\n      [(checked)]=\"option.checked\"\r\n      [label]=\"option.title\"\r\n      (onChange)=\"handleCheckboxChange($event)\"\r\n    ></vnlp-checkbox>\r\n  </li>\r\n</ul>\r\n", styles: [".vnlp-checkbox-list-container{display:flex;flex-direction:column}.vnlp-checkbox-list-container.checkbox-in-list li{background-color:red}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.VnlpCheckboxComponent, selector: "vnlp-checkbox", inputs: ["label", "name", "disabled", "checked", "labelPosition", "isShowInList", "isShowDivider"], outputs: ["checkedChange", "onChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCheckboxListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-checkbox-list', template: "<ul class=\"vnlp-checkbox-list-container\">\r\n  <li *ngFor=\"let option of options\" class=\"mb-2\">\r\n    <vnlp-checkbox\r\n      [(checked)]=\"option.checked\"\r\n      [label]=\"option.title\"\r\n      (onChange)=\"handleCheckboxChange($event)\"\r\n    ></vnlp-checkbox>\r\n  </li>\r\n</ul>\r\n", styles: [".vnlp-checkbox-list-container{display:flex;flex-direction:column}.vnlp-checkbox-list-container.checkbox-in-list li{background-color:red}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { options: [{
                type: Input
            }], optionsChange: [{
                type: Output
            }], name: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1jaGVja2JveC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZhL3VpLXNkay92bmxwLWNoZWNrYm94LWxpc3Qvc3JjL3ZubHAtY2hlY2tib3gtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1jaGVja2JveC1saXN0L3NyYy92bmxwLWNoZWNrYm94LWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8vRSxNQUFNLE9BQU8seUJBQXlCO0lBT3BDO1FBTlMsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVqQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6QixDQUFDO0lBRWhCLFFBQVEsS0FBVSxDQUFDO0lBRW5CLG9CQUFvQixDQUFDLElBQVM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7dUhBZlUseUJBQXlCOzJHQUF6Qix5QkFBeUIsMktDUHRDLDZTQVNBOzRGREZhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxvQkFBb0I7MEVBS3JCLE9BQU87c0JBQWYsS0FBSztnQkFDSSxhQUFhO3NCQUF0QixNQUFNO2dCQUNFLElBQUk7c0JBQVosS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2bmxwLWNoZWNrYm94LWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92bmxwLWNoZWNrYm94LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZubHAtY2hlY2tib3gtbGlzdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVm5scENoZWNrYm94TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0gW107XHJcbiAgQE91dHB1dCgpIG9wdGlvbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIGhhbmRsZUNoZWNrYm94Q2hhbmdlKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgW3RoaXMubmFtZV06IHRoaXMub3B0aW9ucyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8dWwgY2xhc3M9XCJ2bmxwLWNoZWNrYm94LWxpc3QtY29udGFpbmVyXCI+XHJcbiAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiIGNsYXNzPVwibWItMlwiPlxyXG4gICAgPHZubHAtY2hlY2tib3hcclxuICAgICAgWyhjaGVja2VkKV09XCJvcHRpb24uY2hlY2tlZFwiXHJcbiAgICAgIFtsYWJlbF09XCJvcHRpb24udGl0bGVcIlxyXG4gICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+PC92bmxwLWNoZWNrYm94PlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbiJdfQ==