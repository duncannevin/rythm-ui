import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'
import { Observable } from 'rxjs'
import { RouteInterceptService } from './route-intercept/route-intercept.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'rythm'
	isAuthenticated$: Observable<boolean> | null = null

	constructor(private appService: AppService, private routeInterceptService: RouteInterceptService) {}

	ngOnInit(): void {
		this.isAuthenticated$ = this.appService.getIsAuthenticated()

		this.routeInterceptService.initialize()
	}
}
