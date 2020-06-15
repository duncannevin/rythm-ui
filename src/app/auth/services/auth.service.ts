import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpService } from 'src/app/http/http.service'
import { AuthGetEnum, AuthPostEnum } from 'src/app/http/enum/resource-location.enum'
import { map } from 'rxjs/operators'
import { RegisterModel } from '../models/register.model'
import { UserModel } from 'src/app/user/models/user.model'
import { LoginModel } from '../models/login.model'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private httpService: HttpService) {}

	emailExists(email: string): Observable<boolean> {
		return this.httpService.get<{ exists: boolean }>(AuthGetEnum.EMAIL_EXISTS, email).pipe(map(({ exists }) => exists))
	}

	usernameExists(username: string): Observable<boolean> {
		return this.httpService
			.get<{ exists: boolean }>(AuthGetEnum.USERNAME_EXISTS, username)
			.pipe(map(({ exists }) => exists))
	}

	register(registerModel: RegisterModel): Observable<UserModel> {
		return this.httpService.post<UserModel>(AuthPostEnum.REGISTER, registerModel)
	}

	login(loginModel: LoginModel): Observable<UserModel> {
		return this.httpService.post<UserModel>(AuthPostEnum.LOGIN, loginModel)
	}
}
