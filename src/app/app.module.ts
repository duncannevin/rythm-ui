import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { AuthModule } from './auth/auth.module'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { MaterialModule } from './material/material.module'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		StoreModule.forRoot({}),
		AuthModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		MaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
