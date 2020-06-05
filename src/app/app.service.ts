import { Injectable } from '@angular/core'
import { AuthState } from './auth/store/auth.reducers'
import { Store, select } from '@ngrx/store'
import { isAuthenticatedState, loginState } from './auth/store'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class AppService {
	constructor(private authStore: Store<AuthState>) {}

	getIsAuthenticated(): Observable<boolean> {
		return this.authStore.pipe(select(isAuthenticatedState))
	}
}
