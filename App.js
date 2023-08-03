import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "./screens/expenses/ManageExpense";
import AllExpenses from "./screens/expenses/AllExpenses";
import LatestExpenses from "./screens/expenses/LatestExpenses";
import { GlobalStyles } from "./constants/styles";
import Icon from "./components/expenses/UI/Icon";
import ExpensesContextProvider from "./context/ExpensesContext";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
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
            <Icon
              name="add"
              color="white"
              size={32}
              onPress={() => navigation.navigate("manageExpense")}
            />
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

export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="expenses"
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: "white",
          }}
        >
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
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}
