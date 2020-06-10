import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpService } from './http.service'
import { ConfigsService } from '../configs/configs.service'
import { AuthGetEnum, AuthPostEnum } from './enum/resource-location.enum'
import { ConfigsModule } from '../configs/configs.module'

describe('HttpService', () => {
	let service: HttpService
	let httpMock
	let configsServiceMock

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, ConfigsModule],
			providers: [ConfigsService],
		})
		service = TestBed.inject(HttpService)
		httpMock = TestBed.get(HttpTestingController)
		configsServiceMock = TestBed.get(ConfigsService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should have a public get method', () => {
		expect(service.get).toBeDefined()
	})

	it('should have a public post method', () => {
		expect(service.post).toBeDefined()
	})

	it('should be able to post', () => {
		const fakeRes = { dis: 'aint great' }
		const fakeReq = { some: 'body' }
		const fakeLocation = 'http://someplace'
		spyOn(configsServiceMock, 'getConfig').and.returnValue(fakeLocation)

		service.post(AuthPostEnum.REGISTER, JSON.stringify(fakeReq)).subscribe((res) => {
			expect(res).toEqual(fakeRes)
		})

		const req = httpMock.expectOne(`${fakeLocation}${AuthPostEnum.REGISTER}`)
		expect(req.request.method).toBe('POST')
		req.flush(fakeRes)
	})

	it('should be able to get', () => {
		const fakeRes = { dude: 'what' }
		const fakeLocation = 'some://where.com'

		spyOn(configsServiceMock, 'getConfig').and.returnValue(fakeLocation)

		service.get(AuthGetEnum.ACTIVATE).subscribe((res) => {
			expect(res).toEqual(fakeRes)
		})

		const req = httpMock.expectOne(`${fakeLocation}${AuthGetEnum.ACTIVATE}`)
		expect(req.request.method).toBe('GET')
		req.flush(fakeRes)
	})
})
