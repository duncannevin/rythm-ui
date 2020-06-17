import { Injectable } from '@angular/core'
import { RouteInterceptService } from './route-intercept/route-intercept.service'
import { ConfigsService } from './configs/configs.service'
import { Store } from '@ngrx/store'
import { UserState } from './user/store/user.reducer'
import { UserActions } from './user/store/user.actions'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Injectable({
	providedIn: 'root',
})
export class InitService {
	constructor(
		private routeInterceptService: RouteInterceptService,
		private configsService: ConfigsService,
		private userStore: Store<UserState>,
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {}

	initialize() {
		this.initHttpIntercept()
		this.initConfigs().subscribe(this.getProfile.bind(this))
		this.setIcons()
	}

	private initHttpIntercept() {
		this.routeInterceptService.initialize().subscribe()
	}

	private initConfigs() {
		return this.configsService.setConfigs()
	}

	private getProfile() {
		return this.userStore.dispatch({ type: UserActions.GET_PROFILE })
	}

	private setIcons() {
		this.iconRegistry.addSvgIcon('down-caret', this.sanitizer.bypassSecurityTrustResourceUrl('assets/down-caret.svg'))
	}
}
