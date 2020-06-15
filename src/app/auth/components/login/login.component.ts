import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AuthState } from '../../store/auth.reducer'
import { AuthActions } from '../../store/auth.actions'
import { LoginModel } from '../../models/login.model'

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss', '../../styles/common.scss'],
})
export class LoginComponent implements OnInit {
	email: string = 'Email'
	password: string = 'Password'
	login: string = 'Login'
	notSignedUp = 'Not signed up?'
	goToRegister = 'Go to register'

	loginForm: FormGroup

	constructor(private formBuilder: FormBuilder, private authStore: Store<AuthState>) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]],
		})
	}

	submit() {
		if (!this.loginForm.valid) {
			return
		}

		this.authStore.dispatch({ type: AuthActions.LOGIN, loginModel: new LoginModel(this.loginForm.value) })
	}
}
