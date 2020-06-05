import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AuthState, authFeatureKey } from './auth.reducers'
import { LoginModel } from '../models/login.model'
import { RegisterModel } from '../models/register.model'

export const getLoginState = (state: AuthState) => new LoginModel(state)
export const getRegisterState = (state: AuthState) => new RegisterModel(state)

export const loginState = createSelector(getLoginState, (loginState: LoginModel) => loginState)

export const registerState = createSelector(getRegisterState, (registerState: RegisterModel) => registerState)
