import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState, authFeatureKey } from './auth.reducer'

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey)

export const selectIsAuthed = createSelector(selectAuthState, (state: AuthState) => state.isAuthed)
