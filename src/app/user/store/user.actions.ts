import { createAction, props } from '@ngrx/store'
import { UserModel } from '../models/user.model'

export enum userActions {
	SET_USER = '[SET USER] Set user profile',
}

export const setUser = createAction(userActions.SET_USER, props<UserModel>())
