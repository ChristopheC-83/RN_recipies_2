import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
        gap: 10,
    marginVertical: 10,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    borderWidth: 3,
    flex: 1,
  },
  btn: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
      backgroundColor: "#333",
  },
  textBtn: { color: "#eee" },
});
