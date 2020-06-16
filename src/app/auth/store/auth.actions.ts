import { createAction, props } from '@ngrx/store'

export enum AuthActions {
	SET_IS_AUTHED = '[SET IS AUTHED] Set auth state',
	REGISTER = '[REGISTER] Register user',
	LOGIN = '[LOGIN] Login user',
	SET_ROLE = '[SET ROLE] Set the authed users role',
	RESET_AUTH = '[RESET AUTH] Resets auth to original state',
	LOGOUT = '[LOGOUT] Logs a user out',
}

export const setAuthed = createAction(AuthActions.SET_IS_AUTHED, props<{ isAuthed: boolean }>())
export const setRole = createAction(AuthActions.SET_ROLE, props<{ role: string }>())
export const resetAuth = createAction(AuthActions.RESET_AUTH)
