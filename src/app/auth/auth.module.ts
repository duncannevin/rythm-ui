import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import * as fromAuth from './store/auth.reducers'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'
import { AuthComponent } from './auth.component'
import { AppRoutingModule } from '../app-routing.module'
import { HttpModule } from '../http/http.module'
import { MaterialModule } from '../material/material.module'
import { CommonComponentsModule } from '../common-components/common-components.module'

@NgModule({
	declarations: [RegisterComponent, LoginComponent, AuthComponent],
	imports: [
		StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
		CommonModule,
		CommonComponentsModule,
		MaterialModule,
		CommonModule,
		AppRoutingModule,
		HttpModule,
	],
	exports: [RegisterComponent, LoginComponent],
	bootstrap: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
