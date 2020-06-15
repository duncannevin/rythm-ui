import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpService } from 'src/app/http/http.service'
import { AuthGetEnum } from 'src/app/http/enum/resource-location.enum'
import { map } from 'rxjs/operators'

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
}
