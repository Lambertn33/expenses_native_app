import { FlatList, Text } from "react-native";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text>
          {item.description} - ${item.amount}
        </Text>
      )}
    />
  );
};

export default ExpensesList;
