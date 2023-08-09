import { useState, useContext } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Input from "../../components/expenses/UI/Input";
import Button from "../../components/expenses/UI/Button";
import Loader from "../../components/expenses/UI/Loader";
import { GlobalStyles } from "../../constants/styles";
import AuthServices from "../../util/http";
import { AuthContext } from "../../context/AuthContext";

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    names: "",
    email: "",
    password: "",
  });

  const authHandler = async () => {
    let user = {
      email: inputValues.email,
      password: inputValues.password,
    };
    if (
      inputValues.email.trim().length === 0 ||
      inputValues.password.trim().length === 0
    ) {
      Alert.alert("Error...", "please fill all the form");
      return;
    }

    if (!isLoginMode) {
      if (inputValues.names.trim().length === 0) {
        Alert.alert("Error...", "please fill all the form");
        return;
      }
      user = { ...user, names: inputValues.names };
    }
    try {
      setIsLoading(true);
      let response = isLoginMode
        ? await AuthServices.authenticate(user, "signin")
        : await AuthServices.authenticate(user, "signup");
      const { token } = await response;
      authCtx.authenticate(token);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error...", error.response.data.message);
    }
  };

  const toggleAuthMode = () => {
    setInputValues({
      email: "",
      password: "",
      names: "",
    });
    setIsLoginMode(!isLoginMode);
  };

  const inputChangedHandler = (input, value) => {
    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [input]: value,
      };
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.title}>{isLoginMode ? "Login" : "Signup"}</Text>
        <View style={styles.inputsRow}>
          {!isLoginMode && (
            <Input
              label="Names"
              otherProps={{
                keyboardType: "default",
                onChangeText: inputChangedHandler.bind(this, "names"),
                value: inputValues.names,
              }}
            />
          )}
          <Input
            label="Email"
            otherProps={{
              keyboardType: "email-address",
              onChangeText: inputChangedHandler.bind(this, "email"),
              value: inputValues.email,
            }}
          />
          <Input
            label="Password"
            otherProps={{
              secureTextEntry: true,
              onChangeText: inputChangedHandler.bind(this, "password"),
              value: inputValues.password,
            }}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={authHandler}>
            {isLoginMode ? "Login" : "Signup"}
          </Button>
          <TouchableOpacity onPress={toggleAuthMode}>
            <Text>
              {isLoginMode ? "No account Yet?" : "Already have an account?"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
    paddingHorizontal: 24,
  },
  form: {
    marginTop: 35,
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 24,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  inputsRow: {
    gap: 12,
  },
  inputRow: {
    flex: 1,
  },
});

export default Auth;
