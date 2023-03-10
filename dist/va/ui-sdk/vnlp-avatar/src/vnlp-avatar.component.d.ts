import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
declare type Status = 'offline' | 'online';
export declare class VnlpAvatarComponent implements OnInit {
    imgUrl: string;
    status: Status;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpAvatarComponent, "vnlp-avatar", never, { "imgUrl": "imgUrl"; "status": "status"; }, {}, never, never, false>;
}
export {};
