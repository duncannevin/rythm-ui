import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { AuthState } from '../store/auth.reducer'
import { selectIsAuthed } from '../store/auth.selector'
import { map, take } from 'rxjs/operators'
import { forkJoin } from 'rxjs'
import { UserState } from 'src/app/user/store/user.reducer'
import { selectUsername } from 'src/app/user/store/user.selector'

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
	constructor(private authStore: Store<AuthState>, private userStore: Store<UserState>, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot) {
		const path = route.routeConfig.path

		return forkJoin([
			this.authStore.pipe(select(selectIsAuthed()), take(1)),
			this.userStore.pipe(select(selectUsername()), take(1)),
		]).pipe(
			map(([isAuthed, username]) => {
				const ok = path === 'auth' || path === '' ? !isAuthed : isAuthed

				if (path === '' && ok) {
					this.router.navigate[username]
				}

				if (path === 'auth' && !ok) {
					this.router.navigate([''])
				}

				if (path === ':user' && !ok) {
					this.router.navigate(['auth/login'])
				}

				return ok
			})
		)
	}
}
