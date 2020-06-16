import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import * as fromUser from './store/user.reducer'
import { StoreModule } from '@ngrx/store'
import { AuthModule } from '../auth/auth.module'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './store/user.effects'
import { UserComponent } from './user.component'

@NgModule({
	declarations: [UserComponent],
	imports: [
		CommonModule,
		EffectsModule.forFeature([UserEffects]),
		StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
	],
	exports: [UserComponent],
})
export class UserModule {}
