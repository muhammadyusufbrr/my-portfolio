import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DropdownSlice = {
  isContactsDropdownOpen: boolean;
  isFindMeDropdownOpen: boolean;
  isProjectDropdownOpen: boolean;
  isAboutContactsDropdownOpen: boolean;
  isPersonalInfoDropdownOpen: boolean;
};

const loadState = (): DropdownSlice => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("dropdownSlice");
    if (saved) return JSON.parse(saved);
  }
  return {
    isContactsDropdownOpen: true,
    isFindMeDropdownOpen: true,
    isProjectDropdownOpen: true,
    isAboutContactsDropdownOpen: true,
    isPersonalInfoDropdownOpen: true,
  };
};

const initialState: DropdownSlice = loadState();
const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<keyof DropdownSlice>) => {
      const key = action.payload;
      state[key] = !state[key];
      if (typeof window !== "undefined") {
        localStorage.setItem("dropdownSlice", JSON.stringify(state));
      }
    },
    closeAllDropdowns: (state) => {
      for (const dropdown in state) {
        state[dropdown as keyof DropdownSlice] = false;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("dropdownSlice", JSON.stringify(state));
      }
    },
  },
});

export const { toggleDropdown, closeAllDropdowns } = dropdownSlice.actions;
export default dropdownSlice.reducer;
