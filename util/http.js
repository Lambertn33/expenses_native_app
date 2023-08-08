import axios from "axios";

const BACKEND_URL = "http://192.168.1.64:5000/expenses";

const getExpenses = async () => {
  const response = await axios.get(BACKEND_URL);
  const { expenses } = await response.data;
  return expenses;
};

const createNewExpense = async (expense) => {
  const response = await axios.post(BACKEND_URL, expense);
  return await response.data;
};

const updateExpense = async (id, expense) => {
  const response = await axios.put(`${BACKEND_URL}/${id}`, expense);
  return await response.data;
};

const deleteExpense = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/${id}`);
  return await response.data;
};

export default {
  createNewExpense,
  getExpenses,
  deleteExpense,
  updateExpense
};
