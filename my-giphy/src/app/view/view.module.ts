import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrendingComponent } from './trending.component';
import { SearchComponent } from './search.component';
import { LoginDialogComponent } from './login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule

} from '@angular/material';
import { HttpModule } from '@angular/http';
import { GifViewrComponent } from './gif-viewr/gif-viewr.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    HomeComponent,
    TrendingComponent,
    SearchComponent,
    LoginDialogComponent,
    GifViewrComponent
  ],
  entryComponents: [LoginDialogComponent],
})
export class ViewModule { }
