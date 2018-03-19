import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { merge } from 'rxjs/observable/merge';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  data: object = {
    email: '',
    password: ''
  }
  emailCtrl: FormControl
  passwordCtrl: FormControl
  private isValidEmail: Observable<boolean>
  private isValidPassword: Observable<boolean>
  isFlag: boolean

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    private validateService: ValidateService,
    private authService: AuthService) {

    this.emailCtrl = new FormControl()
    this.passwordCtrl = new FormControl()
    this.listen()
  }

  listen() {
    this.isValidEmail = this.emailCtrl.valueChanges
      .map(next => this.validateService.isValidEmail(next))

    this.isValidPassword = this.passwordCtrl.valueChanges
      .map(next => this.validateService.isValidPassword(next))

    combineLatest(this.isValidEmail, this.isValidPassword, (a, b) => {
      return a && b
    }).subscribe(next => {
      this.isFlag = next
    })
  }

  onNoClick(): void {
    this.dialogRef.close(this.data)
  }

  doLogin(): void {
    this.authService.setLoginWithStatus(true)
    this.dialogRef.close(this.data)
  }

  ngOnInit() {

  }

}
