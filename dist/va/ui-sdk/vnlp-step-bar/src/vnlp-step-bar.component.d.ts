import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface StepList {
    step: number;
    name: string;
}
export declare class VnlpStepBarComponent implements OnInit {
    currentStep: number;
    stepList: StepList[];
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpStepBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpStepBarComponent, "vnlp-step-bar", never, { "currentStep": "currentStep"; "stepList": "stepList"; }, {}, never, never, false>;
}
