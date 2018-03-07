import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { NextDetailComponent } from './next-detail/next-detail.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { 
    path: 'details', component: DetailComponent,
    canActivate:[AuthGuardService]
  },
    {
      path: 'next-details/:param1', component: NextDetailComponent
    }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
