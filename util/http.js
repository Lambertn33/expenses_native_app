import axios from "axios";

const BACKEND_URL = "http://192.168.1.64:5000";

const authenticate = async (user, mode) => {
  const response = await axios.post(`${BACKEND_URL}/auth/${mode}`, user);
  return await response.data;
};

const getExpenses = async () => {
  const response = await axios.get(`${BACKEND_URL}/expenses/`);
  const { expenses } = await response.data;
  return expenses;
};

const createNewExpense = async (expense) => {
  const response = await axios.post(`${BACKEND_URL}/expenses/`, expense);
  return await response.data;
};

const updateExpense = async (id, expense) => {
  const response = await axios.put(`${BACKEND_URL}/expenses/${id}`, expense);
  return await response.data;
};

const deleteExpense = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/expenses/${id}`);
  return await response.data;
};

export default {
  authenticate,
  createNewExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
};
