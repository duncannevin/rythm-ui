import { Injectable } from '@angular/core'
import { ConfigsService } from '../configs/configs.service'
import { ConfigEnum } from '../configs/enum/config.enum'
import { concatMap, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError, Observable } from 'rxjs'
import { AuthGetEnum, AuthPostEnum, UserGetEnum, AuthPutEnum } from './enum/resource-location.enum'

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	httpOptions: {} = {
		withCredentials: true,
	}

	constructor(private configs: ConfigsService, private client: HttpClient) {}

	post<T>(resource: AuthGetEnum | AuthPostEnum, body: any): Observable<T> {
		return this.client
			.post<T>(`${this.configs.getConfig(ConfigEnum.RYTHM_API)}${resource}`, body, this.httpOptions)
			.pipe(catchError(this.handleError))
	}

	get<T>(resource: AuthGetEnum | UserGetEnum, params?: string): Observable<T> {
		return this.client
			.get<T>(`${this.configs.getConfig(ConfigEnum.RYTHM_API)}${resource}/${params || ''}`, this.httpOptions)
			.pipe(catchError(this.handleError))
	}

	put<T>(resource: AuthPutEnum): Observable<T> {
		return this.client
			.put<T>(`${this.configs.getConfig(ConfigEnum.RYTHM_API)}${resource}`, {}, this.httpOptions)
			.pipe(catchError(this.handleError))
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message)
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`)
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.')
	}
}
