import { Action, createReducer, on } from '@ngrx/store'
import * as AuthActions from './auth.actions'

export const authFeatureKey = 'auth'

export interface AuthState {
	isAuthed: boolean
}

export const initialState: AuthState = {
	isAuthed: false,
}

const authReducer = createReducer(
	initialState,
	on(AuthActions.setAuthed, (_, { isAuthed }) => ({ isAuthed }))
)

export function reducer(state: AuthState | undefined, action: Action) {
	return authReducer(state, action)
}
