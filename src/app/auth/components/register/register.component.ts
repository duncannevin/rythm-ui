import { Component, OnInit } from '@angular/core'
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { EmailExistsValidator } from '../../validators/email.validator'
import { UsernameExistsValidator } from '../../validators/username.validator'

@Component({
	selector: 'auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss', '../../styles/common.scss'],
})
export class RegisterComponent implements OnInit {
	signup: string = 'Signup'
	nameHint: string = 'Ex. Fred Rogers'
	usernameHint: string = 'Ex. freddyRogers_1123'
	emailHint: string = 'Ex. fred@gmail.com'
	passwordHint: string = 'Ex. Qwerty1!'
	alreadySignedUp: string = 'Already signed up?'
	goToLogin: string = 'Go to login'

	registerForm: FormGroup

	constructor(
		private formBuilder: FormBuilder,
		private usernameExistsValidator: UsernameExistsValidator,
		private emailExistsValidator: EmailExistsValidator
	) {}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			name: ['', [Validators.required]],
			username: ['', [Validators.required], [this.usernameExistsValidator]],
			email: ['', [Validators.required, Validators.email], [this.emailExistsValidator]],
			password: ['', [Validators.required, Validators.minLength(8)]],
		})
	}

	submit() {
		if (!this.registerForm.valid) {
			return
		}

		console.log(this.registerForm.value)
	}
}
