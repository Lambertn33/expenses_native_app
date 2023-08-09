import { React, useState, useEffect, createContext } from "react";
import expensesServices from "../util/http";

export const ExpensesContext = createContext({
  expenses: [],
  isLoading: true,
  addExpense: (item) => {},
  updateExpense: (id, item) => {},
  deleteExpense: (id) => {},
});

const ExpensesContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const realExpenses = [];
      setisLoading(true);
      const fetchedExpenses = await expensesServices.getExpenses();
      for (const exp of fetchedExpenses) {
        const expense = {
          id: exp.id,
          amount: +exp.amount,
          date: new Date(exp.date),
          description: exp.description,
        };
        realExpenses.push(expense);
      }
      setExpenses(realExpenses);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (newExpense) => {
    expensesServices.createNewExpense(newExpense);
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  const updateExpense = async (id, updatedItemData) => {
    await expensesServices.updateExpense(id, updatedItemData);
    const expenseToUpdateIndex = expenses.findIndex(
      (expense) => expense.id === id
    );

    const updatedExpenses = [...expenses];
    const updatableExpense = updatedExpenses[expenseToUpdateIndex];
    const updatedItem = { ...updatableExpense, ...updatedItemData };
    updatedExpenses[expenseToUpdateIndex] = updatedItem;
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses);
  };

  const value = {
    expenses: expenses,
    isLoading: isLoading,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
