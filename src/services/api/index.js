import http from 'axios';
import { responseTransformer, errorHandler } from '@/services/http';

const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'cTANBg2znYM0dJjMB066K813KXVScAQJ';

export function getGifsAPI() {
  return http
    .get(`${BASE_URL}/trending?api_key=${API_KEY}&limit=16`)
    .then(responseTransformer)
    .catch(error => errorHandler(error));
}

export function getGifByIdAPI(gifId) {
  console.log('here', gifId);
  return http
    .get(`${BASE_URL}/${gifId}?api_key=${API_KEY}`)
    .then(responseTransformer)
    .catch(error => errorHandler(error));
}

export default {
  getGifsAPI,
};
