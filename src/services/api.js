import axios from 'axios';

const API_URL = 'https://jobportal-backend-hb98.onrender.com';

// Axios instance for default settings
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Ensures cookies are sent for authentication
});

// Function to handle API requests safely
const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch user role
export const getUserRole = () => handleRequest(() => api.get('/userRole'));

// Fetch all jobs
export const getJobs = () => handleRequest(() => api.get('/jobs', { withCredentials: false }));

// Add a new job
export const addJob = (jobData) => handleRequest(() => api.post('/add', jobData));

