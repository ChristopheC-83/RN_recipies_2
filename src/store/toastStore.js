import { create } from "zustand";

export const useToastStore = create((set) => ({
  toast: { visible: false, text: "", type: "success", duration: 1500 },
  showToast: ({ text, type = "success", duration = 1500 }) =>
    set({ toast: { visible: true, text, type, duration } }),
  hideToast: () =>
    set((state) => ({ toast: { ...state.toast, visible: false } })),
}));
