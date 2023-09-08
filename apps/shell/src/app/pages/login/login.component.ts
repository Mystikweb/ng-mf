import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PageBaseComponent, UserCredentials, UserLoginActions, selectLoginPageError, selectLoginPagePending } from '@ng-mf/shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ng-mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends PageBaseComponent implements OnInit {
  get loginForm(): FormGroup {
    return this._loginForm;
  }
  private _loginForm!: FormGroup;

  get loginError(): string | null {
    return this._loginError;
  }
  private _loginError: string | null = null;

  get requestActive(): boolean {
    return this._requestActive;
  }
  private _requestActive = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this._pageId = 'LOGIN PAGE';
    this._alignCenter = true;

    this._loginForm = this._formBuilder.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this._store.select(selectLoginPagePending).subscribe(isPending => this._requestActive = isPending);
    this._store.select(selectLoginPageError).subscribe(error => this._loginError = error);
  }

  save(): void {
    const credentials = this._loginForm.getRawValue() as UserCredentials;
    this._store.dispatch(UserLoginActions.login({ credentials }));
  }
}
