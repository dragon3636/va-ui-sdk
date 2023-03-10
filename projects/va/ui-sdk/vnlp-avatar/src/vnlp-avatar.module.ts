import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VnlpAvatarComponent } from './vnlp-avatar.component';

@NgModule({
  declarations: [VnlpAvatarComponent],
  imports: [CommonModule],
  exports: [VnlpAvatarComponent, CommonModule],
})
export class VnlpAvatarModule {}
