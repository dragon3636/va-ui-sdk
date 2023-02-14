import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from '@va/ui-sdk/button';
import { CardComponent } from '@va/ui-sdk/card';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
