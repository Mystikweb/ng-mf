import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PageBaseComponent, UserService } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends PageBaseComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);
  private _authentication = inject(UserService);

  get loginForm(): FormGroup { return this._loginForm; }
  private _loginForm!: FormGroup;

  get loginError(): string | undefined { return this._loginError; }
  private _loginError?: string;

  get requestActive(): boolean { return this._requestActive; }
  private _requestActive = false;

  ngOnInit(): void {
    this._pageId = 'LOGIN PAGE';
    this._alignCenter = true;

    this._loginForm = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  save(): void {
    const { username, password } = this._loginForm.getRawValue();

    this._authentication.checkCredentials(username, password);
    this._router.navigate(['home']);
  }
}