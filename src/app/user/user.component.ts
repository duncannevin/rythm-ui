import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { AuthState } from '../auth/store/auth.reducer'
import { AuthActions } from '../auth/store/auth.actions'
import { UserState, UserImage } from './store/user.reducer'
import { selectUsername, selectUserImage } from './store/user.selector'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { map, tap, take, catchError } from 'rxjs/operators'
import { Observable, forkJoin, of, EMPTY } from 'rxjs'

interface NavItem {
	label: string
	navTo?: string
	action?: (any) => any
}

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
	navItems$: Observable<Array<NavItem>>

	constructor(
		private authStore: Store<AuthState>,
		private userStore: Store<UserState>,
		private sanitizer: DomSanitizer
	) {}

	ngOnInit(): void {
		this.setNavItems()
	}

	logout() {
		this.authStore.dispatch({ type: AuthActions.LOGOUT })
	}

	private setNavItems() {
		this.navItems$ = forkJoin([
			this.username.pipe(
				map((username) => ({ label: `Signed in as: ${username}`, navTo: `/${username}` })),
				take(1)
			),
			of({ label: 'Signout', action: this.logout.bind(this) }),
		])
	}

	get username(): Observable<string> {
		return this.userStore.pipe(select(selectUsername()))
	}

	get userImage(): Observable<SafeHtml> {
		return this.userStore.pipe(
			select(selectUserImage()),
			map((userImage: UserImage) => this.sanitizer.bypassSecurityTrustHtml(userImage.data))
		)
	}
}
