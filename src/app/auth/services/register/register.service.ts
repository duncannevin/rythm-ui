import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/http/http.service'
import { AuthPostEnum, AuthGetEnum } from 'src/app/http/enum/resource-location.enum'
import { catchError, map } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs'
import { Store } from '@ngrx/store'

@Injectable({
	providedIn: 'root',
})
export class RegisterService {
	constructor(private http: HttpService) {}

	usernameExists(username: string): Observable<boolean> {
		return this.http.get<{ exists: boolean }>(AuthGetEnum.USERNAME_EXISTS, username).pipe(map(({ exists }) => exists))
	}

	emailExists(email: string): Observable<boolean> {
		return this.http.get<{ exists: boolean }>(AuthGetEnum.EMAIL_EXISTS, email).pipe(map(({ exists }) => exists))
	}

	register() {
		this.http
			.post(AuthPostEnum.REGISTER, JSON.stringify({}))
			.pipe(
				catchError((err) => {
					return throwError('caugth again')
				})
			)
			.subscribe()
	}
}
