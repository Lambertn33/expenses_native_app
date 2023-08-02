import { Text, View } from "react-native";

const ExpensesSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>Last 7 days</Text>
      <Text>${total}</Text>
    </View>
  );
};

export default ExpensesSummary;
