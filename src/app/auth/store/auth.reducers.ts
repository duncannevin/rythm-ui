import { Action, createReducer, on } from '@ngrx/store'
import * as AuthActions from './auth.actions'

export const authFeatureKey = 'auth'

export interface AuthState {
	isAuthenticated: boolean
	fname: string
	lname: string
	username: string
	email: string
	password: string
}

export const initialState: AuthState = {
	isAuthenticated: false,
	fname: '',
	lname: '',
	username: '',
	email: '',
	password: '',
}

const loginReducer = createReducer(
	initialState,
	on(AuthActions.login, (state, { loginModel }) => ({
		...state,
		username: loginModel.username,
		email: loginModel.email,
		password: loginModel.password,
	})),
	on(AuthActions.register, (state, { registerModel }) => ({
		...state,
		username: registerModel.username,
		email: registerModel.email,
		password: registerModel.password,
		fname: registerModel.fname,
		lname: registerModel.lname,
	}))
)

export function reducer(state: AuthState | undefined, action: Action): AuthState {
	return loginReducer(state, action)
}
