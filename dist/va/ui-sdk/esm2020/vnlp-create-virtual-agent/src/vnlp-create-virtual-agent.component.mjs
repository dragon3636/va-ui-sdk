import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@em-and-ai/ui-sdk/vnlp-label-tag";
import * as i3 from "@em-and-ai/ui-sdk/vnlp-popover";
export class VnlpCreateVirtualAgentComponent {
    constructor() {
        this.label = 'create virtual agent';
        this.mode = 'create';
        this.disabled = false;
        this.title = 'Title';
        this.description = 'Description';
        this.labelText = 'label';
        this.labelType = 'gray';
        this.type = 'voice';
        this.onClick = new EventEmitter();
        this.onOptionClick = new EventEmitter();
        this.showOptions = false;
    }
    ngOnInit() { }
    handleCreate() {
        this.onClick.emit();
    }
    onClickOption(data) {
        this.onOptionClick.emit(data);
    }
}
VnlpCreateVirtualAgentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCreateVirtualAgentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpCreateVirtualAgentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpCreateVirtualAgentComponent, selector: "vnlp-create-virtual-agent", inputs: { label: "label", mode: "mode", disabled: "disabled", title: "title", description: "description", labelText: "labelText", labelType: "labelType", type: "type" }, outputs: { onClick: "onClick", onOptionClick: "onOptionClick" }, ngImport: i0, template: "<button\r\n  [ngClass]=\"{\r\n    'create-virtual-agent-container w-[260px] rounded-xl transition-all ease-in-out duration-200 cursor-pointer': true,\r\n    'create-mode': mode === 'create',\r\n    'show-mode': mode === 'show'\r\n  }\"\r\n  (click)=\"mode === 'create' && handleCreate()\"\r\n  [disabled]=\"disabled\"\r\n>\r\n  <div\r\n    *ngIf=\"mode === 'create'\"\r\n    class=\"w-full min-h-full flex flex-col justify-center items-center\"\r\n  >\r\n    <i class=\"icon icon-vnlp-icon-add-linear\"></i>\r\n    <span class=\"mt-2 text-neutral-3 text-sm font-medium\">{{ label }}</span>\r\n  </div>\r\n  <div *ngIf=\"mode === 'show'\" class=\"w-full min-h-full flex flex-col p-[14px]\">\r\n    <div class=\"flex justify-between\">\r\n      <span class=\"text-sm text-bold text-neutral-2\">{{ title }}</span>\r\n      <i\r\n        [ngClass]=\"{\r\n          'icon icon-voice': type === 'voice',\r\n          'icon icon-chat': type === 'chat'\r\n        }\"\r\n      ></i>\r\n    </div>\r\n    <div\r\n      class=\"description mb-3 text-neutral-4 text-sm w-[190px] h-[50px] text-left\"\r\n    >\r\n      {{ description }}\r\n    </div>\r\n    <div class=\"divider\"></div>\r\n    <div class=\"pt-[12px] flex justify-between items-center\">\r\n      <vnlp-label-tag [type]=\"labelType\" [text]=\"labelText\"></vnlp-label-tag>\r\n      <vnlp-popover\r\n        (onOptionClick)=\"onClickOption($event)\"\r\n        [options]=\"[\r\n          {\r\n            label: 'option 1',\r\n            key: 'option 1'\r\n          },\r\n          {\r\n            label: 'option 2',\r\n            key: 'option 2'\r\n          },\r\n          {\r\n            label: 'option 3',\r\n            key: 'option 3'\r\n          }\r\n        ]\"\r\n        position=\"bottom left\"\r\n      ></vnlp-popover>\r\n    </div>\r\n  </div>\r\n</button>\r\n", styles: [".create-virtual-agent-container{background-color:#fff;min-height:150px;box-sizing:border-box}.create-virtual-agent-container:disabled.create-mode:hover{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23E6E8ECFF' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.create-virtual-agent-container:disabled.show-mode:hover{box-shadow:none}.create-virtual-agent-container:disabled.show-mode .popover-options:hover{background-color:inherit}.create-virtual-agent-container.create-mode{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23E6E8ECFF' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.create-virtual-agent-container.create-mode:hover{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23007DF9FF' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.create-virtual-agent-container.show-mode{box-shadow:0 1px 16px #dcaaaa0d}.create-virtual-agent-container.show-mode .icon-voice{height:24px;width:24px;background-image:url(\"data:image/svg+xml,%3Csvg width%3D%2224%22 height%3D%2225%22 viewBox%3D%220 0 24 25%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%3Crect y%3D%220.804565%22 width%3D%2224%22 height%3D%2224%22 rx%3D%224%22 fill%3D%22%23E6F2FE%22%2F%3E%0D%3Cpath d%3D%22M12.2502 15.5638C10.6524 15.5638 9.35742 14.2686 9.35742 12.6711V5.69732C9.35742 4.09982 10.6524 2.80457 12.2502 2.80457C13.8479 2.80457 15.1429 4.09982 15.1429 5.69732V12.6711C15.1429 14.2688 13.8479 15.5638 12.2502 15.5638Z%22 fill%3D%22%234183F3%22%2F%3E%0D%3Cpath d%3D%22M11.1133 18.9173H13.3853V22.8045H11.1133V18.9173Z%22 fill%3D%22%2335A551%22%2F%3E%0D%3Cpath d%3D%22M17.2254 12.6623C17.2254 15.4108 14.9979 17.6648 12.2492 17.6648C10.9772 17.6648 9.81694 17.1818 8.93719 16.3905L7.33594 17.9918C8.62769 19.1833 10.3534 19.9115 12.2494 19.9115C16.2529 19.9115 19.4987 16.6663 19.4987 12.6623H17.2254Z%22 fill%3D%22%23E64236%22%2F%3E%0D%3Cpath d%3D%22M7.273 12.6623H5C5 14.77 5.89975 16.6673 7.33575 17.992L8.937 16.3908C7.916 15.4723 7.273 14.1388 7.273 12.6623Z%22 fill%3D%22%23F7B809%22%2F%3E%0D%3C%2Fsvg%3E%0D\")}.create-virtual-agent-container.show-mode .icon-chat{height:24px;width:24px;background-image:url(\"data:image/svg+xml,%3Csvg width%3D%2224%22 height%3D%2225%22 viewBox%3D%220 0 24 25%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%3Crect y%3D%220.804565%22 width%3D%2224%22 height%3D%2224%22 rx%3D%224%22 fill%3D%22%23FFF1E6%22%2F%3E%0D%3Cg clip-path%3D%22url(%23clip0_157_8748)%22%3E%0D%3Cpath d%3D%22M4.47656 10.6952V5.77332C4.47656 5.71737 4.45434 5.66372 4.41478 5.62416C4.37522 5.5846 4.32157 5.56238 4.26562 5.56238C4.20968 5.56238 4.15603 5.5846 4.11647 5.62416C4.07691 5.66372 4.05469 5.71737 4.05469 5.77332V10.6952C4.05469 10.7511 4.07691 10.8048 4.11647 10.8443C4.15603 10.8839 4.20968 10.9061 4.26562 10.9061C4.32157 10.9061 4.37522 10.8839 4.41478 10.8443C4.45434 10.8048 4.47656 10.7511 4.47656 10.6952Z%22 fill%3D%22%23212121%22%2F%3E%0D%3Cpath d%3D%22M19.7344 5.56238C19.6784 5.56238 19.6248 5.5846 19.5852 5.62416C19.5457 5.66372 19.5234 5.71737 19.5234 5.77332V10.6952C19.5234 10.7511 19.5457 10.8048 19.5852 10.8443C19.6248 10.8839 19.6784 10.9061 19.7344 10.9061C19.7903 10.9061 19.844 10.8839 19.8835 10.8443C19.9231 10.8048 19.9453 10.7511 19.9453 10.6952V5.77332C19.9453 5.71737 19.9231 5.66372 19.8835 5.62416C19.844 5.5846 19.7903 5.56238 19.7344 5.56238Z%22 fill%3D%22%23212121%22%2F%3E%0D%3Cpath d%3D%22M12.0028 5.35144C7.9018 5.35144 4.72142 9.17841 4.75813 13.1561L4.76319 14.7128C4.76914 16.5398 5.49908 18.2899 6.79305 19.5797C8.08702 20.8694 9.8395 21.5936 11.6665 21.5936H12.3392C14.1662 21.5936 15.9187 20.8694 17.2126 19.5797C18.5066 18.2899 19.2365 16.5398 19.2425 14.7128L19.2476 13.1561C19.2847 9.17841 16.1039 5.35144 12.0028 5.35144Z%22 fill%3D%22%23FFC107%22%2F%3E%0D%3Cpath d%3D%22M20.689 12.7631C20.6516 11.6496 20.6258 10.8809 20.0357 10.293C19.4999 9.75861 18.7882 9.66144 18.4385 9.64062C18.9708 10.736 19.2458 11.9384 19.2426 13.1562L19.2375 14.7131C19.2361 15.0946 19.2031 15.4754 19.1391 15.8515C19.5482 15.7604 19.9211 15.5499 20.2106 15.2468C20.7527 14.6563 20.7274 13.9044 20.689 12.7631Z%22 fill%3D%22%23FFA000%22%2F%3E%0D%3Cpath d%3D%22M4.75733 14.713L4.75227 13.1561C4.74905 11.9383 5.02407 10.7358 5.55636 9.6405C5.20662 9.66132 4.49492 9.75891 3.95914 10.2929C3.36852 10.8808 3.3432 11.6495 3.3058 12.7629C3.26741 13.9043 3.24209 14.6562 3.78477 15.2471C4.07423 15.5502 4.44709 15.7606 4.85619 15.8518C4.79202 15.4755 4.75895 15.0947 4.75733 14.713Z%22 fill%3D%22%23FFA000%22%2F%3E%0D%3Cpath d%3D%22M11.9997 20.117C15.442 20.117 17.8919 17.602 17.5292 14.2108C17.4651 13.5901 17.1736 13.0151 16.7109 12.5964C16.2483 12.1777 15.6471 11.9449 15.0231 11.9429C13.5114 11.9472 13.5114 12.7867 11.9997 12.7867C10.4879 12.7867 10.4879 11.9472 8.97623 11.9429C8.35224 11.9449 7.75105 12.1777 7.28838 12.5964C6.82571 13.0151 6.53427 13.5901 6.47015 14.2108C6.10748 17.602 8.5573 20.117 11.9997 20.117Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M13.2975 16.1927C13.1772 16.077 13.0165 16.0129 12.8495 16.0138C12.6826 16.0147 12.5226 16.0807 12.4036 16.1977C12.3564 16.2583 12.2961 16.3074 12.2271 16.3412C12.1582 16.3749 12.0824 16.3925 12.0056 16.3926C11.9289 16.3927 11.8531 16.3753 11.784 16.3417C11.715 16.3081 11.6545 16.2592 11.6072 16.1987C11.4883 16.0845 11.3295 16.0213 11.1646 16.0224C10.9998 16.0235 10.8418 16.0889 10.7245 16.2047C10.6071 16.3205 10.5396 16.4776 10.5363 16.6424C10.5329 16.8073 10.5941 16.9669 10.7067 17.0873C10.874 17.2641 11.0752 17.4056 11.2982 17.5033C11.5212 17.601 11.7615 17.653 12.0049 17.6562C12.2485 17.6531 12.4889 17.6011 12.712 17.5034C12.9352 17.4057 13.1364 17.2642 13.3039 17.0873C13.4206 16.9673 13.4854 16.8061 13.4842 16.6387C13.483 16.4713 13.416 16.311 13.2975 16.1927Z%22 fill%3D%22white%22%2F%3E%0D%3Cpath d%3D%22M14.3906 13.5559C14.223 13.5565 14.0623 13.6233 13.9438 13.7419C13.8252 13.8604 13.7584 14.0211 13.7578 14.1887V15.1731C13.7584 15.3408 13.8252 15.5014 13.9438 15.6199C14.0623 15.7385 14.223 15.8054 14.3906 15.8059C14.4754 15.8047 14.5592 15.7868 14.637 15.7531C14.7148 15.7193 14.7852 15.6705 14.844 15.6094C14.9029 15.5484 14.949 15.4762 14.9798 15.3972C15.0106 15.3182 15.0254 15.2338 15.0234 15.149V14.2128C15.0254 14.128 15.0106 14.0436 14.9798 13.9646C14.949 13.8856 14.9029 13.8134 14.844 13.7524C14.7852 13.6913 14.7148 13.6425 14.637 13.6088C14.5592 13.575 14.4754 13.5571 14.3906 13.5559Z%22 fill%3D%22white%22%2F%3E%0D%3Cpath d%3D%22M9.60955 13.5559C9.52475 13.5571 9.44101 13.575 9.36319 13.6088C9.28537 13.6425 9.21501 13.6913 9.15616 13.7524C9.09732 13.8134 9.05117 13.8856 9.02037 13.9646C8.98957 14.0436 8.97474 14.128 8.97674 14.2128V15.149C8.97474 15.2338 8.98957 15.3182 9.02037 15.3972C9.05117 15.4762 9.09732 15.5484 9.15616 15.6094C9.21501 15.6705 9.28537 15.7193 9.36319 15.7531C9.44101 15.7868 9.52475 15.8047 9.60955 15.8059C9.77721 15.8054 9.93785 15.7385 10.0564 15.6199C10.175 15.5014 10.2418 15.3408 10.2424 15.1731V14.1887C10.2418 14.0211 10.175 13.8604 10.0564 13.7419C9.93785 13.6233 9.77721 13.5565 9.60955 13.5559Z%22 fill%3D%22white%22%2F%3E%0D%3Cpath d%3D%22M4.26562 6.12488C4.84811 6.12488 5.32031 5.65268 5.32031 5.07019C5.32031 4.4877 4.84811 4.0155 4.26562 4.0155C3.68314 4.0155 3.21094 4.4877 3.21094 5.07019C3.21094 5.65268 3.68314 6.12488 4.26562 6.12488Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M19.7344 6.12488C20.3169 6.12488 20.7891 5.65268 20.7891 5.07019C20.7891 4.4877 20.3169 4.0155 19.7344 4.0155C19.1519 4.0155 18.6797 4.4877 18.6797 5.07019C18.6797 5.65268 19.1519 6.12488 19.7344 6.12488Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M12.0029 5.35144C10.0285 5.35144 8.2689 6.24005 6.97754 7.60397C7.45022 8.47292 8.03935 9.27325 8.7286 9.98278C8.88554 10.142 9.07263 10.2684 9.27895 10.3545C9.48527 10.4406 9.70668 10.4847 9.93024 10.4843H14.0705C14.2941 10.4847 14.5155 10.4406 14.7218 10.3545C14.9281 10.2684 15.1152 10.142 15.2722 9.98278C15.9624 9.27223 16.5521 8.47059 17.0251 7.60017C15.734 6.23822 13.9757 5.35144 12.0029 5.35144Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M12 9.078C12.466 9.078 12.8438 8.70024 12.8438 8.23425C12.8438 7.76826 12.466 7.3905 12 7.3905C11.534 7.3905 11.1562 7.76826 11.1562 8.23425C11.1562 8.70024 11.534 9.078 12 9.078Z%22 fill%3D%22white%22%2F%3E%0D%3C%2Fg%3E%0D%3Cdefs%3E%0D%3CclipPath id%3D%22clip0_157_8748%22%3E%0D%3Crect width%3D%2218%22 height%3D%2218%22 fill%3D%22white%22 transform%3D%22translate(3 3.80457)%22%2F%3E%0D%3C%2FclipPath%3E%0D%3C%2Fdefs%3E%0D%3C%2Fsvg%3E%0D\")}.create-virtual-agent-container.show-mode .divider{border-bottom:1px solid #e6e8ec;margin-left:-14px;margin-right:-14px}.create-virtual-agent-container.show-mode:hover{box-shadow:0 0 4px 1px #007df9}.create-virtual-agent-container.show-mode .options{background-color:#fff;overflow:hidden}.create-virtual-agent-container.show-mode .options li:hover,.create-virtual-agent-container.show-mode .popover-options:hover,.create-virtual-agent-container.show-mode .popover-options.opened{background-color:#e6f2fe}.create-virtual-agent-container.show-mode .popover-options .options{box-shadow:0 3px 8px #0000003d;z-index:1}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.VnlpLabelTagComponent, selector: "vnlp-label-tag", inputs: ["text", "type"] }, { kind: "component", type: i3.VnlpPopoverComponent, selector: "vnlp-popover", inputs: ["options", "position"], outputs: ["onOptionClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCreateVirtualAgentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-create-virtual-agent', template: "<button\r\n  [ngClass]=\"{\r\n    'create-virtual-agent-container w-[260px] rounded-xl transition-all ease-in-out duration-200 cursor-pointer': true,\r\n    'create-mode': mode === 'create',\r\n    'show-mode': mode === 'show'\r\n  }\"\r\n  (click)=\"mode === 'create' && handleCreate()\"\r\n  [disabled]=\"disabled\"\r\n>\r\n  <div\r\n    *ngIf=\"mode === 'create'\"\r\n    class=\"w-full min-h-full flex flex-col justify-center items-center\"\r\n  >\r\n    <i class=\"icon icon-vnlp-icon-add-linear\"></i>\r\n    <span class=\"mt-2 text-neutral-3 text-sm font-medium\">{{ label }}</span>\r\n  </div>\r\n  <div *ngIf=\"mode === 'show'\" class=\"w-full min-h-full flex flex-col p-[14px]\">\r\n    <div class=\"flex justify-between\">\r\n      <span class=\"text-sm text-bold text-neutral-2\">{{ title }}</span>\r\n      <i\r\n        [ngClass]=\"{\r\n          'icon icon-voice': type === 'voice',\r\n          'icon icon-chat': type === 'chat'\r\n        }\"\r\n      ></i>\r\n    </div>\r\n    <div\r\n      class=\"description mb-3 text-neutral-4 text-sm w-[190px] h-[50px] text-left\"\r\n    >\r\n      {{ description }}\r\n    </div>\r\n    <div class=\"divider\"></div>\r\n    <div class=\"pt-[12px] flex justify-between items-center\">\r\n      <vnlp-label-tag [type]=\"labelType\" [text]=\"labelText\"></vnlp-label-tag>\r\n      <vnlp-popover\r\n        (onOptionClick)=\"onClickOption($event)\"\r\n        [options]=\"[\r\n          {\r\n            label: 'option 1',\r\n            key: 'option 1'\r\n          },\r\n          {\r\n            label: 'option 2',\r\n            key: 'option 2'\r\n          },\r\n          {\r\n            label: 'option 3',\r\n            key: 'option 3'\r\n          }\r\n        ]\"\r\n        position=\"bottom left\"\r\n      ></vnlp-popover>\r\n    </div>\r\n  </div>\r\n</button>\r\n", styles: [".create-virtual-agent-container{background-color:#fff;min-height:150px;box-sizing:border-box}.create-virtual-agent-container:disabled.create-mode:hover{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23E6E8ECFF' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.create-virtual-agent-container:disabled.show-mode:hover{box-shadow:none}.create-virtual-agent-container:disabled.show-mode .popover-options:hover{background-color:inherit}.create-virtual-agent-container.create-mode{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23E6E8ECFF' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.create-virtual-agent-container.create-mode:hover{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23007DF9FF' stroke-width='4' stroke-dasharray='4%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.create-virtual-agent-container.show-mode{box-shadow:0 1px 16px #dcaaaa0d}.create-virtual-agent-container.show-mode .icon-voice{height:24px;width:24px;background-image:url(\"data:image/svg+xml,%3Csvg width%3D%2224%22 height%3D%2225%22 viewBox%3D%220 0 24 25%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%3Crect y%3D%220.804565%22 width%3D%2224%22 height%3D%2224%22 rx%3D%224%22 fill%3D%22%23E6F2FE%22%2F%3E%0D%3Cpath d%3D%22M12.2502 15.5638C10.6524 15.5638 9.35742 14.2686 9.35742 12.6711V5.69732C9.35742 4.09982 10.6524 2.80457 12.2502 2.80457C13.8479 2.80457 15.1429 4.09982 15.1429 5.69732V12.6711C15.1429 14.2688 13.8479 15.5638 12.2502 15.5638Z%22 fill%3D%22%234183F3%22%2F%3E%0D%3Cpath d%3D%22M11.1133 18.9173H13.3853V22.8045H11.1133V18.9173Z%22 fill%3D%22%2335A551%22%2F%3E%0D%3Cpath d%3D%22M17.2254 12.6623C17.2254 15.4108 14.9979 17.6648 12.2492 17.6648C10.9772 17.6648 9.81694 17.1818 8.93719 16.3905L7.33594 17.9918C8.62769 19.1833 10.3534 19.9115 12.2494 19.9115C16.2529 19.9115 19.4987 16.6663 19.4987 12.6623H17.2254Z%22 fill%3D%22%23E64236%22%2F%3E%0D%3Cpath d%3D%22M7.273 12.6623H5C5 14.77 5.89975 16.6673 7.33575 17.992L8.937 16.3908C7.916 15.4723 7.273 14.1388 7.273 12.6623Z%22 fill%3D%22%23F7B809%22%2F%3E%0D%3C%2Fsvg%3E%0D\")}.create-virtual-agent-container.show-mode .icon-chat{height:24px;width:24px;background-image:url(\"data:image/svg+xml,%3Csvg width%3D%2224%22 height%3D%2225%22 viewBox%3D%220 0 24 25%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%3Crect y%3D%220.804565%22 width%3D%2224%22 height%3D%2224%22 rx%3D%224%22 fill%3D%22%23FFF1E6%22%2F%3E%0D%3Cg clip-path%3D%22url(%23clip0_157_8748)%22%3E%0D%3Cpath d%3D%22M4.47656 10.6952V5.77332C4.47656 5.71737 4.45434 5.66372 4.41478 5.62416C4.37522 5.5846 4.32157 5.56238 4.26562 5.56238C4.20968 5.56238 4.15603 5.5846 4.11647 5.62416C4.07691 5.66372 4.05469 5.71737 4.05469 5.77332V10.6952C4.05469 10.7511 4.07691 10.8048 4.11647 10.8443C4.15603 10.8839 4.20968 10.9061 4.26562 10.9061C4.32157 10.9061 4.37522 10.8839 4.41478 10.8443C4.45434 10.8048 4.47656 10.7511 4.47656 10.6952Z%22 fill%3D%22%23212121%22%2F%3E%0D%3Cpath d%3D%22M19.7344 5.56238C19.6784 5.56238 19.6248 5.5846 19.5852 5.62416C19.5457 5.66372 19.5234 5.71737 19.5234 5.77332V10.6952C19.5234 10.7511 19.5457 10.8048 19.5852 10.8443C19.6248 10.8839 19.6784 10.9061 19.7344 10.9061C19.7903 10.9061 19.844 10.8839 19.8835 10.8443C19.9231 10.8048 19.9453 10.7511 19.9453 10.6952V5.77332C19.9453 5.71737 19.9231 5.66372 19.8835 5.62416C19.844 5.5846 19.7903 5.56238 19.7344 5.56238Z%22 fill%3D%22%23212121%22%2F%3E%0D%3Cpath d%3D%22M12.0028 5.35144C7.9018 5.35144 4.72142 9.17841 4.75813 13.1561L4.76319 14.7128C4.76914 16.5398 5.49908 18.2899 6.79305 19.5797C8.08702 20.8694 9.8395 21.5936 11.6665 21.5936H12.3392C14.1662 21.5936 15.9187 20.8694 17.2126 19.5797C18.5066 18.2899 19.2365 16.5398 19.2425 14.7128L19.2476 13.1561C19.2847 9.17841 16.1039 5.35144 12.0028 5.35144Z%22 fill%3D%22%23FFC107%22%2F%3E%0D%3Cpath d%3D%22M20.689 12.7631C20.6516 11.6496 20.6258 10.8809 20.0357 10.293C19.4999 9.75861 18.7882 9.66144 18.4385 9.64062C18.9708 10.736 19.2458 11.9384 19.2426 13.1562L19.2375 14.7131C19.2361 15.0946 19.2031 15.4754 19.1391 15.8515C19.5482 15.7604 19.9211 15.5499 20.2106 15.2468C20.7527 14.6563 20.7274 13.9044 20.689 12.7631Z%22 fill%3D%22%23FFA000%22%2F%3E%0D%3Cpath d%3D%22M4.75733 14.713L4.75227 13.1561C4.74905 11.9383 5.02407 10.7358 5.55636 9.6405C5.20662 9.66132 4.49492 9.75891 3.95914 10.2929C3.36852 10.8808 3.3432 11.6495 3.3058 12.7629C3.26741 13.9043 3.24209 14.6562 3.78477 15.2471C4.07423 15.5502 4.44709 15.7606 4.85619 15.8518C4.79202 15.4755 4.75895 15.0947 4.75733 14.713Z%22 fill%3D%22%23FFA000%22%2F%3E%0D%3Cpath d%3D%22M11.9997 20.117C15.442 20.117 17.8919 17.602 17.5292 14.2108C17.4651 13.5901 17.1736 13.0151 16.7109 12.5964C16.2483 12.1777 15.6471 11.9449 15.0231 11.9429C13.5114 11.9472 13.5114 12.7867 11.9997 12.7867C10.4879 12.7867 10.4879 11.9472 8.97623 11.9429C8.35224 11.9449 7.75105 12.1777 7.28838 12.5964C6.82571 13.0151 6.53427 13.5901 6.47015 14.2108C6.10748 17.602 8.5573 20.117 11.9997 20.117Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M13.2975 16.1927C13.1772 16.077 13.0165 16.0129 12.8495 16.0138C12.6826 16.0147 12.5226 16.0807 12.4036 16.1977C12.3564 16.2583 12.2961 16.3074 12.2271 16.3412C12.1582 16.3749 12.0824 16.3925 12.0056 16.3926C11.9289 16.3927 11.8531 16.3753 11.784 16.3417C11.715 16.3081 11.6545 16.2592 11.6072 16.1987C11.4883 16.0845 11.3295 16.0213 11.1646 16.0224C10.9998 16.0235 10.8418 16.0889 10.7245 16.2047C10.6071 16.3205 10.5396 16.4776 10.5363 16.6424C10.5329 16.8073 10.5941 16.9669 10.7067 17.0873C10.874 17.2641 11.0752 17.4056 11.2982 17.5033C11.5212 17.601 11.7615 17.653 12.0049 17.6562C12.2485 17.6531 12.4889 17.6011 12.712 17.5034C12.9352 17.4057 13.1364 17.2642 13.3039 17.0873C13.4206 16.9673 13.4854 16.8061 13.4842 16.6387C13.483 16.4713 13.416 16.311 13.2975 16.1927Z%22 fill%3D%22white%22%2F%3E%0D%3Cpath d%3D%22M14.3906 13.5559C14.223 13.5565 14.0623 13.6233 13.9438 13.7419C13.8252 13.8604 13.7584 14.0211 13.7578 14.1887V15.1731C13.7584 15.3408 13.8252 15.5014 13.9438 15.6199C14.0623 15.7385 14.223 15.8054 14.3906 15.8059C14.4754 15.8047 14.5592 15.7868 14.637 15.7531C14.7148 15.7193 14.7852 15.6705 14.844 15.6094C14.9029 15.5484 14.949 15.4762 14.9798 15.3972C15.0106 15.3182 15.0254 15.2338 15.0234 15.149V14.2128C15.0254 14.128 15.0106 14.0436 14.9798 13.9646C14.949 13.8856 14.9029 13.8134 14.844 13.7524C14.7852 13.6913 14.7148 13.6425 14.637 13.6088C14.5592 13.575 14.4754 13.5571 14.3906 13.5559Z%22 fill%3D%22white%22%2F%3E%0D%3Cpath d%3D%22M9.60955 13.5559C9.52475 13.5571 9.44101 13.575 9.36319 13.6088C9.28537 13.6425 9.21501 13.6913 9.15616 13.7524C9.09732 13.8134 9.05117 13.8856 9.02037 13.9646C8.98957 14.0436 8.97474 14.128 8.97674 14.2128V15.149C8.97474 15.2338 8.98957 15.3182 9.02037 15.3972C9.05117 15.4762 9.09732 15.5484 9.15616 15.6094C9.21501 15.6705 9.28537 15.7193 9.36319 15.7531C9.44101 15.7868 9.52475 15.8047 9.60955 15.8059C9.77721 15.8054 9.93785 15.7385 10.0564 15.6199C10.175 15.5014 10.2418 15.3408 10.2424 15.1731V14.1887C10.2418 14.0211 10.175 13.8604 10.0564 13.7419C9.93785 13.6233 9.77721 13.5565 9.60955 13.5559Z%22 fill%3D%22white%22%2F%3E%0D%3Cpath d%3D%22M4.26562 6.12488C4.84811 6.12488 5.32031 5.65268 5.32031 5.07019C5.32031 4.4877 4.84811 4.0155 4.26562 4.0155C3.68314 4.0155 3.21094 4.4877 3.21094 5.07019C3.21094 5.65268 3.68314 6.12488 4.26562 6.12488Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M19.7344 6.12488C20.3169 6.12488 20.7891 5.65268 20.7891 5.07019C20.7891 4.4877 20.3169 4.0155 19.7344 4.0155C19.1519 4.0155 18.6797 4.4877 18.6797 5.07019C18.6797 5.65268 19.1519 6.12488 19.7344 6.12488Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M12.0029 5.35144C10.0285 5.35144 8.2689 6.24005 6.97754 7.60397C7.45022 8.47292 8.03935 9.27325 8.7286 9.98278C8.88554 10.142 9.07263 10.2684 9.27895 10.3545C9.48527 10.4406 9.70668 10.4847 9.93024 10.4843H14.0705C14.2941 10.4847 14.5155 10.4406 14.7218 10.3545C14.9281 10.2684 15.1152 10.142 15.2722 9.98278C15.9624 9.27223 16.5521 8.47059 17.0251 7.60017C15.734 6.23822 13.9757 5.35144 12.0029 5.35144Z%22 fill%3D%22%23424242%22%2F%3E%0D%3Cpath d%3D%22M12 9.078C12.466 9.078 12.8438 8.70024 12.8438 8.23425C12.8438 7.76826 12.466 7.3905 12 7.3905C11.534 7.3905 11.1562 7.76826 11.1562 8.23425C11.1562 8.70024 11.534 9.078 12 9.078Z%22 fill%3D%22white%22%2F%3E%0D%3C%2Fg%3E%0D%3Cdefs%3E%0D%3CclipPath id%3D%22clip0_157_8748%22%3E%0D%3Crect width%3D%2218%22 height%3D%2218%22 fill%3D%22white%22 transform%3D%22translate(3 3.80457)%22%2F%3E%0D%3C%2FclipPath%3E%0D%3C%2Fdefs%3E%0D%3C%2Fsvg%3E%0D\")}.create-virtual-agent-container.show-mode .divider{border-bottom:1px solid #e6e8ec;margin-left:-14px;margin-right:-14px}.create-virtual-agent-container.show-mode:hover{box-shadow:0 0 4px 1px #007df9}.create-virtual-agent-container.show-mode .options{background-color:#fff;overflow:hidden}.create-virtual-agent-container.show-mode .options li:hover,.create-virtual-agent-container.show-mode .popover-options:hover,.create-virtual-agent-container.show-mode .popover-options.opened{background-color:#e6f2fe}.create-virtual-agent-container.show-mode .popover-options .options{box-shadow:0 3px 8px #0000003d;z-index:1}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], mode: [{
                type: Input
            }], disabled: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], labelText: [{
                type: Input
            }], labelType: [{
                type: Input
            }], type: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onOptionClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1jcmVhdGUtdmlydHVhbC1hZ2VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1jcmVhdGUtdmlydHVhbC1hZ2VudC9zcmMvdm5scC1jcmVhdGUtdmlydHVhbC1hZ2VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1jcmVhdGUtdmlydHVhbC1hZ2VudC9zcmMvdm5scC1jcmVhdGUtdmlydHVhbC1hZ2VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVUvRSxNQUFNLE9BQU8sK0JBQStCO0lBYzFDO1FBYlMsVUFBSyxHQUFXLHNCQUFzQixDQUFDO1FBQ3ZDLFNBQUksR0FBUyxRQUFRLENBQUM7UUFDdEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsY0FBUyxHQUFjLE1BQU0sQ0FBQztRQUM5QixTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztJQUVkLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7SUFFYixZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7NkhBeEJVLCtCQUErQjtpSEFBL0IsK0JBQStCLDRTQ1Y1Qyw2eURBdURBOzRGRDdDYSwrQkFBK0I7a0JBTDNDLFNBQVM7K0JBQ0UsMkJBQTJCOzBFQUs1QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG50eXBlIE1vZGUgPSAnY3JlYXRlJyB8ICdzaG93JztcclxudHlwZSBMYWJlbFR5cGUgPSAnZ3JheScgfCAnb3JhbmdlJyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ2dyZWVuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndm5scC1jcmVhdGUtdmlydHVhbC1hZ2VudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZubHAtY3JlYXRlLXZpcnR1YWwtYWdlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZubHAtY3JlYXRlLXZpcnR1YWwtYWdlbnQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZubHBDcmVhdGVWaXJ0dWFsQWdlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnY3JlYXRlIHZpcnR1YWwgYWdlbnQnO1xyXG4gIEBJbnB1dCgpIG1vZGU6IE1vZGUgPSAnY3JlYXRlJztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnVGl0bGUnO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnRGVzY3JpcHRpb24nO1xyXG4gIEBJbnB1dCgpIGxhYmVsVGV4dDogc3RyaW5nID0gJ2xhYmVsJztcclxuICBASW5wdXQoKSBsYWJlbFR5cGU6IExhYmVsVHlwZSA9ICdncmF5JztcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAndm9pY2UnO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk9wdGlvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzaG93T3B0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgaGFuZGxlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPcHRpb24oZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uT3B0aW9uQ2xpY2suZW1pdChkYXRhKTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdjcmVhdGUtdmlydHVhbC1hZ2VudC1jb250YWluZXIgdy1bMjYwcHhdIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwIGN1cnNvci1wb2ludGVyJzogdHJ1ZSxcclxuICAgICdjcmVhdGUtbW9kZSc6IG1vZGUgPT09ICdjcmVhdGUnLFxyXG4gICAgJ3Nob3ctbW9kZSc6IG1vZGUgPT09ICdzaG93J1xyXG4gIH1cIlxyXG4gIChjbGljayk9XCJtb2RlID09PSAnY3JlYXRlJyAmJiBoYW5kbGVDcmVhdGUoKVwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuPlxyXG4gIDxkaXZcclxuICAgICpuZ0lmPVwibW9kZSA9PT0gJ2NyZWF0ZSdcIlxyXG4gICAgY2xhc3M9XCJ3LWZ1bGwgbWluLWgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uIGljb24tdm5scC1pY29uLWFkZC1saW5lYXJcIj48L2k+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm10LTIgdGV4dC1uZXV0cmFsLTMgdGV4dC1zbSBmb250LW1lZGl1bVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJtb2RlID09PSAnc2hvdydcIiBjbGFzcz1cInctZnVsbCBtaW4taC1mdWxsIGZsZXggZmxleC1jb2wgcC1bMTRweF1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gdGV4dC1ib2xkIHRleHQtbmV1dHJhbC0yXCI+e3sgdGl0bGUgfX08L3NwYW4+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgJ2ljb24gaWNvbi12b2ljZSc6IHR5cGUgPT09ICd2b2ljZScsXHJcbiAgICAgICAgICAnaWNvbiBpY29uLWNoYXQnOiB0eXBlID09PSAnY2hhdCdcclxuICAgICAgICB9XCJcclxuICAgICAgPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImRlc2NyaXB0aW9uIG1iLTMgdGV4dC1uZXV0cmFsLTQgdGV4dC1zbSB3LVsxOTBweF0gaC1bNTBweF0gdGV4dC1sZWZ0XCJcclxuICAgID5cclxuICAgICAge3sgZGVzY3JpcHRpb24gfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwdC1bMTJweF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDx2bmxwLWxhYmVsLXRhZyBbdHlwZV09XCJsYWJlbFR5cGVcIiBbdGV4dF09XCJsYWJlbFRleHRcIj48L3ZubHAtbGFiZWwtdGFnPlxyXG4gICAgICA8dm5scC1wb3BvdmVyXHJcbiAgICAgICAgKG9uT3B0aW9uQ2xpY2spPVwib25DbGlja09wdGlvbigkZXZlbnQpXCJcclxuICAgICAgICBbb3B0aW9uc109XCJbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnb3B0aW9uIDEnLFxyXG4gICAgICAgICAgICBrZXk6ICdvcHRpb24gMSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnb3B0aW9uIDInLFxyXG4gICAgICAgICAgICBrZXk6ICdvcHRpb24gMidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnb3B0aW9uIDMnLFxyXG4gICAgICAgICAgICBrZXk6ICdvcHRpb24gMydcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXCJcclxuICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSBsZWZ0XCJcclxuICAgICAgPjwvdm5scC1wb3BvdmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvYnV0dG9uPlxyXG4iXX0=