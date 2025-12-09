import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    flex: 1,
  },
  checkIcon: { width: 24, height: 24 },
  title: { fontSize: 18, flexShrink: 1 },
  completedTitle: {
    textDecorationLine: "line-through",
  },
  BinIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});
