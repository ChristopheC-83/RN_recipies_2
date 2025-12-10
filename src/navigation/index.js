import { NavigationContainer } from "@react-navigation/native";
import TasksScreen from "../screens/TasksScreen/TasksScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import RecipiesStask from "./RecipiesStack";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Recettes" component={RecipiesStask} icon={() => null} />
        <Tabs.Screen name="Liste" component={TasksScreen} />
        <Tabs.Screen name="Profil" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
