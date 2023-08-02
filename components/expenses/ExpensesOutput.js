import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

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
    description: "Gym",
    amount: 39.99,
    date: new Date("2023-07-31"),
  },
  {
    id: 4,
    description: "Choir contribution",
    amount: 5.99,
    date: new Date("2023-07-24"),
  },
];

const ExpensesOutput = ({ expenses, period }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})

export default ExpensesOutput;
