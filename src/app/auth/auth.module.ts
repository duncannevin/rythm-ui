import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import * as fromAuth from './store/auth.reducers'

@NgModule({
	declarations: [],
	imports: [StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), CommonModule],
})
export class AuthModule {}
