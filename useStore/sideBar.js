import { create } from "zustand";
import { persist } from "zustand/middleware";

const sideBar = (set) => ({
  linkActive: "",
  titleActive: "",
  newRfq: 0,
  changeUser: 0,

  updateLinkActive: async (value) => set((store) => ({ linkActive: value })),
  updateTitleActive: async (value) => set((store) => ({ titleActive: value })),
  updateNewRfq: async (value) => set((store) => ({ newRfq: Math.random() })),
  updateChangeUser: async (value) => set((store) => ({ changeUser: Math.random() })),
});

export const SideBar = create(sideBar, { name: "sideBar" });
