import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from 'express';
import axios from 'axios';
import serverless from 'serverless-http';

// Initialize Express app
const app = express();
const router = express.Router();

// Define routes for your serverless function
router.get('/api/rawg-proxy/games', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/api/rawg-proxy/genres', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/genres', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/api/rawg-proxy/platforms/lists/parents', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/platforms/lists/parents', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(router);

// Define Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173', // Replace with your Vite development server port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
