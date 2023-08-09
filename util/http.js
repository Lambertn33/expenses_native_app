import axios from "axios";

const BACKEND_URL = "http://192.168.1.64:5000";

const signup = async (newUser) => {
  const response = await axios.post(`${BACKEND_URL}/auth/signup`, newUser);
  console.log(await response.data);
  return await response.data;
};
const signin = async (user) => {
  const response = await axios.post(`${BACKEND_URL}/auth/signin`, user);
  console.log(await response.data);
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
  signin,
  signup,
  createNewExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
};
