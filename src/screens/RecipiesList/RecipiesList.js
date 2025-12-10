import { s } from "./RecipiesList.style";
import { useEffect } from "react";
import { FlatList, Text, ActivityIndicator, View } from "react-native";
import { useRecipesStore } from "../../store/recipiesStore";
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import ScreenContainer from "../ScreenContainer/ScreenContainer";

//  react navigation envoie la props navigation par defaut à tous les elements de la stack
export default function RecipiesList({ navigation }) {
  const { recipes, loading, error, fetchRecipes } = useRecipesStore();

  useEffect(() => {
    fetchRecipes();
    // console.log(recipes);
  }, []);

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScreenContainer>
      <View style={s}>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          // renderItem={({ item }) => <Text>{item.title}</Text> }
          renderItem={({ item }) => (
            <RecipeTile item={item} navigation={navigation} />
          )}
          onEndReached={() => fetchRecipes()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator style={{ margin: 20 }} /> : null
          }
        />
      </View>
    </ScreenContainer>
  );
}
