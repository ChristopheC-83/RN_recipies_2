import { View, Text, TextInput, Pressable } from "react-native";
import { s } from "./TaskForm.style";
import { useState, useRef } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  function handleAddTask() {
    if (!title.trim()) return;

    addTask(title.trim());
    setTitle("");

    // Rétablir le focus après ajout pour garder le clavier ouvert
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10); // petit délai pour que RN ne blur pas l’input
  }

  return (
    <View style={s.container}>
      <TextInput
        ref={inputRef}
        placeholder="Nouvelle tâche"
        onChangeText={setTitle}
        value={title}
        style={s.input}
        returnKeyType="done"
        onSubmitEditing={handleAddTask}
      />
      <Pressable
        onPress={handleAddTask}
        android_disableSound // optionnel
        style={s.btn}
      >
        <Text style={s.textBtn}>Ajouter</Text>
      </Pressable>
    </View>
  );
}
