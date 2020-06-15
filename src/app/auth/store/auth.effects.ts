import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'
import { AuthActions } from './auth.actions'
import { UserActions } from 'src/app/user/store/user.actions'
import { Store } from '@ngrx/store'
import { UserState } from 'src/app/user/store/user.reducer'
import { UserModel } from 'src/app/user/models/user.model'

@Injectable()
export class AuthEffects {
	registerUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AuthActions.REGISTER),
			mergeMap(({ registerModel }) => {
				return this.authService.register(registerModel).pipe(map(this.success), catchError(this.error))
			})
		)
	)

	loginUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AuthActions.LOGIN),
			mergeMap(({ loginModel }) => this.authService.login(loginModel).pipe(map(this.success), catchError(this.error)))
		)
	)

	constructor(private actions$: Actions, private authService: AuthService, private userStore: Store<UserState>) {
		this.success = this.success.bind(this)
		this.error = this.error.bind(this)
	}

	private success(userModel: UserModel) {
		this.userStore.dispatch({ type: UserActions.SET_USER, user: userModel })
		return { type: AuthActions.SET_IS_AUTHED, isAuthed: true }
	}

	private error() {
		this.userStore.dispatch({ type: UserActions.RESET_USER })
		return of({ type: AuthActions.SET_IS_AUTHED, isAuthed: false })
	}
}
