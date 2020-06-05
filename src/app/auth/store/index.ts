import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AuthState, authFeatureKey } from './auth.reducers'
import { LoginModel } from '../models/login.model'
import { RegisterModel } from '../models/register.model'

export const getAuthState = createFeatureSelector<AuthState>(authFeatureKey)

export const loginState = createSelector(getAuthState, (authState: AuthState) => new LoginModel(authState))

export const registerState = createSelector(getAuthState, (authState: AuthState) => new RegisterModel(authState))

export const isAuthenticatedState = createSelector(getAuthState, (authState: AuthState) => authState.isAuthenticated)
