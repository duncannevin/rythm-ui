import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of, EMPTY } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'
import { AuthActions } from './auth.actions'
import { UserActions } from 'src/app/user/store/user.actions'
import { Store } from '@ngrx/store'
import { UserState } from 'src/app/user/store/user.reducer'
import { UserModel } from 'src/app/user/models/user.model'
import { Router } from '@angular/router'

@Injectable()
export class AuthEffects {
	registerUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AuthActions.REGISTER),
			mergeMap(({ registerModel }) =>
				this.authService.register(registerModel).pipe(map(this.success), catchError(this.error))
			)
		)
	)

	loginUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AuthActions.LOGIN),
			mergeMap(({ loginModel }) => this.authService.login(loginModel).pipe(map(this.success), catchError(this.error)))
		)
	)

	logoutUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AuthActions.LOGOUT),
			mergeMap(() =>
				this.authService.logout().pipe(
					map(this.logoutSuccess),
					catchError(() => EMPTY)
				)
			)
		)
	)

	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private userStore: Store<UserState>,
		private router: Router
	) {
		this.success = this.success.bind(this)
		this.error = this.error.bind(this)
		this.logoutSuccess = this.logoutSuccess.bind(this)
	}

	private logoutSuccess() {
		this.userStore.dispatch({ type: UserActions.RESET_USER })
		this.router.navigate([''])
		return { type: AuthActions.RESET_AUTH }
	}

	private success(userModel: UserModel) {
		this.userStore.dispatch({ type: UserActions.SET_USER, user: userModel })
		this.router.navigate([userModel.username])
		return { type: AuthActions.SET_IS_AUTHED, isAuthed: true }
	}

	private error() {
		this.userStore.dispatch({ type: UserActions.RESET_USER })
		this.router.navigate(['auth/login'])
		return of({ type: AuthActions.SET_IS_AUTHED, isAuthed: false })
	}
}
