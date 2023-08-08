import { useEffect, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesContext } from "../../context/ExpensesContext";
import ExpenseForm from "../../components/expenses/ExpenseForm";
import Icon from "../../components/expenses/UI/Icon";
import Loader from "../../components/expenses/UI/Loader";
import expensesServices from "../../util/http";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  const isLoading = expensesCtx.isLoading;
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const expenseToEdit = expensesCtx.expenses.find(
    (expense) => expense.id === expenseId
  );

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Edit Expense # ${expenseId}` : "Add New Expense",
    });
  }, [navigation, isEditing]);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const cancelHandler = () => {
    goBackHandler();
  };

  const deleteHandler = async () => {
    await expensesServices.deleteExpense(expenseId);
    expensesCtx.deleteExpense(expenseId);
    goBackHandler();
  };

  const addOrUpdateHandler = (expenseData) => {
    isEditing
      ? expensesCtx.updateExpense(expenseId, expenseData)
      : expensesCtx.addExpense(expenseData);
    goBackHandler();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        title={isEditing ? "Edit expense" : "Create expense"}
        createOrUpdateBtnLabel={isEditing ? "Edit" : "Create"}
        expenseToEdit={expenseToEdit}
        onCancel={cancelHandler}
        onCreateOrUpdate={addOrUpdateHandler}
      />
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
});

export default ManageExpense;
