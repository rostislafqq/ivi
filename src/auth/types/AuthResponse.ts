import { IUser } from './User';

export interface AuthResponse {
	email?: string;
	password?: string;
	firstName?: string;
	lastName?: string;
	data?: IUser;
}
