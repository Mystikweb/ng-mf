import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromUserLogin from './user-login.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromUserLogin.userLoginFeatureKey]: fromUserLogin.State;
}

export const sharedReducers: ActionReducerMap<AuthState> = {
  [fromAuth.statusFeatureKey]: fromAuth.reducer,
  [fromUserLogin.userLoginFeatureKey]: fromUserLogin.reducer,
};

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.statusFeatureKey
);

export const selectUser = createSelector(selectAuthState, fromAuth.getUser);

export const selectLoggedIn = createSelector(selectUser, (user) => !!user);

export const selectUserLoginState = createFeatureSelector<fromUserLogin.State>(
  fromUserLogin.userLoginFeatureKey
);

export const selectLoginPageError = createSelector(
  selectUserLoginState,
  fromUserLogin.getError
);

export const selectLoginPagePending = createSelector(
  selectUserLoginState,
  fromUserLogin.getPending
);
