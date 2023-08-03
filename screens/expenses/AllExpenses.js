import { useContext } from "react";
import ExpensesOutput from "../../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../../context/ExpensesContext";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput period="All" expenses={expensesCtx.expenses} />;
};

export default AllExpenses;
