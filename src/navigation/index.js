
import { s } from "./index.style";
import { View, Text, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipiesList from "../screens/RecipiesList/RecipiesList";
import TasksScreen from "../screens/TasksScreen/TasksScreen";
import RecipieDetails from "../screens/RecipeDetails/RecipeDetails";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Recipes List"
        //  on centre le titre
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        {/* initialRouteName permet de choisir l'ecran d'accueil sinon 1er stack pack.screen par defaut */}
        <Stack.Screen name="Recipes List" component={RecipiesList} />
        <Stack.Screen name="Tasks List" component={TasksScreen} />
        <Stack.Screen
          name="Recipes Details"
          component={RecipieDetails}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()} // ✅ ici le vrai retour
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginEnd: 10,
                }}
              >
                <Text>{"← "}Liste</Text>
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
