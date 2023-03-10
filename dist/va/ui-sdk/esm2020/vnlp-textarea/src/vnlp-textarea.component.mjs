import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class VnlpTextareaComponent {
    constructor() {
        this.label = 'Label';
        this.valueChange = new EventEmitter();
        this.name = '';
        this.value = '';
        this.error = false;
        this.placeholder = 'Placeholder';
        this.disabled = false;
        this.rows = '3';
        this.maxLength = '75';
        this.width = '320';
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnInit() { }
    handleChange(newValue) {
        this.valueChange.emit(newValue);
        this.onChange.emit({
            [this.name]: this.value,
        });
    }
    handleBlur() {
        this.onBlur.emit();
    }
}
VnlpTextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpTextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpTextareaComponent, selector: "vnlp-textarea", inputs: { label: "label", name: "name", value: "value", error: "error", placeholder: "placeholder", disabled: "disabled", rows: "rows", maxLength: "maxLength", width: "width" }, outputs: { valueChange: "valueChange", onChange: "onChange", onBlur: "onBlur" }, ngImport: i0, template: "<div class=\"vnlp-textarea-container inline-block\">\r\n  <label [for]=\"name\" class=\"inline-block text-sm mb-2 font-medium\">\r\n    {{ label }}\r\n  </label>\r\n  <div class=\"relative\" [style.width.px]=\"width\">\r\n    <textarea\r\n      [name]=\"name\"\r\n      [id]=\"name\"\r\n      [rows]=\"rows\"\r\n      class=\"w-full rounded-lg\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"handleChange($event)\"\r\n      (blur)=\"handleBlur()\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [maxlength]=\"maxLength\"\r\n    ></textarea>\r\n  </div>\r\n  <span class=\"counter flex justify-end\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n", styles: [".vnlp-textarea-container textarea{padding:12px 18px;width:100%;height:100%;box-shadow:0 0 4px 1px #e6e8ec;resize:none;transition:all .2s ease-in-out}.vnlp-textarea-container textarea::placeholder{color:#b1b5c3}.vnlp-textarea-container textarea:focus{outline:none;box-shadow:0 0 4px 1px #007df9;caret-color:#007df9}.vnlp-textarea-container textarea:focus:hover{box-shadow:0 0 4px 1px #007df9}.vnlp-textarea-container textarea:focus+.info-text{color:#007df9}.vnlp-textarea-container textarea:hover{box-shadow:0 0 4px 1px #99cbfd;outline:none}.vnlp-textarea-container textarea:disabled{cursor:default;background-color:#f4f5f6;box-shadow:0 0 4px 1px #e6e8ec}.vnlp-textarea-container .counter{color:#b1b5c3;font-size:14px}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-textarea', template: "<div class=\"vnlp-textarea-container inline-block\">\r\n  <label [for]=\"name\" class=\"inline-block text-sm mb-2 font-medium\">\r\n    {{ label }}\r\n  </label>\r\n  <div class=\"relative\" [style.width.px]=\"width\">\r\n    <textarea\r\n      [name]=\"name\"\r\n      [id]=\"name\"\r\n      [rows]=\"rows\"\r\n      class=\"w-full rounded-lg\"\r\n      [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"handleChange($event)\"\r\n      (blur)=\"handleBlur()\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [maxlength]=\"maxLength\"\r\n    ></textarea>\r\n  </div>\r\n  <span class=\"counter flex justify-end\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n", styles: [".vnlp-textarea-container textarea{padding:12px 18px;width:100%;height:100%;box-shadow:0 0 4px 1px #e6e8ec;resize:none;transition:all .2s ease-in-out}.vnlp-textarea-container textarea::placeholder{color:#b1b5c3}.vnlp-textarea-container textarea:focus{outline:none;box-shadow:0 0 4px 1px #007df9;caret-color:#007df9}.vnlp-textarea-container textarea:focus:hover{box-shadow:0 0 4px 1px #007df9}.vnlp-textarea-container textarea:focus+.info-text{color:#007df9}.vnlp-textarea-container textarea:hover{box-shadow:0 0 4px 1px #99cbfd;outline:none}.vnlp-textarea-container textarea:disabled{cursor:default;background-color:#f4f5f6;box-shadow:0 0 4px 1px #e6e8ec}.vnlp-textarea-container .counter{color:#b1b5c3;font-size:14px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], error: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], rows: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], width: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onBlur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC10ZXh0YXJlYS9zcmMvdm5scC10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC10ZXh0YXJlYS9zcmMvdm5scC10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLHFCQUFxQjtJQWVoQztRQWRTLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFXLEdBQUcsQ0FBQztRQUNuQixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLFVBQUssR0FBVyxLQUFLLENBQUM7UUFFckIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixZQUFZLENBQUMsUUFBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7bUhBNUJVLHFCQUFxQjt1R0FBckIscUJBQXFCLHdUQ1BsQyw4c0JBc0JBOzRGRGZhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxlQUFlOzBFQUtoQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTTtnQkFDRSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2bmxwLXRleHRhcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdm5scC10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdm5scC10ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVm5scFRleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0xhYmVsJztcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdQbGFjZWhvbGRlcic7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByb3dzOiBzdHJpbmcgPSAnMyc7XHJcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBzdHJpbmcgPSAnNzUnO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgPSAnMzIwJztcclxuXHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBoYW5kbGVDaGFuZ2UobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgIFt0aGlzLm5hbWVdOiB0aGlzLnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCbHVyKCkge1xyXG4gICAgdGhpcy5vbkJsdXIuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwidm5scC10ZXh0YXJlYS1jb250YWluZXIgaW5saW5lLWJsb2NrXCI+XHJcbiAgPGxhYmVsIFtmb3JdPVwibmFtZVwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHRleHQtc20gbWItMiBmb250LW1lZGl1bVwiPlxyXG4gICAge3sgbGFiZWwgfX1cclxuICA8L2xhYmVsPlxyXG4gIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiPlxyXG4gICAgPHRleHRhcmVhXHJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbaWRdPVwibmFtZVwiXHJcbiAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICBjbGFzcz1cInctZnVsbCByb3VuZGVkLWxnXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGJsdXIpPVwiaGFuZGxlQmx1cigpXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW21heGxlbmd0aF09XCJtYXhMZW5ndGhcIlxyXG4gICAgPjwvdGV4dGFyZWE+XHJcbiAgPC9kaXY+XHJcbiAgPHNwYW4gY2xhc3M9XCJjb3VudGVyIGZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgIHt7IHZhbHVlLmxlbmd0aCB9fSAvIHt7IG1heExlbmd0aCB9fVxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==