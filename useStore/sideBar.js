import { create } from "zustand";
import { persist } from "zustand/middleware";

const sideBar = (set) => ({
  linkActive: "",
  titleActive: "",

  updateLinkActive: async (value) => set((store) => ({ linkActive: value })),
  updateTitleActive: async (value) => set((store) => ({ titleActive: value })),
});

export const SideBar = create(sideBar, { name: "sideBar" });
