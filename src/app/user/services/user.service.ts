import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/http/http.service'
import { UserGetEnum } from 'src/app/http/enum/resource-location.enum'
import { Observable } from 'rxjs'
import { UserModule } from '../user.module'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private httpService: HttpService) {}

	getProfile(): Observable<UserModule> {
		return this.httpService.get(UserGetEnum.PROFILE)
	}
}
