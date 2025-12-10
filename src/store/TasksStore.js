import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useTasksStore = create(
  persist(
    (set, get) => ({
      tasks: [],

      addTask: (title) => {
        const newTask = {
          id: Date.now(),
          title,
          isCompleted: false,
        };

        set({
          tasks: [...get().tasks, newTask],
        });
      },

      toggleTaskStatus: (id) => {
        const updated = get().tasks.map((task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        );
        set({ tasks: updated });
      },

      deleteTask: (id) => {
        set({
          tasks: get().tasks.filter((task) => task.id !== id),
        });
      },

      clearAll: () => set({ tasks: [] }),
    }),

    {
      name: "tasks-storage", // clé AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
