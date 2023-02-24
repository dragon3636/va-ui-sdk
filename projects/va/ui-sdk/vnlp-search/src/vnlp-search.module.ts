import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@va/ui-sdk/i18n';
import { VnlpSearchComponent } from './vnlp-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VnlpSearchComponent],
  imports: [CommonModule, I18nModule, FormsModule],
  exports: [VnlpSearchComponent],
})
export class VnlpSearchModule {}
