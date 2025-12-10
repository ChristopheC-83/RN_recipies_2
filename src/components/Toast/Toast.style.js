import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    zIndex: 1000,
  },
  text: { color: "#fff", fontWeight: "bold" },
  success: { backgroundColor: "#4CAF50" },
  info: { backgroundColor: "#2196F3" },
  warning: { backgroundColor: "#FF9800" },
  danger: { backgroundColor: "#F44336" },
});
