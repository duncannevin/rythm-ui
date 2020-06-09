import { TestBed } from '@angular/core/testing'

import { RouteInterceptService } from './route-intercept.service'

describe('RouteInterceptService', () => {
	let service: RouteInterceptService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(RouteInterceptService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
