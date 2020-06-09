import { TestBed } from '@angular/core/testing'
import { RouteInterceptService } from './route-intercept.service'
import { Router, NavigationEnd, RouterEvent } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { of, ReplaySubject } from 'rxjs'
import { tap } from 'rxjs/operators'

describe('RouteInterceptService', () => {
	let service: RouteInterceptService
	let router: any
	let titleSpy: any

	const eventSubject = new ReplaySubject<RouterEvent>(1)
	const routerMock = {
		navigate: jasmine.createSpy('navigate'),
		events: eventSubject.asObservable(),
		url: '123/456/789',
	}

	beforeEach(() => {
		titleSpy = jasmine.createSpyObj('Title', ['getTitle', 'setTitle'])

		TestBed.configureTestingModule({
			providers: [
				{ provide: Router, useValue: routerMock },
				{ provide: Title, useValue: titleSpy },
			],
		})

		router = TestBed.get(Router)
		service = TestBed.inject(RouteInterceptService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should have an initialize method', () => {
		expect(service.initialize).toBeDefined()
	})

	it('should initialize', () => {
		const eventSpy = spyOn(router.events, 'pipe')
		service.initialize()
		expect(eventSpy).toHaveBeenCalled()
	})

	it('should update the title when the route changes', () => {
		service.initialize().subscribe()

		const event = new NavigationEnd(1, '/123/456/789', '/')
		eventSubject.next(event)

		expect(titleSpy.setTitle).toHaveBeenCalledWith('rythm|123|456|789')
	})
})
