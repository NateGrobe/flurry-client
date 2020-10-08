import axios from 'axios';
const baseUrl = '/api/cards';

async function getAll() {
  const res = await axios.get(baseUrl);
  return res.data;
}

async function createCard(obj) {
  const res = await axios.post(baseUrl, obj);
  return res.data;
}

async function removeCard(cardId) {
  return await axios.delete(`${baseUrl}/${cardId}`);
}

async function updateCard(id, obj) {
  const res = await axios.put(`${baseUrl}/${id}`, obj);
  return res.data;
}

export default {
  getAll,
  createCard,
  removeCard,
  updateCard,
};
