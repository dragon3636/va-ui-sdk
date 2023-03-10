import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VnlpLabelTagComponent {
    constructor() {
        this.text = 'Label';
        this.type = 'gray';
        this.typeList = {
            gray: {
                textColor: 'primary',
                bgc: 'primary-100',
            },
            orange: {
                textColor: 'secondary',
                bgc: 'secondary-100',
            },
            red: {
                textColor: 'error',
                bgc: 'error-100',
            },
            blue: {
                textColor: 'primary',
                bgc: 'primary-100',
            },
            green: {
                textColor: 'success',
                bgc: 'success-100',
            },
        };
    }
    ngOnInit() { }
}
VnlpLabelTagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpLabelTagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpLabelTagComponent, selector: "vnlp-label-tag", inputs: { text: "text", type: "type" }, ngImport: i0, template: "<span\r\n  class=\"hidden text-neutral-7 bg-neutral-4 text-secondary bg-secondary-100 text-error bg-error-100 text-primary bg-primary-100 text-success bg-success-100\"\r\n></span>\r\n\r\n<span\r\n  [ngClass]=\"[\r\n    'text-[12px] h-[24px] inline-flex items-center rounded-md px-[6px] py-[8px]',\r\n    'bg-' + typeList[type].bgc,\r\n    'text-' + typeList[type].textColor\r\n  ]\"\r\n>\r\n  {{ text }}\r\n</span>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpLabelTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-label-tag', template: "<span\r\n  class=\"hidden text-neutral-7 bg-neutral-4 text-secondary bg-secondary-100 text-error bg-error-100 text-primary bg-primary-100 text-success bg-success-100\"\r\n></span>\r\n\r\n<span\r\n  [ngClass]=\"[\r\n    'text-[12px] h-[24px] inline-flex items-center rounded-md px-[6px] py-[8px]',\r\n    'bg-' + typeList[type].bgc,\r\n    'text-' + typeList[type].textColor\r\n  ]\"\r\n>\r\n  {{ text }}\r\n</span>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1sYWJlbC10YWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmEvdWktc2RrL3ZubHAtbGFiZWwtdGFnL3NyYy92bmxwLWxhYmVsLXRhZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1sYWJlbC10YWcvc3JjL3ZubHAtbGFiZWwtdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFTekQsTUFBTSxPQUFPLHFCQUFxQjtJQTJCaEM7UUExQlMsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixTQUFJLEdBQWMsTUFBTSxDQUFDO1FBRWxDLGFBQVEsR0FBRztZQUNULElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsU0FBUztnQkFDcEIsR0FBRyxFQUFFLGFBQWE7YUFDbkI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLEdBQUcsRUFBRSxlQUFlO2FBQ3JCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRSxPQUFPO2dCQUNsQixHQUFHLEVBQUUsV0FBVzthQUNqQjtZQUNELElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsU0FBUztnQkFDcEIsR0FBRyxFQUFFLGFBQWE7YUFDbkI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLEdBQUcsRUFBRSxhQUFhO2FBQ25CO1NBQ0YsQ0FBQztJQUVhLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7O21IQTdCUixxQkFBcUI7dUdBQXJCLHFCQUFxQiw4RkNUbEMsb2FBYUE7NEZESmEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLGdCQUFnQjswRUFLakIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxudHlwZSBMYWJlbFR5cGUgPSAnZ3JheScgfCAnb3JhbmdlJyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ2dyZWVuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndm5scC1sYWJlbC10YWcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92bmxwLWxhYmVsLXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdm5scC1sYWJlbC10YWcuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZubHBMYWJlbFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ0xhYmVsJztcclxuICBASW5wdXQoKSB0eXBlOiBMYWJlbFR5cGUgPSAnZ3JheSc7XHJcblxyXG4gIHR5cGVMaXN0ID0ge1xyXG4gICAgZ3JheToge1xyXG4gICAgICB0ZXh0Q29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmdjOiAncHJpbWFyeS0xMDAnLFxyXG4gICAgfSxcclxuICAgIG9yYW5nZToge1xyXG4gICAgICB0ZXh0Q29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICBiZ2M6ICdzZWNvbmRhcnktMTAwJyxcclxuICAgIH0sXHJcbiAgICByZWQ6IHtcclxuICAgICAgdGV4dENvbG9yOiAnZXJyb3InLFxyXG4gICAgICBiZ2M6ICdlcnJvci0xMDAnLFxyXG4gICAgfSxcclxuICAgIGJsdWU6IHtcclxuICAgICAgdGV4dENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnYzogJ3ByaW1hcnktMTAwJyxcclxuICAgIH0sXHJcbiAgICBncmVlbjoge1xyXG4gICAgICB0ZXh0Q29sb3I6ICdzdWNjZXNzJyxcclxuICAgICAgYmdjOiAnc3VjY2Vzcy0xMDAnLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxufVxyXG4iLCI8c3BhblxyXG4gIGNsYXNzPVwiaGlkZGVuIHRleHQtbmV1dHJhbC03IGJnLW5ldXRyYWwtNCB0ZXh0LXNlY29uZGFyeSBiZy1zZWNvbmRhcnktMTAwIHRleHQtZXJyb3IgYmctZXJyb3ItMTAwIHRleHQtcHJpbWFyeSBiZy1wcmltYXJ5LTEwMCB0ZXh0LXN1Y2Nlc3MgYmctc3VjY2Vzcy0xMDBcIlxyXG4+PC9zcGFuPlxyXG5cclxuPHNwYW5cclxuICBbbmdDbGFzc109XCJbXHJcbiAgICAndGV4dC1bMTJweF0gaC1bMjRweF0gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgcHgtWzZweF0gcHktWzhweF0nLFxyXG4gICAgJ2JnLScgKyB0eXBlTGlzdFt0eXBlXS5iZ2MsXHJcbiAgICAndGV4dC0nICsgdHlwZUxpc3RbdHlwZV0udGV4dENvbG9yXHJcbiAgXVwiXHJcbj5cclxuICB7eyB0ZXh0IH19XHJcbjwvc3Bhbj5cclxuIl19