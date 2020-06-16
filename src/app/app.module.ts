import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { AuthModule } from './auth/auth.module'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { MaterialModule } from './material/material.module'
import { HomeModule } from './home/home.module'
import { RouteInterceptModule } from './route-intercept/route-intercept.module'
import { HttpClientModule } from '@angular/common/http'
import { ConfigsModule } from './configs/configs.module'
import { UserModule } from './user/user.module'
import { EffectsModule } from '@ngrx/effects'
import { InitService } from './init.service'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		MaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		StoreModule.forRoot({}),
		RouteInterceptModule,
		UserModule,
		HomeModule,
		AuthModule,
		ConfigsModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([]),
	],
	providers: [
		InitService,
		{
			provide: APP_INITIALIZER,
			useFactory: (initService: InitService) => () => initService.initialize(),
			deps: [InitService],
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
