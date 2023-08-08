import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext";
import ExpensesOutput from "../../components/expenses/ExpensesOutput";
import { getDateMinusDays } from "../../util/date";
import Loader from "../../components/expenses/UI/Loader";

const LatestExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const { expenses, isLoading } = expensesCtx;
  const recentExpenses = expenses.filter((expense) => {
    return expense.date > getDateMinusDays(new Date(), 7);
  });
  if (isLoading) {
    return <Loader />;
  }
  return <ExpensesOutput period="Last 7 days" expenses={recentExpenses} />;
};

export default LatestExpenses;
