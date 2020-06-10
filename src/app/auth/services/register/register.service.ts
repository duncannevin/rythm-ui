import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/http/http.service'
import { AuthPostEnum } from 'src/app/http/enum/resource-location.enum'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { Store } from '@ngrx/store'
import { AuthState } from '../../store/auth.reducers'

@Injectable({
	providedIn: 'root',
})
export class RegisterService {
	constructor(private http: HttpService, private authStore: Store<AuthState>) {}

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
