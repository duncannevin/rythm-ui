import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LogoComponent } from './logo/logo.component'
import { AuthedNavbarComponent } from './authed-navbar/authed-navbar.component'
import { MaterialModule } from '../material/material.module'

@NgModule({
	declarations: [LogoComponent, AuthedNavbarComponent],
	imports: [MaterialModule, CommonModule],
	exports: [LogoComponent, AuthedNavbarComponent],
})
export class CommonComponentsModule {}
