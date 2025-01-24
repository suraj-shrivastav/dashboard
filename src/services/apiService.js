import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Dashboard data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};