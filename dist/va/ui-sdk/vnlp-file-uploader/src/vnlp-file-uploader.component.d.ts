import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VnlpFileUploaderComponent {
    multiple: boolean;
    onChange: EventEmitter<any>;
    highlightDropzone: boolean;
    fileList: File[];
    handleFileInput({ files }: any): void;
    handleDrop(event: DragEvent): void;
    handleDragOver(event: any): void;
    handleDragLeave(event: any): void;
    formatSize(bytes: number): string;
    deleteFile(file: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VnlpFileUploaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VnlpFileUploaderComponent, "vnlp-file-uploader", never, { "multiple": "multiple"; }, { "onChange": "onChange"; }, never, never, false>;
}
