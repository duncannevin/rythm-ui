import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './auth/auth.component'
import { LoginComponent } from './auth/components/login/login.component'
import { RegisterComponent } from './auth/components/register/register.component'
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './material/material.module'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
