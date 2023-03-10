import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VnlpSwitchComponent {
    constructor() {
        this.checked = false;
        this.checkedChange = new EventEmitter();
        this.disabled = false;
        this.label = 'Label';
        this.name = 'name';
        this.labelPosition = 'right';
        this.size = 'sm';
        this.onChange = new EventEmitter();
    }
    ngOnInit() { }
    handleClick() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.onChange.emit({
            [this.name]: this.checked,
        });
    }
}
VnlpSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpSwitchComponent, selector: "vnlp-switch", inputs: { checked: "checked", disabled: "disabled", label: "label", name: "name", labelPosition: "labelPosition", size: "size" }, outputs: { checkedChange: "checkedChange", onChange: "onChange" }, ngImport: i0, template: "<div class=\"switch-container inline-flex items-center\">\r\n  <label\r\n    [for]=\"name\"\r\n    [ngClass]=\"{\r\n      'text-sm text-600 mx-2 text-neutral-1 select-none': true,\r\n      'order-2': labelPosition === 'left'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n  <input\r\n    [id]=\"name\"\r\n    [name]=\"name\"\r\n    type=\"checkbox\"\r\n    [checked]=\"checked\"\r\n    (click)=\"handleClick()\"\r\n    [disabled]=\"disabled\"\r\n    [ngClass]=\"{ 'mx-1': true, md: size === 'md' }\"\r\n  />\r\n</div>\r\n", styles: [".switch-container input[type=checkbox]{position:relative;-webkit-appearance:none;appearance:none;width:38px;height:24px;border-radius:50px;background-color:#e6e8ec;cursor:pointer;transition:.2s}.switch-container input[type=checkbox].md{width:56px;height:32px}.switch-container input[type=checkbox].md:after{width:24px;height:24px}.switch-container input[type=checkbox]:hover{box-shadow:0 0 1px 3px #cce5fe}.switch-container input[type=checkbox]:checked[type=checkbox]{background:#007df9}.switch-container input[type=checkbox]:checked[type=checkbox]:disabled{background-color:#e6f2fe}.switch-container input[type=checkbox]:disabled{background-color:#f4f5f6;box-shadow:none}.switch-container input[type=checkbox]:after{content:\"\";position:absolute;top:4px;left:4px;width:16px;height:16px;background:#ffffff;border-radius:50%;transition:.2s}.switch-container input:checked[type=checkbox]:after{left:44%}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-switch', template: "<div class=\"switch-container inline-flex items-center\">\r\n  <label\r\n    [for]=\"name\"\r\n    [ngClass]=\"{\r\n      'text-sm text-600 mx-2 text-neutral-1 select-none': true,\r\n      'order-2': labelPosition === 'left'\r\n    }\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n  <input\r\n    [id]=\"name\"\r\n    [name]=\"name\"\r\n    type=\"checkbox\"\r\n    [checked]=\"checked\"\r\n    (click)=\"handleClick()\"\r\n    [disabled]=\"disabled\"\r\n    [ngClass]=\"{ 'mx-1': true, md: size === 'md' }\"\r\n  />\r\n</div>\r\n", styles: [".switch-container input[type=checkbox]{position:relative;-webkit-appearance:none;appearance:none;width:38px;height:24px;border-radius:50px;background-color:#e6e8ec;cursor:pointer;transition:.2s}.switch-container input[type=checkbox].md{width:56px;height:32px}.switch-container input[type=checkbox].md:after{width:24px;height:24px}.switch-container input[type=checkbox]:hover{box-shadow:0 0 1px 3px #cce5fe}.switch-container input[type=checkbox]:checked[type=checkbox]{background:#007df9}.switch-container input[type=checkbox]:checked[type=checkbox]:disabled{background-color:#e6f2fe}.switch-container input[type=checkbox]:disabled{background-color:#f4f5f6;box-shadow:none}.switch-container input[type=checkbox]:after{content:\"\";position:absolute;top:4px;left:4px;width:16px;height:16px;background:#ffffff;border-radius:50%;transition:.2s}.switch-container input:checked[type=checkbox]:after{left:44%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { checked: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], name: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], size: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1zd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdmEvdWktc2RrL3ZubHAtc3dpdGNoL3NyYy92bmxwLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1zd2l0Y2gvc3JjL3ZubHAtc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8vRSxNQUFNLE9BQU8sbUJBQW1CO0lBVzlCO1FBVlMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsa0JBQWEsR0FBcUIsT0FBTyxDQUFDO1FBQzFDLFNBQUksR0FBZ0IsSUFBSSxDQUFDO1FBRXhCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7SUFFbkIsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDOztpSEFyQlUsbUJBQW1CO3FHQUFuQixtQkFBbUIsd1BDUGhDLGtoQkFvQkE7NEZEYmEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7MEVBS2QsT0FBTztzQkFBZixLQUFLO2dCQUNJLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0UsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZubHAtc3dpdGNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdm5scC1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZubHAtc3dpdGNoLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWbmxwU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0xhYmVsJztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnbmFtZSc7XHJcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdyaWdodCc7XHJcbiAgQElucHV0KCkgc2l6ZTogJ3NtJyB8ICdtZCcgPSAnc20nO1xyXG5cclxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBoYW5kbGVDbGljaygpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgW3RoaXMubmFtZV06IHRoaXMuY2hlY2tlZCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic3dpdGNoLWNvbnRhaW5lciBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICA8bGFiZWxcclxuICAgIFtmb3JdPVwibmFtZVwiXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICd0ZXh0LXNtIHRleHQtNjAwIG14LTIgdGV4dC1uZXV0cmFsLTEgc2VsZWN0LW5vbmUnOiB0cnVlLFxyXG4gICAgICAnb3JkZXItMic6IGxhYmVsUG9zaXRpb24gPT09ICdsZWZ0J1xyXG4gICAgfVwiXHJcbiAgPlxyXG4gICAge3sgbGFiZWwgfX1cclxuICA8L2xhYmVsPlxyXG4gIDxpbnB1dFxyXG4gICAgW2lkXT1cIm5hbWVcIlxyXG4gICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soKVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW25nQ2xhc3NdPVwieyAnbXgtMSc6IHRydWUsIG1kOiBzaXplID09PSAnbWQnIH1cIlxyXG4gIC8+XHJcbjwvZGl2PlxyXG4iXX0=