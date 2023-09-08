import { createReducer, on } from '@ngrx/store';

import { AuthActions, UserLoginActions } from '../actions';
import { User } from '../models';

export const statusFeatureKey = 'authStatus';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(UserLoginActions.loginSuccess, (state, { user }): State => ({ ...state, user })),
  on(AuthActions.logout, (): State => initialState)
);

export const getUser = (state: State): User | null => state.user;
