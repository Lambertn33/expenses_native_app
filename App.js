import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

import ManageExpense from "./screens/expenses/ManageExpense";
import AllExpenses from "./screens/expenses/AllExpenses";
import LatestExpenses from "./screens/expenses/LatestExpenses";
import Auth from "./screens/auth/Auth";
import { GlobalStyles } from "./constants/styles";
import Icon from "./components/expenses/UI/Icon";
import ExpensesContextProvider from "./context/ExpensesContext";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="add"
                color="white"
                size={32}
                onPress={() => navigation.navigate("manageExpense")}
              />
              <Icon name="log-out" color="white" size={32} onPress={authCtx.logout} />
            </View>
          ),
        };
      }}
    >
      <Tabs.Screen
        name="latestExpenses"
        component={LatestExpenses}
        options={{
          title: "Latest Expenses",
          tabBarLabel: "Latest",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="allExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const ProtectedStack = () => {
  return (
    <ExpensesContextProvider>
      <Stack.Navigator initialRouteName="expenses">
        <Stack.Screen name="manageExpense" component={ManageExpense} />
        <Stack.Screen
          name="expenses"
          component={TabNavigator}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </ExpensesContextProvider>
  );
};

const PublicStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Welcome to expenses App",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="auth" component={Auth} />
    </Stack.Navigator>
  );
};

const Root = () => {
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isAuthenticated;
  return (
    <NavigationContainer>
      {isAuthenticated ? <ProtectedStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
