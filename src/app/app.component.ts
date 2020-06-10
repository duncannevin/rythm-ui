import { Component, OnInit } from '@angular/core'
import { RouteInterceptService } from './route-intercept/route-intercept.service'
import { ConfigsService } from './configs/configs.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private routeInterceptService: RouteInterceptService, private configsService: ConfigsService) {}

	ngOnInit(): void {
		this.routeInterceptService.initialize().subscribe()
		this.configsService.setConfigs().subscribe()
	}
}
