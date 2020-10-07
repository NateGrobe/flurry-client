import axios from 'axios';
const baseUrl = 'api/decks';

async function getAll() {
  const res = await axios.get(baseUrl);
  return res.data;
}

export default {
  getAll,
};
