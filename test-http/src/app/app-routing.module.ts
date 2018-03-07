import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: 'details', component: HelloComponent }
];

// export const routes:Routes = [
//   {
//       path: '',
//       children: [
//           {
//               path: 'details',
//               component: HelloComponent
//           },
//           {
//               path: 'details2',
//               component: HelloComponent
//           }
//       ]    
//   }

// ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
