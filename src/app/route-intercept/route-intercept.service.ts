import { Injectable } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter, map } from 'rxjs/operators'
import { Title } from '@angular/platform-browser'

@Injectable({
	providedIn: 'root',
})
export class RouteInterceptService {
	constructor(private router: Router, private titleService: Title) {}

	initialize() {
		this.router.events
			.pipe(
				filter((evt) => evt instanceof NavigationEnd),
				map((navEnd: NavigationEnd) => {
					this.updateTitle(navEnd)
				})
			)
			.subscribe()
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
