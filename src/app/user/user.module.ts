import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import * as fromUser from './store/user.reducer'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './store/user.effects'
import { UserComponent } from './user.component'
import { MaterialModule } from '../material/material.module'
import { CommonComponentsModule } from '../common-components/common-components.module'

@NgModule({
	declarations: [UserComponent],
	imports: [
		MaterialModule,
		CommonModule,
		CommonComponentsModule,
		EffectsModule.forFeature([UserEffects]),
		StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
	],
	exports: [UserComponent],
})
export class UserModule {}
