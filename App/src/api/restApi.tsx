import axios from 'axios';
import { AsyncStorage } from 'react-native';

// Create instance
let instance = axios.create({
	// baseURL: 'http://localhost:3005',
	baseURL: 'https://apps-restapi.herokuapp.com',
});

// Set the AUTH token for any request
instance.interceptors.request.use(async (config) => {
	const token = await AsyncStorage.getItem('userAccessToken');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});

export default instance;
