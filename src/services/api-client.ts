
import axios from "axios";

const port = import.meta.env.VITE_PORT || 3000;
// src/services/api-client.ts
console.log('API Client Port:', port); // Log the port to the console


export default axios.create({
    // DEVbaseURL: `http://localhost:${port}/api`, // Pointing to the new Express server
    baseURL: `https://game-hub-1puq.onrender.com/api`, // Pointing to the new Express server

    params: {
              key: import.meta.env.VITE_GAMES_API_KEY
            }
});
