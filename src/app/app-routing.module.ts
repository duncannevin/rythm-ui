import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './auth/auth.component'
import { LoginComponent } from './auth/components/login/login.component'
import { RegisterComponent } from './auth/components/register/register.component'

const routes: Routes = [
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
