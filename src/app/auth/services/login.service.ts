import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { AuthState } from '../store/auth.reducers'
import { loginState } from '../store'
import { login } from '../store/auth.actions'
import { LoginModel } from '../models/login.model'

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private store: Store<AuthState>) {}

	getLoginState() {
		return this.store.pipe(select(loginState))
	}

	updateLoginState(loginModel: LoginModel) {
		this.store.dispatch(login({ loginModel }))
	}

	login() {}
}
