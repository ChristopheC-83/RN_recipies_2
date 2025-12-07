import { View, Text, Pressable, ActivityIndicator, Image } from "react-native";
import { s } from "./RecipeDetails.style";
import { useEffect, useState } from "react";
import { useRecipeDetailsStore } from "../../store/recipiesDetailsStore";

export default function RecipeDetails({ navigation, route }) {
  const { recipeId } = route.params;
  const { details, loading, error, getRecipeById } = useRecipeDetailsStore();

  const [currentRecipe, setCurrentRecipe] = useState(details[recipeId] || null);

  useEffect(() => {
    let isActive = true;

    const fetchRecipe = async () => {
      const data = await getRecipeById(recipeId);
      if (isActive) setCurrentRecipe(data);
    };

    fetchRecipe();

    return () => {
      isActive = false;
    };
  }, [recipeId]);

  if (loading && !currentRecipe) return <ActivityIndicator size="large" />;
  if (error) return <Text style={s.error}>Erreur : {error.message}</Text>;
  if (!currentRecipe)
    return <Text style={s.info}>Aucune recette trouvée...</Text>;

  return (
    <View style={s.container}>
      {/* retour en arriere ou une autre page au besoin */}
      {/* <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable> */}
      <Image source={{ uri: currentRecipe.image }} style={s.image} />
      <Text style={s.title}>{currentRecipe.title}</Text>
          <Text style={s.caption}> ⏱️Prêt en {currentRecipe.readyInMinutes} minutes.</Text>
          <View>
              
              {/* {currentRecipe.extendedIngredients.map()} */}
          </View>

      {/* {localRecipe && (
        <View>
          <Text>{localRecipe.title}</Text>
        </View>
      )} */}
    </View>
  );
}
