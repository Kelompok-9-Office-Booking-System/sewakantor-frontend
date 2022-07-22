import create from "zustand";
import { persist } from "zustand/middleware";
import { encrypt } from "../../utils/encryption.js";
import { defaultAvatarBase64 } from "./defaultAvatarBase64.js";

const useStoreAuth = create(
  persist(
    (set, get) => ({
      authData: "",
      authRole: "",
      authToken: "",
      authAvatar: encrypt(defaultAvatarBase64),
      fnLogin: (data, role, token) =>
        set({
          authData: data,
          authRole: role,
          authToken: token,
          authAvatar: encrypt(defaultAvatarBase64),
        }),
      fnLogout: () =>
        set({ authData: "", authRole: "", authToken: "", authAvatar: "" }),
    }),
    {
      name: "sewakantor-user",
    }
  )
);

export default useStoreAuth;
