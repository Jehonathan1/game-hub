import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development' ? '/api/rawg-proxy' : 'https://api.rawg.io/api';

export default axios.create({
    baseURL,
    params: {
        key: import.meta.env.VITE_GAMES_API_KEY
    }
});
