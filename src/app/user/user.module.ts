import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import * as fromUser from './store/user.reducer'
import { StoreModule } from '@ngrx/store'

@NgModule({
	declarations: [],
	imports: [CommonModule, StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer)],
	exports: [],
})
export class UserModule {}
