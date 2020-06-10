import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ConfigsModule } from '../configs/configs.module'
import { HttpService } from './http.service'

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule, ConfigsModule],
	exports: [],
})
export class HttpModule {}
