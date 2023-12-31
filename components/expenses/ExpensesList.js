import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
       <ExpenseItem item={item} key={item.id}/>
      )}
    />
  );
};

export default ExpensesList;
