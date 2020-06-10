import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { MaterialModule } from '../material/material.module'
import { AppRoutingModule } from '../app-routing.module'
import { CommonComponentsModule } from '../common-components/common-components.module'

@NgModule({
	declarations: [HomeComponent],
	imports: [MaterialModule, CommonComponentsModule, AppRoutingModule, CommonModule],
	exports: [HomeComponent],
})
export class HomeModule {}
