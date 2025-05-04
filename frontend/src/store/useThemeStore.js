import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Talknow-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Talknow-theme", theme);
    set({ theme });
  },
}));