import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UserActions } from './user.actions'
import { UserService } from '../services/user.service'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { UserModel } from '../models/user.model'
import { Store } from '@ngrx/store'
import { AuthState } from 'src/app/auth/store/auth.reducer'
import { AuthActions } from 'src/app/auth/store/auth.actions'
import { of } from 'rxjs'
import { Router } from '@angular/router'

@Injectable()
export class UserEffects {
	getProfile$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.GET_PROFILE),
			mergeMap(() => {
				return this.userService.getProfile().pipe(map(this.success), catchError(this.failure))
			})
		)
	)

	constructor(
		private actions$: Actions,
		private userService: UserService,
		private authStore: Store<AuthState>,
		private router: Router
	) {
		this.success = this.success.bind(this)
		this.failure = this.failure.bind(this)
	}

	private success(userModel: UserModel) {
		this.authStore.dispatch({ type: AuthActions.SET_IS_AUTHED, isAuthed: true })
		this.authStore.dispatch({ type: AuthActions.SET_ROLE, role: userModel.role })
		this.router.navigate([userModel.username])
		return { type: UserActions.SET_USER, user: userModel }
	}

	private failure() {
		this.authStore.dispatch({ type: AuthActions.RESET_AUTH })
		this.router.navigate([''])
		return of({ type: UserActions.RESET_USER })
	}
}
