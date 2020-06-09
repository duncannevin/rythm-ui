import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	title = 'rythm'
	login = 'Login'
	signup = 'Signup'
	slogan = 'Find your rythm!'
	description = 'Collaborate with people all over the world to create perfect rythms for getting things done.'
	getStarted = 'Get Started'

	constructor() {}

	ngOnInit(): void {}
}
