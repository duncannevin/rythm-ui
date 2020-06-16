import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import * as fromUser from './store/user.reducer'
import { StoreModule } from '@ngrx/store'
import { AuthModule } from '../auth/auth.module'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './store/user.effects'

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		EffectsModule.forFeature([UserEffects]),
		StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
	],
	exports: [],
})
export class UserModule {}
