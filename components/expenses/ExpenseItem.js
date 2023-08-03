import { Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

const ExpenseItem = ({ item }) => {
  const navigation = useNavigation();
  const ExpenseItemPressedHandler = () => {
    navigation.navigate("manageExpense", {
      expenseId: item.id,
    });
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={ExpenseItemPressedHandler}
    >
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.date}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
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
  descriptionContainer: {
    gap: 6,
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

  pressed: {
    opacity: 0.7,
  },
});
export default ExpenseItem;
