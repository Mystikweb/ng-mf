import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, exhaustMap, map, of, tap } from 'rxjs';

import { AuthService } from '../services';
import { AuthActions, UserLoginActions } from '../actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(UserLoginActions.login),
      map((action) => action.credentials),
      exhaustMap((credentials) =>
        this._authService.login(credentials).pipe(
          debounceTime(1000),
          map((user) => UserLoginActions.loginSuccess({ user })),
          catchError((error) => of(UserLoginActions.loginFailure({ error })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(UserLoginActions.loginSuccess),
        tap(() => this._router.navigate(['/']))
      );
    },
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(AuthActions.loginRedirect, AuthActions.logout),
        tap(() => this._router.navigate(['/login']))
      )
    },
    { dispatch: false }
  );

  constructor(
    private _router: Router,
    private _actions$: Actions,
    private _authService: AuthService
  ) {}
}
