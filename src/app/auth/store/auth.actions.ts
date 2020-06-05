import { createAction, props } from '@ngrx/store'
import { LoginModel } from 'src/app/auth/models/login.model'
import { RegisterModel } from '../models/register.model'

export enum AuthActions {
	LOGIN = '[Login] Login user',
	REGISTER = '[Register] Register user',
}

export const register = createAction(AuthActions.REGISTER, props<{ registerModel: RegisterModel }>())
export const login = createAction(AuthActions.LOGIN, props<{ loginModel: LoginModel }>())
