import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
