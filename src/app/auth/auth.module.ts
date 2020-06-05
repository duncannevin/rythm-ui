import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import * as fromAuth from './store/auth.reducers'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'

@NgModule({
	declarations: [RegisterComponent, LoginComponent],
	imports: [StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), CommonModule],
	exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
