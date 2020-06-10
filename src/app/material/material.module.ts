import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [MatToolbarModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
