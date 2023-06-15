/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

export const API_URL = `http://localhost:4000`;

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
	const modifiedConfig = { ...config };
	modifiedConfig.headers.Authorization = `Bearer ${localStorage.getItem('token')!}`;
	modifiedConfig.headers['Access-Control-Allow-Origin'] = 'http://localhost:4000';
	return modifiedConfig;
});

export default $api;
