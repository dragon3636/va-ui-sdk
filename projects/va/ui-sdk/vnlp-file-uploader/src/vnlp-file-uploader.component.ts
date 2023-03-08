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

  handleDragOver(event: any) {
    event.target.classList.add('on-drag');
    event.preventDefault();
  }

  handleDragLeave(event: any) {
    event.target.classList.remove('on-drag');
    event.preventDefault();
  }

  formatSize(bytes: number): string {
    const kb = bytes / 1024;
    const mb = bytes / 1024 / 1024;
    const gb = mb / 1024;
    console.log(bytes / 1024);
    if (kb < 100) {
      return kb.toFixed(0) + ' Kb';
    } else if (gb >= 1) {
      return gb.toFixed(1) + ' Gb';
    } else {
      return mb.toFixed(1) + ' Mb';
    }
  }

  deleteFile(file: any) {
    this.fileList = this.fileList.filter((f) => f.name !== file.name);
  }
}
