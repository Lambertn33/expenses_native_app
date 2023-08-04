import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./UI/Button";
import Input from "./UI/Input";

const ExpenseForm = ({
  title,
  onCancel,
  onCreateOrUpdate,
  createOrUpdateBtnLabel,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangedHandler = (input, value) => {
    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [input]: value,
      };
    });
  };

  const createOrUpdateHandler = () => {
    const { amount, date, description } = inputValues;
    const expenseData = {
      id: Math.floor(Math.random() * (1000 - 2 + 1) + 2),
      amount: +amount,
      date: new Date(date),
      description: description,
    };
    onCreateOrUpdate(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputsRow}>
        <View style={styles.inputRow}>
          <Input
            label="Amount"
            otherProps={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangedHandler.bind(this, "amount"),
              value: inputValues.amount,
            }}
          />
        </View>
        <View style={styles.inputRow}>
          <Input
            label="Date"
            otherProps={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, "date"),
              value: inputValues.date,
            }}
          />
        </View>
      </View>
      <Input
        label="Description"
        otherProps={{
          keyboardType: "default",
          multiline: true,
          numberOfLines: 4,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={onCancel}>Cancel</Button>
        <Button onPress={createOrUpdateHandler}>
          {createOrUpdateBtnLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 35,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  inputsRow: {
    flexDirection: "row",
    gap: 12,
  },
  inputRow: {
    flex: 1,
  },
});

export default ExpenseForm;
