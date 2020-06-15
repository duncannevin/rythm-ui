import { Action, createReducer, on } from '@ngrx/store'
import * as UserActions from './user.actions'
import { UserModel } from '../models/user.model'

export const userFeatureKey = 'user'

export interface UserState {
	_id: string
	email: string
	role: string
	username: string
	createdAt: string
	updateAt: string
	user_id: string
	liked: string[]
	interests: string[]
}

export const initialState: UserState = {
	_id: null,
	email: null,
	role: null,
	username: null,
	createdAt: null,
	updateAt: null,
	user_id: null,
	liked: null,
	interests: null,
}

const userReducer = createReducer(
	initialState,
	on(UserActions.setUser, (_, { user }) => user),
	on(UserActions.resetUser, () => initialState)
)

export function reducer(state: UserState | undefined, action: Action) {
	return userReducer(state, action)
}
