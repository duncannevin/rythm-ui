import { Component, OnInit } from '@angular/core'
import { Observable, forkJoin, of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { AuthState } from 'src/app/auth/store/auth.reducer'
import { UserState, UserImage } from 'src/app/user/store/user.reducer'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { selectUsername, selectUserImage } from 'src/app/user/store/user.selector'
import { map, take } from 'rxjs/operators'
import { AuthActions } from 'src/app/auth/store/auth.actions'

export interface NavItem {
	label: string
	navTo?: string
	action?: (any) => any
}

@Component({
	selector: 'authed-navbar',
	templateUrl: './authed-navbar.component.html',
	styleUrls: ['./authed-navbar.component.scss'],
})
export class AuthedNavbarComponent implements OnInit {
	signOut: string = 'Sign out'

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
			of({ label: this.signOut, action: this.logout.bind(this) }),
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
