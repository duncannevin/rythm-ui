import { Injectable } from '@angular/core'
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms'
import { RegisterService } from '../services/register/register.service'
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class UsernameExistsValidator implements AsyncValidator {
	constructor(private registerService: RegisterService) {}

	validate(ctrl: AbstractControl): Observable<ValidationErrors> {
		return this.registerService.usernameExists(ctrl.value).pipe(catchError(() => of(null)))
	}
}
