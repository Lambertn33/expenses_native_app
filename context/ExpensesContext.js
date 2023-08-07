import { React, useState, useEffect, createContext } from "react";
import expensesServices from "../util/http";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (item) => {},
  updateExpense: (id, item) => {},
  deleteExpense: (id) => {},
});

const ExpensesContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const realExpenses = [];
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
    };

    fetchExpenses();
  }, []);

  const addExpense = (newExpense) =>
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });

  const updateExpense = (id, updatedItemData) => {
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
