import axios from 'axios';
const API_URL = 'https://languagelearnbackend.onrender.com/api';

export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data;
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Signup failed' 
    };
  }
};
