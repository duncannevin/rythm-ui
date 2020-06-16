import { Component, OnInit } from '@angular/core'
import { RouteInterceptService } from './route-intercept/route-intercept.service'
import { ConfigsService } from './configs/configs.service'
import { Store } from '@ngrx/store'
import { UserState } from './user/store/user.reducer'
import { UserActions } from './user/store/user.actions'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(
		private routeInterceptService: RouteInterceptService,
		private configsService: ConfigsService,
		private userStore: Store<UserState>
	) {}

	ngOnInit(): void {
		this.routeInterceptService.initialize().subscribe()
		this.configsService.setConfigs().subscribe(() => {
			this.userStore.dispatch({ type: UserActions.GET_PROFILE })
		})
	}
}
