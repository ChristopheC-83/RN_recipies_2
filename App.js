import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, Pressable } from "react-native";
import HomeScreen from "./src/screens/Home/Home";
import TestScreen from "./src/screens/Test/Test";
import RecipiesList from "./src/screens/RecipiesList/RecipiesList";
import RecipieDetails from "./src/screens/RecipeDetails/RecipeDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1, backgroundColor: "#ddd" }}>
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
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}
