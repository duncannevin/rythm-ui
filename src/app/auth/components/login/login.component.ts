import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login/login.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss', '../styles/common.scss'],
})
export class LoginComponent implements OnInit {
	usernameOrEmail: string = 'Username or Email'
	password: string = 'Password'
	login: string = 'login'
	notSignedUp = 'Not signed up?'
	goToRegister = 'Go to register page.'

	loginForm: FormGroup

	constructor(private loginService: LoginService, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			usernameOrEmail: [null, [Validators.required]],
			password: [null, [Validators.required]],
		})
	}

	submit() {
		if (!this.loginForm.valid) {
			return
		}

		console.log('login form', this.loginForm.value)
	}
}
