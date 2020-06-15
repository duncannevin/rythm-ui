import { Injectable } from '@angular/core'
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms'
import { AuthService } from '../services/auth.service'
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class EmailExistsValidator implements AsyncValidator {
	constructor(private authService: AuthService) {}

	validate(ctrl: AbstractControl): Observable<ValidationErrors> {
		return this.authService.emailExists(ctrl.value).pipe(
			map((bool) => (bool ? { exists: bool } : null)),
			catchError(() => of(null))
		)
	}
}
