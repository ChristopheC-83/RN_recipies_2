import { Pressable,View, Text, ScrollView } from "react-native";
import { s } from "./Profile.style";
import ScreenContainer from "../ScreenContainer/ScreenContainer";

export default function Profile({navigation}) {
  return (
    <ScreenContainer>
      <ScrollView style={s.profile}>
        <Text style={s.textProfile}>Profile 1</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Pressable
          onPress={() =>
            navigation.navigate("Recettes", {
              screen: "Recipes Details",
              params: { recipeId: 715415 }, // ce que tu veux
            })
          }
        >
          <Text>Voir la recette 155</Text>
        </Pressable>
        );
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
        <Text style={s.textProfile}>Profile</Text>
      </ScrollView>
    </ScreenContainer>
  );
}
