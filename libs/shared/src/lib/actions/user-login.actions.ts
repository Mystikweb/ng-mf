import { createAction, props } from '@ngrx/store';

import { User, UserCredentials } from '../models';

export const login = createAction('[Login Page] Login', props<{ credentials: UserCredentials }>());
export const loginSuccess = createAction('[User] Login Success', props<{ user: User }>());
export const loginFailure = createAction('[User] Login Failure', props<{ error: string }>());
