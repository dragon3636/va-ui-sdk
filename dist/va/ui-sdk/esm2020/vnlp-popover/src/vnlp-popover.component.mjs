import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VnlpPopoverComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.options = [];
        this.position = 'bottom center';
        this.onOptionClick = new EventEmitter();
        this.showOptions = false;
    }
    ngOnInit() { }
    onShowOptions() {
        this.showOptions = !this.showOptions;
    }
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showOptions = false;
        }
    }
    onClickOption(key) {
        this.onOptionClick.emit(key);
        this.showOptions = false;
    }
}
VnlpPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
VnlpPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpPopoverComponent, selector: "vnlp-popover", inputs: { options: "options", position: "position" }, outputs: { onOptionClick: "onOptionClick" }, host: { listeners: { "document:click": "clickout($event)" } }, ngImport: i0, template: "<div\r\n  [ngClass]=\"{\r\n    'popover-options-container': true,\r\n    opened: showOptions\r\n  }\"\r\n>\r\n  <span class=\"more-options-icon\" (click)=\"onShowOptions()\">\r\n    <i class=\"icon icon-vnlp-icon-more-linear text-xxl\"></i>\r\n  </span>\r\n  <ul *ngIf=\"showOptions\" [class]=\"'options ' + position\">\r\n    <li\r\n      *ngFor=\"let option of options\"\r\n      class=\"text-sm text-left p-2 select-none\"\r\n      (click)=\"onClickOption(option.key)\"\r\n    >\r\n      <i *ngIf=\"option.icon\" [class]=\"'icon icon-vnlp-icon-' + option.icon\"></i>\r\n      <span>{{ option.label }}</span>\r\n    </li>\r\n\r\n    <li\r\n      *ngIf=\"!options.length\"\r\n      class=\"text-sm text-left p-2 select-none empty-option\"\r\n    >\r\n      Empty option...\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".popover-options-container{display:flex;align-items:center;border-radius:10px;position:relative}.popover-options-container .more-options-icon{color:#777e90;box-shadow:0 0 1px 1px #e6e8ec;background-color:#fff;border-radius:10px}.popover-options-container .options{position:absolute;min-width:200px;background-color:#fff;box-shadow:0 3px 8px #0000003d;z-index:1;border-radius:6px;overflow:hidden}.popover-options-container .options.top{bottom:110%}.popover-options-container .options.left{right:0}.popover-options-container .options.right{left:0}.popover-options-container .options.bottom{top:110%}.popover-options-container .options.center{left:50%;transform:translate(-50%)}.popover-options-container .options li{white-space:nowrap}.popover-options-container .options li.empty-option:hover{background-color:unset}.popover-options-container .options li:hover,.popover-options-container .options li.opened{background-color:#e6f2fe}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-popover', template: "<div\r\n  [ngClass]=\"{\r\n    'popover-options-container': true,\r\n    opened: showOptions\r\n  }\"\r\n>\r\n  <span class=\"more-options-icon\" (click)=\"onShowOptions()\">\r\n    <i class=\"icon icon-vnlp-icon-more-linear text-xxl\"></i>\r\n  </span>\r\n  <ul *ngIf=\"showOptions\" [class]=\"'options ' + position\">\r\n    <li\r\n      *ngFor=\"let option of options\"\r\n      class=\"text-sm text-left p-2 select-none\"\r\n      (click)=\"onClickOption(option.key)\"\r\n    >\r\n      <i *ngIf=\"option.icon\" [class]=\"'icon icon-vnlp-icon-' + option.icon\"></i>\r\n      <span>{{ option.label }}</span>\r\n    </li>\r\n\r\n    <li\r\n      *ngIf=\"!options.length\"\r\n      class=\"text-sm text-left p-2 select-none empty-option\"\r\n    >\r\n      Empty option...\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".popover-options-container{display:flex;align-items:center;border-radius:10px;position:relative}.popover-options-container .more-options-icon{color:#777e90;box-shadow:0 0 1px 1px #e6e8ec;background-color:#fff;border-radius:10px}.popover-options-container .options{position:absolute;min-width:200px;background-color:#fff;box-shadow:0 3px 8px #0000003d;z-index:1;border-radius:6px;overflow:hidden}.popover-options-container .options.top{bottom:110%}.popover-options-container .options.left{right:0}.popover-options-container .options.right{left:0}.popover-options-container .options.bottom{top:110%}.popover-options-container .options.center{left:50%;transform:translate(-50%)}.popover-options-container .options li{white-space:nowrap}.popover-options-container .options li.empty-option:hover{background-color:unset}.popover-options-container .options li:hover,.popover-options-container .options li.opened{background-color:#e6f2fe}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { options: [{
                type: Input
            }], position: [{
                type: Input
            }], onOptionClick: [{
                type: Output
            }], clickout: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZhL3VpLXNkay92bmxwLXBvcG92ZXIvc3JjL3ZubHAtcG9wb3Zlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1wb3BvdmVyL3NyYy92bmxwLXBvcG92ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7OztBQU92QixNQUFNLE9BQU8sb0JBQW9CO0lBaUIvQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBaEIzQixZQUFPLEdBSVYsRUFBRSxDQUFDO1FBQ0EsYUFBUSxHQU1LLGVBQWUsQ0FBQztRQUM1QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFFVSxDQUFDO0lBRXhDLFFBQVEsS0FBSSxDQUFDO0lBRWIsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFHRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsR0FBVztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOztrSEFuQ1Usb0JBQW9CO3NHQUFwQixvQkFBb0Isc05DZmpDLDZ5QkEyQkE7NEZEWmEsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGNBQWM7aUdBS2YsT0FBTztzQkFBZixLQUFLO2dCQUtHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0ksYUFBYTtzQkFBdEIsTUFBTTtnQkFhUCxRQUFRO3NCQURQLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndm5scC1wb3BvdmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdm5scC1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi92bmxwLXBvcG92ZXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZubHBQb3BvdmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBvcHRpb25zOiB7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gIH1bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOlxyXG4gICAgfCAndG9wIGxlZnQnXHJcbiAgICB8ICd0b3AgcmlnaHQnXHJcbiAgICB8ICd0b3AgY2VudGVyJ1xyXG4gICAgfCAnYm90dG9tIGxlZnQnXHJcbiAgICB8ICdib3R0b20gcmlnaHQnXHJcbiAgICB8ICdib3R0b20gY2VudGVyJyA9ICdib3R0b20gY2VudGVyJztcclxuICBAT3V0cHV0KCkgb25PcHRpb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2hvd09wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG9uU2hvd09wdGlvbnMoKSB7XHJcbiAgICB0aGlzLnNob3dPcHRpb25zID0gIXRoaXMuc2hvd09wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2tvdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPcHRpb24oa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMub25PcHRpb25DbGljay5lbWl0KGtleSk7XHJcbiAgICB0aGlzLnNob3dPcHRpb25zID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAncG9wb3Zlci1vcHRpb25zLWNvbnRhaW5lcic6IHRydWUsXHJcbiAgICBvcGVuZWQ6IHNob3dPcHRpb25zXHJcbiAgfVwiXHJcbj5cclxuICA8c3BhbiBjbGFzcz1cIm1vcmUtb3B0aW9ucy1pY29uXCIgKGNsaWNrKT1cIm9uU2hvd09wdGlvbnMoKVwiPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uIGljb24tdm5scC1pY29uLW1vcmUtbGluZWFyIHRleHQteHhsXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8dWwgKm5nSWY9XCJzaG93T3B0aW9uc1wiIFtjbGFzc109XCInb3B0aW9ucyAnICsgcG9zaXRpb25cIj5cclxuICAgIDxsaVxyXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxyXG4gICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1sZWZ0IHAtMiBzZWxlY3Qtbm9uZVwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrT3B0aW9uKG9wdGlvbi5rZXkpXCJcclxuICAgID5cclxuICAgICAgPGkgKm5nSWY9XCJvcHRpb24uaWNvblwiIFtjbGFzc109XCInaWNvbiBpY29uLXZubHAtaWNvbi0nICsgb3B0aW9uLmljb25cIj48L2k+XHJcbiAgICAgIDxzcGFuPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgPGxpXHJcbiAgICAgICpuZ0lmPVwiIW9wdGlvbnMubGVuZ3RoXCJcclxuICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtbGVmdCBwLTIgc2VsZWN0LW5vbmUgZW1wdHktb3B0aW9uXCJcclxuICAgID5cclxuICAgICAgRW1wdHkgb3B0aW9uLi4uXHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG4iXX0=