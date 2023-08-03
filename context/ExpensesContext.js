import { React, useState, createContext } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (item) => {},
  updateExpense: (id, item) => {},
  deleteExpense: (id) => {},
});

const DUMMY_EXPENSES = [
  {
    id: 1,
    description: "React native course",
    amount: 13.99,
    date: new Date("2023-08-02"),
  },
  {
    id: 2,
    description: "A pair of shoes",
    amount: 24.39,
    date: new Date("2023-08-01"),
  },
  {
    id: 3,
    description: "React native course",
    amount: 13.99,
    date: new Date("2023-06-02"),
  },
  {
    id: 4,
    description: "A pair of shoes",
    amount: 24.39,
    date: new Date("2023-07-01"),
  },
];

const ExpensesContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

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
