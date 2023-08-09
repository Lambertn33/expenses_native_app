import axios from "axios";

import { getToken } from "./token";

const BACKEND_URL = "http://192.168.1.64:5000";

const authenticate = async (user, mode) => {
  const response = await axios.post(`${BACKEND_URL}/auth/${mode}`, user);
  return await response.data;
};

const getExpenses = async () => {
  const token = await getToken();
  const response = await axios.get(`${BACKEND_URL}/expenses/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { expenses } = await response.data;
  return expenses;
};

const createNewExpense = async (expense) => {
  const token = await getToken();
  const response = await axios.post(`${BACKEND_URL}/expenses/`, expense, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.data;
};

const updateExpense = async (id, expense) => {
  const token = await getToken();
  const response = await axios.put(`${BACKEND_URL}/expenses/${id}`, expense, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.data;
};

const deleteExpense = async (id) => {
  const token = await getToken();
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
