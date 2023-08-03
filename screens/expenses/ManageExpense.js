import { useEffect, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Icon from "../../components/expenses/UI/Icon";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../components/expenses/UI/Button";
import { ExpensesContext } from "../../context/ExpensesContext";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Edit Expense # ${expenseId}` : "Add New Expense",
    });
  }, [navigation, isEditing]);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const deleteHandler = () => {
    Alert.alert(
      "Delete Expense",
      "are you sure you want to delete this expense",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () => {
            expensesCtx.deleteExpense(expenseId);
            goBackHandler();
          },
        },
      ],
      { cancelable: false }
    );
  };
  const cancelHandler = () => {
    goBackHandler();
  };
  const addOrUpdateHandler = () => {
    if (isEditing) {
      const editedExpense = {
        id: Math.floor(Math.random() * (1000 - 2 + 1) + 2),
        description: "Edited...",
        amount: 12.39,
        date: new Date("2023-08-02"),
      };
      expensesCtx.updateExpense(expenseId, editedExpense);
    } else {
      const newExpense = {
        id: Math.floor(Math.random() * (1000 - 2 + 1) + 2),
        description: "Swimming",
        amount: 123.39,
        date: new Date("2023-08-02"),
      };
      expensesCtx.addExpense(newExpense);
    }
    goBackHandler();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button onPress={cancelHandler}>Cancel</Button>
        <Button onPress={addOrUpdateHandler}>
          {isEditing ? "Update" : "Create"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Icon
            onPress={deleteHandler}
            name="trash"
            size={32}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: GlobalStyles.colors.primary800,
    gap: 12,
  },
  deleteContainer: {
    flexDirection: "column",
    alignItems: "center",
    borderTopColor: "white",
    borderTopWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
});

export default ManageExpense;
