import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VnlpFileUploaderComponent {
    constructor() {
        this.multiple = true;
        this.onChange = new EventEmitter();
        this.highlightDropzone = false;
        this.fileList = [];
    }
    handleFileInput({ files }) {
        this.fileList = Array.from(files);
        const exportFile = this.fileList.length === 1 ? this.fileList[0] : this.fileList;
        this.onChange.emit(exportFile);
    }
    handleDrop(event) {
        event.preventDefault();
        const dataTransfer = event.dataTransfer;
        if (dataTransfer) {
            this.fileList = Array.from(dataTransfer.files);
        }
        this.highlightDropzone = false;
    }
    handleDragOver(event) {
        event.target.classList.add('on-drag');
        event.preventDefault();
    }
    handleDragLeave(event) {
        event.target.classList.remove('on-drag');
        event.preventDefault();
    }
    formatSize(bytes) {
        const kb = bytes / 1024;
        const mb = bytes / 1024 / 1024;
        const gb = mb / 1024;
        if (kb < 100) {
            return kb.toFixed(0) + ' Kb';
        }
        else if (gb >= 1) {
            return gb.toFixed(1) + ' Gb';
        }
        else {
            return mb.toFixed(1) + ' Mb';
        }
    }
    deleteFile(file) {
        this.fileList = this.fileList.filter((f) => f.name !== file.name);
    }
}
VnlpFileUploaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpFileUploaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpFileUploaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpFileUploaderComponent, selector: "vnlp-file-uploader", inputs: { multiple: "multiple" }, outputs: { onChange: "onChange" }, ngImport: i0, template: "<label\r\n  for=\"fileInput\"\r\n  class=\"file-uploader-container\"\r\n  (drop)=\"handleDrop($event)\"\r\n  (dragover)=\"handleDragOver($event)\"\r\n  (dragleave)=\"handleDragLeave($event)\"\r\n>\r\n  <i class=\"icon icon-vnlp-icon-document-upload-linear\"></i>\r\n  <p class=\"file-label-text\">Drop file here or</p>\r\n  <span class=\"file-label\">Browse</span>\r\n  <input\r\n    type=\"file\"\r\n    id=\"fileInput\"\r\n    [multiple]=\"multiple\"\r\n    (change)=\"handleFileInput($event.target)\"\r\n    class=\"hidden\"\r\n  />\r\n</label>\r\n<div class=\"file-list\">\r\n  <div *ngFor=\"let file of fileList\" class=\"file-item\">\r\n    <span class=\"file-icon\">\r\n      <i class=\"icon-vnlp-icon-file-erase-line\"></i>\r\n    </span>\r\n    <span class=\"file-name\">{{ file.name }}</span>\r\n    <span class=\"file-size\">{{ formatSize(file.size) }}</span>\r\n    <span (click)=\"deleteFile(file)\" class=\"delete-icon\">\r\n      <i class=\"icon icon-vnlp-icon-close-circle-linear\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n", styles: [".file-uploader-container{padding:32px;background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23B1B5C3FF' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:10px;width:172px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#777e90;transition:all .3s ease-in-out;cursor:pointer;background-color:#fff}.file-uploader-container:hover{box-shadow:0 0 1px 3px #e6e8ec}.file-uploader-container.on-drag{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23353945FF' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.file-uploader-container.on-error{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FB1B3CFF' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.file-uploader-container .file-label-text{font-size:14px;margin-bottom:4px}.file-uploader-container .file-label{font-size:14px;color:#007df9;text-decoration:underline;text-underline-offset:2px;cursor:pointer}.file-list{min-width:92px;margin-top:36px}.file-list .file-item{display:flex;align-items:center;margin-bottom:8px;padding:12px 14px;background-color:#fff;border-radius:10px;border:1px solid #e6e8ec}.file-list .file-item .file-icon{color:#007df9;margin-right:8px}.file-list .file-item .file-name{font-size:14px;color:#141416;margin-right:16px;max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-list .file-item .file-size{font-size:14px;color:#777e90;margin-left:auto}.file-list .file-item .delete-icon{cursor:pointer;color:#777e90}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpFileUploaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-file-uploader', template: "<label\r\n  for=\"fileInput\"\r\n  class=\"file-uploader-container\"\r\n  (drop)=\"handleDrop($event)\"\r\n  (dragover)=\"handleDragOver($event)\"\r\n  (dragleave)=\"handleDragLeave($event)\"\r\n>\r\n  <i class=\"icon icon-vnlp-icon-document-upload-linear\"></i>\r\n  <p class=\"file-label-text\">Drop file here or</p>\r\n  <span class=\"file-label\">Browse</span>\r\n  <input\r\n    type=\"file\"\r\n    id=\"fileInput\"\r\n    [multiple]=\"multiple\"\r\n    (change)=\"handleFileInput($event.target)\"\r\n    class=\"hidden\"\r\n  />\r\n</label>\r\n<div class=\"file-list\">\r\n  <div *ngFor=\"let file of fileList\" class=\"file-item\">\r\n    <span class=\"file-icon\">\r\n      <i class=\"icon-vnlp-icon-file-erase-line\"></i>\r\n    </span>\r\n    <span class=\"file-name\">{{ file.name }}</span>\r\n    <span class=\"file-size\">{{ formatSize(file.size) }}</span>\r\n    <span (click)=\"deleteFile(file)\" class=\"delete-icon\">\r\n      <i class=\"icon icon-vnlp-icon-close-circle-linear\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n", styles: [".file-uploader-container{padding:32px;background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23B1B5C3FF' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:10px;width:172px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#777e90;transition:all .3s ease-in-out;cursor:pointer;background-color:#fff}.file-uploader-container:hover{box-shadow:0 0 1px 3px #e6e8ec}.file-uploader-container.on-drag{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23353945FF' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.file-uploader-container.on-error{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FB1B3CFF' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")}.file-uploader-container .file-label-text{font-size:14px;margin-bottom:4px}.file-uploader-container .file-label{font-size:14px;color:#007df9;text-decoration:underline;text-underline-offset:2px;cursor:pointer}.file-list{min-width:92px;margin-top:36px}.file-list .file-item{display:flex;align-items:center;margin-bottom:8px;padding:12px 14px;background-color:#fff;border-radius:10px;border:1px solid #e6e8ec}.file-list .file-item .file-icon{color:#007df9;margin-right:8px}.file-list .file-item .file-name{font-size:14px;color:#141416;margin-right:16px;max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-list .file-item .file-size{font-size:14px;color:#777e90;margin-left:auto}.file-list .file-item .delete-icon{cursor:pointer;color:#777e90}\n"] }]
        }], propDecorators: { multiple: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class VnlpFileUploaderModule {
}
VnlpFileUploaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpFileUploaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpFileUploaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpFileUploaderModule, declarations: [VnlpFileUploaderComponent], imports: [CommonModule], exports: [VnlpFileUploaderComponent] });
VnlpFileUploaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpFileUploaderModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpFileUploaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpFileUploaderComponent],
                    imports: [CommonModule],
                    exports: [VnlpFileUploaderComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpFileUploaderComponent, VnlpFileUploaderModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-file-uploader.mjs.map
