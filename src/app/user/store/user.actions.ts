import { createAction, props } from '@ngrx/store'
import { UserModel } from '../models/user.model'

export enum UserActions {
	SET_USER = '[SET USER] Set user profile',
	RESET_USER = '[RESET USER] Reset user profile to null',
	GET_PROFILE = '[GET PROFILE] Get a user profile from the current session (cookie)',
}

export const setUser = createAction(UserActions.SET_USER, props<{ user: UserModel }>())
export const resetUser = createAction(UserActions.RESET_USER)
export const getProfile = createAction(UserActions.GET_PROFILE)
