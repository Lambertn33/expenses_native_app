import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, period, user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>Welcome {user.names}</Text>
      <ExpensesSummary expenses={expenses} period={period} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    user: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: 16
    }
})

export default ExpensesOutput;
