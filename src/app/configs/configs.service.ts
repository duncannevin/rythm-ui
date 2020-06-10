import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigModel } from './models/config.model'
import { ConfigEnum } from './enum/config.enum'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ConfigsService {
	private configUrl: string = 'assets/configs.json'
	private configs: ConfigModel

	constructor(private http: HttpClient) {}

	setConfigs(): Observable<ConfigModel> {
		return this.http
			.get<ConfigModel>(this.configUrl, { observe: 'body', responseType: 'json' })
			.pipe(tap((configs) => (this.configs = configs)))
	}

	getConfig(name: ConfigEnum): string {
		if (!this.configs[name]) {
			throw new Error(`${name} is not a valid config`)
		}

		return this.configs[name]
	}
}
