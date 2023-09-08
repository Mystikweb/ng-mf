import { createReducer, on } from '@ngrx/store';

import { UserLoginActions } from '../actions';

export const userLoginFeatureKey = 'userLogin';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(UserLoginActions.login, (state): State => ({ ...state, error: null, pending: true })),
  on(UserLoginActions.loginSuccess, (state): State => ({ ...state, error: null, pending: false })),
  on(UserLoginActions.loginFailure, (state, { error }): State => ({ ...state, error, pending: false }))
);

export const getError = (state: State): string | null => state.error;
export const getPending = (state: State): boolean => state.pending;
