import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { ViewModule } from './view/view.module';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { GiphyService } from './services/giphy.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ViewModule,
    // -- Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [AuthService, ValidateService, GiphyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
