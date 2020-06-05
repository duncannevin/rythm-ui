import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { RegisterModel } from '../../models/register.model'
import { Observable } from 'rxjs'
import * as fromRoot from '../../store'

@Component({
	selector: 'auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm$: Observable<RegisterModel>

	constructor() {}

	ngOnInit(): void {}
}
