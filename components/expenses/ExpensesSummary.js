import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, period }) => {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 12,
    borderRadius: 6
  },

  period: {
    color: GlobalStyles.colors.primary400,
    fontWeight: '400'
  },

  sum: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary700,
    fontSize: 16
  }
});

export default ExpensesSummary;
