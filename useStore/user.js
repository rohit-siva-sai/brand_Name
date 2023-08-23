import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  username: { firstName: "", lastName: "" },
  job: { jobTitle: "",jobCategory: "",jobLevel: ""},
  userAddress: { bussinessAddress: "", city: "", state: "", pincode: null,country: "" },
  country: "",
  comapnyWebsite: "",
  linkedinProfile: "",
  phoneNumber: "",
  userId: "",
  userEmail: null,
  userDetails: {},

  updateUserName: async (user) => set((store) => ({ username: user })),
  updateAddress: async (address) => set((store) => ({ userAddress: address })),
  updateUserEmail: async (email) => set((store) => ({ userEmail: email })),
  updateCountry: async (country) => set((store) => ({ country: country })),
  updatePhoneNumber: async (phoneNumber) =>
    set((store) => ({ phoneNumber: phoneNumber })),
  updateUserId: async (userId) => set((store) => ({ userId: userId })),
  updateJob: async (title) => set((store) => ({ job: title })),
  updateUserDetails: async (user) => set((store) => ({ userDetails: user })),
  updateCompanyWebsite: async (url) =>
    set((store) => ({ comapnyWebsite: url })),
  updateLinkedinProfile: async (profile) =>
    set((store) => ({ linkedinProfile: profile })),
});

export const User = create(user, { name: "user" });
