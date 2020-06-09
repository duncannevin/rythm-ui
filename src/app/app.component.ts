import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { RouteInterceptService } from './route-intercept/route-intercept.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private routeInterceptService: RouteInterceptService) {}

	ngOnInit(): void {
		this.routeInterceptService.initialize().subscribe()
	}
}
