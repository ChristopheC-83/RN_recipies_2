import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Test")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
        }}
      >
        <Text style={{ color: "white" }}>Go to test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "green",
        }}
      >
        <Text style={{ color: "white" }}>Go to Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}
