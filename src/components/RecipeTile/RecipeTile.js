import { View, Text, Image, Pressable } from "react-native";
import { s } from "./RecipeTile.style";

export default function RecipeTile({ item, navigation }) {


 
  return (
    <Pressable
      style={s.container}
      onPress={() =>
        navigation.navigate("Recipes Details", { recipeId: item.id })
      }
    >
      <Image source={{ uri: item.image }} style={s.image} />
      <View style={s.subContainer}>
        <Text style={s.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
}
