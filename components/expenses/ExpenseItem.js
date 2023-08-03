import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpenseItem = ({ item }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.date}>{item.date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
  },
  description: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  date: {
    color: "white",
    fontWeight: "400",
  },
  amountContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 6,
    elevation: 1,
  },
  amount: {
    fontWeight: "800",
  },
});
export default ExpenseItem;
