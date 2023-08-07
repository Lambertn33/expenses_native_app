import axios from "axios";

const BACKEND_URL = "http://192.168.1.64:5000/expenses";

const getExpenses = async () => {
  try {
    const response = await axios.get(BACKEND_URL);
    const { expenses } = await response.data;
    return expenses;
  } catch (error) {
    console.log("error", error);
  }
};

const createNewExpense = async (expense) => {
  try {
    const response = await axios.post(BACKEND_URL, expense);
    return await response.data;
  } catch (error) {}
};

export default {
  createNewExpense,
  getExpenses,
};
