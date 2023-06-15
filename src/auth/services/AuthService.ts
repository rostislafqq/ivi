/* eslint-disable import/no-extraneous-dependencies */
import { AxiosResponse } from 'axios';

import $api from '../http';
import { AuthResponse } from '../types/AuthResponse';
import { IUser } from '../types/User';

export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/auth/login', {
			email,
			password,
		});
	}

	static async registration(
		email: string,
		password: string,
		firstName: string,
		lastName: string,
		role = 0,
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/auth/register', {
			firstName,
			lastName,
			role,
			email,
			password,
		});
	}

	static getUser(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('/auth/getUser');
	}
}
