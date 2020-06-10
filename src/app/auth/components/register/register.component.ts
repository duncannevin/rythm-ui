import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { RegisterModel } from '../../models/register.model'
import { Observable } from 'rxjs'
import * as fromRoot from '../../store'
import { RegisterService } from '../../services/register/register.service'
import { FormControl, Validators, FormGroup } from '@angular/forms'

@Component({
	selector: 'auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss', '../styles/common.scss'],
})
export class RegisterComponent implements OnInit {
	signup: string = 'Signup'
	nameHint: string = 'Ex. Fred Rogers'
	usernameHint: string = 'Ex. freddyRogers_1123'
	emailHint: string = 'Ex. fred@gmail.com'
	alreadySignedUp: string = 'Already signed up?'
	goToLogin: string = 'Go to login'

	registerForm = new FormGroup({
		name: new FormControl(''),
		username: new FormControl(''),
		email: new FormControl('', [Validators.email, Validators.required]),
		password: new FormControl(''),
	})

	constructor(private registerService: RegisterService) {}

	ngOnInit(): void {}
}
