import { LoginModel } from './login.model'

export class RegisterModel extends LoginModel {
	fname: string
	lname: string
	role: string
	username: string

	constructor({ username, email, password, name }) {
		super({ email, password })
		this.username = username
		this.fname = name.split(' ')[0]
		this.lname = name.split(' ')[1] || ''
		this.role = 'member'
	}
}
