import axios from 'axios';
import API_BASE_URL from '../config';

const croptypeAPI = axios.create({
  baseURL: `${API_BASE_URL}`,
});


export const getcroptypes = async () => {
  try {
    const response = await croptypeAPI.get('https://agro-admin-dashboard-api.vercel.app/api/crops');
    return response.data;
  } catch (error) {
    console.error('Error fetching crop:', error);
    throw error;
  }
};






