import { useContext } from "react";
import ExpensesOutput from "../../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../../context/ExpensesContext";
import Loader from "../../components/expenses/UI/Loader";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const expenses = expensesCtx.expenses;
  const isLoading = expensesCtx.isLoading;
  if (isLoading) {
    return <Loader />
  }
  return <ExpensesOutput period="All" expenses={expenses} />;
};

export default AllExpenses;
