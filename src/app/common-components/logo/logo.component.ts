import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
	title: string = 'rythm'

	constructor(private router: Router) {}

	navHome() {
		this.router.navigateByUrl('/')
	}
}
