import { View, Text, FlatList } from "react-native";
import ExpensesList from "../ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: 1,
    description: "React native course",
    amount: 13.99,
  },
  {
    id: 2,
    description: "A pair of shoes",
    amount: 24.39,
  },
  {
    id: 3,
    description: "Gym",
    amount: 39.99,
  },
  {
    id: 4,
    description: "Choir contribution",
    amount: 5.99,
  },
];

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
