import axios from 'axios';

export const strapiApi = axios.create({
	baseURL: process.env.strapiBaseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});
