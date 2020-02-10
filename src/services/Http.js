import axios from 'axios';

const Http = axios.create({ baseURL: 'http://localhost:3000' }); // Provisional. This param must come from .env

export const ENDPOINT = {
  PEOPLE: 'people',
};

export default Http;