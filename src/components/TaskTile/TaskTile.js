import { View, Text, Image, Pressable } from "react-native";
import { s } from "./TaskTile.style";

export default function TaskTile({ task, toggleTaskStatus, deleteTask }) {
  function handleStatus() {
    toggleTaskStatus(task.id);
  }
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  const icon = task.isCompleted
    ? require("../../../assets/icons/check_green.png")
    : require("../../../assets/icons/circle_black.png");

  return (
    <View style={s.container}>
      <Pressable style={s.subContainer} onPress={handleStatus}>
        <Image source={icon} style={s.checkIcon} />
        <Text style={[s.title, task.isCompleted && s.completedTitle]}>
          {task.title}
        </Text>
      </Pressable>
      <Pressable onPress={handleDeleteTask}>
        <Image
          source={require("../../../assets/icons/bin_black.png")}
          style={s.BinIcon}
        />
      </Pressable>
    </View>
  );
}
