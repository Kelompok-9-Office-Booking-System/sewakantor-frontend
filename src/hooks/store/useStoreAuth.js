import create from "zustand";
import { persist } from "zustand/middleware";

const useStoreAuth = create(
  persist(
    (set, get) => ({
      authData: "",
      authRole: "",
      authToken: "",
      fnLogin: (data, role, token) =>
        set({ authData: data, authRole: role, authToken: token }),
      fnLogout: () => set({ authData: "", authRole: "", authToken: "" }),
    }),
    {
      name: "sewakantor-user",
    }
  )
);

export default useStoreAuth;
