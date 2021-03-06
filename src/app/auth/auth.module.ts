import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'
import { AuthComponent } from './auth.component'
import { AppRoutingModule } from '../app-routing.module'
import { HttpModule } from '../http/http.module'
import { MaterialModule } from '../material/material.module'
import { CommonComponentsModule } from '../common-components/common-components.module'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import * as fromAuth from './store/auth.reducer'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/auth.effects'
import { UserModule } from '../user/user.module'

@NgModule({
	declarations: [RegisterComponent, LoginComponent, AuthComponent],
	imports: [
		CommonModule,
		CommonComponentsModule,
		ReactiveFormsModule,
		UserModule,
		EffectsModule.forFeature([AuthEffects]),
		StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
		MaterialModule,
		CommonModule,
		AppRoutingModule,
		HttpModule,
	],
	exports: [RegisterComponent, LoginComponent],
	bootstrap: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
