// api/rawg-proxy.ts
import express from 'express';
import axios from 'axios';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.get('/games', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/genres', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/genres', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/platforms/lists/parents', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/platforms/lists/parents', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/api/rawg-proxy', router);

module.exports.handler = serverless(app);
