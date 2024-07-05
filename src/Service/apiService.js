
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const fetchPublish = async () => {
  try {
    const response = await axios.get(`${API_URL}/publish`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as publicações:', error);
    return [];
  }
};

const fetchComments = async (publishId) => {
  try {
    const response = await axios.get(`${API_URL}/comments/publish/${publishId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os comentários:', error);
    return [];
  }
};

export { fetchPublish, fetchComments };
