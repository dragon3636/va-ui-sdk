import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vnlp-file-uploader',
  templateUrl: './vnlp-file-uploader.component.html',
  styleUrls: ['./vnlp-file-uploader.component.scss'],
})
export class VnlpFileUploaderComponent {
  @Output() filesSelected = new EventEmitter<File[]>();
  highlightDropzone = false;
  fileList: File[] = [];

  handleFileInput({ files }: any) {
    this.fileList = Array.from(files);
    this.filesSelected.emit(this.fileList);
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const dataTransfer = event.dataTransfer;
    if (dataTransfer) {
      this.fileList = Array.from(dataTransfer.files);
    }
    this.highlightDropzone = false;
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  formatSize(bytes: number): string {
    const kb = bytes / 1024;
    const mb = kb / 1024;
    const gb = mb / 1024;
    if (gb >= 1) {
      return gb.toFixed(2) + ' GB';
    } else if (mb >= 1) {
      return mb.toFixed(2) + ' MB';
    } else if (kb >= 1) {
      return kb.toFixed(2) + ' KB';
    } else {
      return bytes + ' bytes';
    }
  }
}
