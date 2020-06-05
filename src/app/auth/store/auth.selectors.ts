import { createSelector } from '@ngrx/store'
import { AuthState } from './auth.reducers'
import { LoginModel } from '../models/login.model'
import { RegisterModel } from '../models/register.model'

export const selectAuth = (state: AuthState) => state

export const selectLogin = createSelector(selectAuth, (state: AuthState) => new LoginModel(state))
export const selectRegister = createSelector(selectAuth, (state: AuthState) => new RegisterModel(state))
