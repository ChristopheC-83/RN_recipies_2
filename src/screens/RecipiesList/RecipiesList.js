
import { s } from "./RecipiesList.style";
import { useEffect } from "react";
import { FlatList, Text, ActivityIndicator, View } from "react-native";
import { useRecipesStore } from "../../store/recipiesStore";
import RecipeTile from "../../components/RecipeTile/RecipeTile";


//  react navigation envoie la props navigation par defaut à tous les elements de la stack
export default function RecipiesList({navigation}) {
  const { recipes, loading, error, fetchRecipes } = useRecipesStore();

  useEffect(() => {
    fetchRecipes();
    // console.log(recipes);
  }, []);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={s}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        // renderItem={({ item }) => <Text>{item.title}</Text> }
        renderItem={({ item }) => <RecipeTile item={item} navigation={navigation} />}
      />
    </View>
  );
}
