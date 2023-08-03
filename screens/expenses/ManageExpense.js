import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../components/expenses/UI/Icon";
import { GlobalStyles } from "../../constants/styles";

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Edit Expense # ${expenseId}` : "Add New Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Icon name="trash" size={32} color={GlobalStyles.colors.error500} />
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
    },
    deleteContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        borderTopColor: 'white',
        borderTopWidth: 2,
    }
})

export default ManageExpense;
