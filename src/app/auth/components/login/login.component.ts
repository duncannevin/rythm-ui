import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login/login.service'
import { LoginModel } from '../../models/login.model'

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService) {}

	ngOnInit(): void {}
}
