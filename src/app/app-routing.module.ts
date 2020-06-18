import { NgModule, Injectable } from '@angular/core'
import { Routes, RouterModule, CanActivate } from '@angular/router'
import { AuthComponent } from './auth/auth.component'
import { LoginComponent } from './auth/components/login/login.component'
import { RegisterComponent } from './auth/components/register/register.component'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { AuthGuardService } from './auth/services/auth-guard.service'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
		],
		canActivate: [AuthGuardService],
	},
	{
		path: ':user',
		component: UserComponent,
		canActivate: [AuthGuardService],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
