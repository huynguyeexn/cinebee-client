export interface LoginPayload {
	username: string;
	password: string;
}

export interface RegisterPayload {
	username: string;
	password: string;
	email: string;
	fullname: string;
}

export interface SocialLoginPayload {
	[key: string]: string;
}
