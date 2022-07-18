import create from "zustand";

const initialValue = {
  type: "",
  minPrice: 0,
  maxPrice: 0,
  minRating: 0,
  maxRating: 5,
  query: "",
};

const useStoreSearchQuery = create((set, get) => ({
  searchQuery: initialValue,
  fnSetSearchQuery: (key, value) =>
    set({ searchQuery: { ...get().searchQuery, [key]: value } }),
  fnRemoveSearchQuery: (key) => {
    delete get().searchQuery[key];
    set({ searchQuery: { ...get().searchQuery } });
  },
  fnResetSelectedKey: (key) => {
    set({ searchQuery: { ...get().searchQuery, [key]: initialValue[key] } });
  },
  fnResetSearchQuery: () => {
    set({
      searchQuery: initialValue,
    });
  },
}));

export default useStoreSearchQuery;
