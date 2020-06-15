import { createAction, props } from '@ngrx/store'

export enum AuthActions {
	SET_IS_AUTHED = '[SET IS AUTHED] Set auth state',
	REGISTER = '[REGISTER] Register user',
	LOGIN = '[LOGIN] Login user',
}

export const setAuthed = createAction(AuthActions.SET_IS_AUTHED, props<{ isAuthed: boolean }>())
