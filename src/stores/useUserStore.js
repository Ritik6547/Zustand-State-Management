import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: "",
  fetchUsers: async (url) => {
    if (!url) {
      set({ error: "Url is Required!" });
      return;
    }
    try {
      set({ loading: true, error: "" });
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      if (!data.length) {
        set({ error: "No data Found", loading: false });
        return;
      }
      set({ users: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
