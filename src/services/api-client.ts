
import axios from "axios";

const port = import.meta.env.VITE_PORT || 3000;
// src/services/api-client.ts
console.log('API Client Port:', port); // Log the port to the console


export default axios.create({
    baseURL: `http://localhost:${port}/api`, // Pointing to the new Express server
    // baseURL: `http://localhost:3000/api`, // Pointing to the new Express server
    params: {
              key: import.meta.env.VITE_GAMES_API_KEY
            }
});
