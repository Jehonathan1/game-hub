import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file


const app = express();
const port = process.env.VITE_PORT || 3000; // You can choose another port if this one is in use

app.use(cors());

app.get('/api/:endpoint*', async (req, res) => {
  try {
    const endpoint = req.params.endpoint + (req.params[0] || '');
    console.log('Requested Endpoint:', endpoint); // Log the endpoint to the console
    
    const response = await axios.get(`https://api.rawg.io/api/${endpoint}`, {
      params: { ...req.query, key: process.env.VITE_GAMES_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: `${error.message}` });
  }
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
