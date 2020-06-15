import { Injectable } from '@angular/core'
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms'
import { RegisterService } from '../services/register/register.service'
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class EmailExistsValidator implements AsyncValidator {
	constructor(private registerService: RegisterService) {}

	validate(ctrl: AbstractControl): Observable<ValidationErrors> {
		return this.registerService.emailExists(ctrl.value).pipe(
			map((bool) => (bool ? { exists: bool } : null)),
			catchError(() => of(null))
		)
	}
}
