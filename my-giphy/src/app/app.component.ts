import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/skip';
import { LoginDialogComponent } from './view/login-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  email: string
  password: string
  // cards: string [] = [
  //   "http://placehold.it/200x100",
  //   "http://placehold.it/200x100",
  //   "http://placehold.it/200x200",
  //   "http://placehold.it/200x300",
  //   "http://placehold.it/200x100",
  //   "http://placehold.it/200x200"
  // ]

  constructor(private authService: AuthService, public dialog: MatDialog) {

    this.authService.isLogin.skip(2).subscribe(next => {
      if (!next) {
        this.openPopupLogin()
      }
    })
  }

  openPopupLogin() {
    let dialogRef = this.dialog.open(LoginDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    })
  }
}
