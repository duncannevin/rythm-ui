import { TestBed } from '@angular/core/testing'

import { ConfigsService } from './configs.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ConfigEnum } from './enum/config.enum'

describe('ConfigsService', () => {
	let service: ConfigsService
	let httpMock
	const fakeRes = { rythmApi: 'is not nothing' }

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		})
		service = TestBed.inject(ConfigsService)
		httpMock = TestBed.get(HttpTestingController)
	})

	afterEach(() => {
		service = null
		httpMock.verify()
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should set configs', () => {
		service.setConfigs().subscribe((configs) => {
			expect(configs).toEqual(fakeRes)
		})

		const req = httpMock.expectOne('assets/configs.json')
		expect(req.request.method).toBe('GET')
		req.flush(fakeRes)
	})

	it('should get a config', () => {
		service.setConfigs().subscribe(() => {
			expect(service.getConfig(ConfigEnum.RYTHM_API))
		})

		const req = httpMock.expectOne('assets/configs.json')
		expect(req.request.method).toBe('GET')
		req.flush(fakeRes)
	})
})
