import { TestBed } from '@angular/core/testing'
import { LoginService } from './login.service'
import { Store, StoreModule } from '@ngrx/store'

describe('LoginService', () => {
	let service: LoginService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({})],
			providers: [LoginService, Store],
		})
		service = TestBed.inject(LoginService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
