import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QRComponent } from './qr.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

import { AppComponent} from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {QAComponent} from './qa/qa.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: QRComponent },
  { path: 'qa', component: QAComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QRComponent,
    QAComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ZXingScannerModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
