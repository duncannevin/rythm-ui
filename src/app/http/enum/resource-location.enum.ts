export enum AuthGetEnum {
	GITHUB = '/auth/github',
	GOOGLE = '/auth/google',
	TWITTER = '/auth/twitter',
	LINKEDIN = '/auth/linkedin',
	ACTIVATE = '/auth/activate',
	EMAIL_EXISTS = '/auth/exists/email',
	USERNAME_EXISTS = '/auth/exists/username',
}

export enum AuthPostEnum {
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',
}

export enum UserGetEnum {
	PROFILE = '/users/getprofile',
}
