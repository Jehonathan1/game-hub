// api/games.js
import axios from 'axios';

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {...req.query,
      key: process.env.VITE_GAMES_API_KEY
    }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
