import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AuthState } from '../auth/store/auth.reducer'
import { AuthActions } from '../auth/store/auth.actions'

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
	constructor(private authStore: Store<AuthState>) {}

	ngOnInit(): void {}

	logout() {
		this.authStore.dispatch({ type: AuthActions.LOGOUT })
	}
}
