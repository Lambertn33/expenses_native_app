import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext";
import ExpensesOutput from "../../components/expenses/ExpensesOutput";
import { getDateMinusDays } from "../../util/date";

const LatestExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    return expense.date > getDateMinusDays(new Date(), 7);
  })
  return <ExpensesOutput period="Last 7 days" expenses={recentExpenses} />;
};

export default LatestExpenses;
