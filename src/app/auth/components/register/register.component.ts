import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { RegisterModel } from '../../models/register.model'
import { Observable } from 'rxjs'
import * as fromRoot from '../../store'
import { RegisterService } from '../../services/register/register.service'

@Component({
	selector: 'auth-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm$: Observable<RegisterModel>

	constructor(private registerService: RegisterService) {}

	ngOnInit(): void {}
}
