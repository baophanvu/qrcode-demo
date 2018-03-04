import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgxZxingModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxZxingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
