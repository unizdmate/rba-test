import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNavItem: "accounts",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSelectedNavItem: (state, action) => {
      return {
        ...state,
        selectedNavItem: action.payload,
      };
    },
  },
});

const { actions, reducer } = layoutSlice;
export const { setSelectedNavItem } = actions;
export { reducer as layoutReducer };
