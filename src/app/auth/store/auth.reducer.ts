import { Action, createReducer, on } from '@ngrx/store'
import * as AuthActions from './auth.actions'

export const authFeatureKey = 'auth'

export interface AuthState {
	isAuthed: boolean
	role: string
}

export const initialState: AuthState = {
	isAuthed: false,
	role: null,
}

const authReducer = createReducer(
	initialState,
	on(AuthActions.setAuthed, (state, { isAuthed }) => ({ ...state, isAuthed })),
	on(AuthActions.setRole, (state, { role }) => ({ ...state, role }))
)

export function reducer(state: AuthState | undefined, action: Action) {
	return authReducer(state, action)
}
