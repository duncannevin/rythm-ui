import { Injectable } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter, map, tap } from 'rxjs/operators'
import { Title } from '@angular/platform-browser'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class RouteInterceptService {
	constructor(private router: Router, private titleService: Title) {}

	initialize(): Observable<void> {
		return this.router.events.pipe(
			filter((evt) => evt instanceof NavigationEnd),
			map((navEnd: NavigationEnd) => {
				this.updateTitle(navEnd)
			})
		)
	}

	private updateTitle(navEnd: NavigationEnd) {
		const title = `rythm${makeTitle(navEnd.url)}`

		this.titleService.setTitle(title)

		function makeTitle(url) {
			if (url === '/') {
				return ''
			} else {
				return `${url.replace(/[\\/]/gi, '|')}`
			}
		}
	}
}
