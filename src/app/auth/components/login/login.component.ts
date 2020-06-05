import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login.service'
import { LoginModel } from '../../models/login.model'

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService) {}

	ngOnInit(): void {
		this.loginService.getLoginState().subscribe(console.log)
		setTimeout(() => {
			this.loginService.updateLoginState(new LoginModel({ username: 'foobar', email: 'a@a.com', password: '1234' }))
		}, 3000)
	}
}
