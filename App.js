import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ViewTodo from "./screen/ViewTodo";
import AddTodo from "./screen/AddTodo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewTodo">
        <Stack.Screen
          name="ViewTodo"
          component={ViewTodo}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
