import { Injectable } from '@angular/core'
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'

@Injectable({ providedIn: 'root' })
export class UsernameExistsValidator implements AsyncValidator {
	constructor(private authService: AuthService) {}

	validate(ctrl: AbstractControl): Observable<ValidationErrors> {
		return this.authService.usernameExists(ctrl.value).pipe(
			map((bool) => (bool ? { exists: bool } : null)),
			catchError(() => of(null))
		)
	}
}
