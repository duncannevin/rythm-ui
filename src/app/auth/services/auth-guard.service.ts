import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { AuthState } from '../store/auth.reducer'
import { selectIsAuthed } from '../store/auth.selector'
import { map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
	constructor(private authStore: Store<AuthState>, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot) {
		const path = route.routeConfig.path

		return this.authStore.pipe(
			select(selectIsAuthed()),
			map((isAuthed) => {
				const ok = path === 'auth' ? !isAuthed : isAuthed

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
