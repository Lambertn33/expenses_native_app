import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ManageExpense from "./screens/expenses/ManageExpense";
import AllExpenses from "./screens/expenses/AllExpenses";
import LatestExpenses from "./screens/expenses/LatestExpenses";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="latestExpenses" component={LatestExpenses} />
      <Tabs.Screen name="allExpenses" component={AllExpenses} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="expenses">
        <Stack.Screen name="manageExpense" component={ManageExpense} />
        <Stack.Screen name="expenses" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
