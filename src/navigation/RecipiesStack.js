import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipiesList from "../screens/RecipiesList/RecipiesList";
import RecipeDetails from "../screens/RecipeDetails/RecipeDetails";

const Stack = createNativeStackNavigator();

export default function RecipiesStask() {
  return (
    <Stack.Navigator
      initialRouteName="Recipes List"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Recipes List" component={RecipiesList} />
      <Stack.Screen name="Recipes Details" component={RecipeDetails} />
    </Stack.Navigator>
  );
}
