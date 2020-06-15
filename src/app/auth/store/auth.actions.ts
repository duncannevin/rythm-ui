import { createAction, props } from '@ngrx/store'

export enum authActions {
	SET_IS_AUTHED = '[SET IS AUTHED] Set auth state',
}

export const setAuthed = createAction(authActions.SET_IS_AUTHED, props<{ responseCode: number }>())
