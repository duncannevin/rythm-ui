import { LoginModel } from './login.model'

export class RegisterModel extends LoginModel {
	fname: string
	lname: string

	constructor({ username, email, password, fname, lname }) {
		super({ username, email, password })
		this.fname = fname
		this.lname = lname
	}
}
