import { View, Text, FlatList, ScrollView } from "react-native";
import { s } from "./TasksScreen.style";
import Header from "../../components/Header/Header";
import TaskTile from "../../components/TaskTile/TaskTile";
import TaskForm from "../../components/TaskForm/TaskForm";
import { useTasksStore } from "../../store/TasksStore";
import ScreenContainer from "../ScreenContainer/ScreenContainer";

export default function TasksScreen() {
  const { tasks, addTask, toggleTaskStatus, deleteTask } = useTasksStore();

  const todoTasks = tasks.filter((t) => !t.isCompleted);
  const doneTasks = tasks.filter((t) => t.isCompleted);

  return (
    <ScreenContainer >
      <ScrollView>
        <Text style={s.test}>Tasks</Text>

        {/* Form */}
        <Header />
        <TaskForm addTask={addTask} />

        {/* À faire */}
        <Text style={s.sectionTitle}>À faire</Text>
        <FlatList
          data={todoTasks}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskTile
              task={item}
              toggleTaskStatus={() => toggleTaskStatus(item.id)}
              deleteTask={() => deleteTask(item.id)}
            />
          )}
        />

        {/* Fait */}
        <Text style={s.sectionTitle}>Fait</Text>
        <FlatList
          data={doneTasks}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskTile
              task={item}
              toggleTaskStatus={() => toggleTaskStatus(item.id)}
              deleteTask={() => deleteTask(item.id)}
            />
          )}
        />
      </ScrollView>
    </ScreenContainer>
  );
}
