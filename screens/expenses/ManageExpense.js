import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../components/expenses/UI/Icon";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../components/expenses/UI/Button";

const ManageExpense = ({ route, navigation }) => {
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
    goBackHandler();
  };
  const cancelHandler = () => {
    goBackHandler();
  };
  const addOrUpdateHandler = () => {
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
          <Icon onPress={deleteHandler} name="trash" size={32} color={GlobalStyles.colors.error500} />
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
