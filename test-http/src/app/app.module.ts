import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItuneService } from './itune.service';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ],
  providers: [ItuneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
