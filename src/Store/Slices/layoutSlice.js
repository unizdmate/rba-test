import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNavItem: "accounts",
  selectedTab: "balances",
  selectedAccount: "checkingAccount",
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
    setSelectedAccount: (state, action) => {
      return {
        ...state,
        selectedAccount: action.payload,
      };
    },
    setSelectedTab: (state, action) => {
      return {
        ...state,
        selectedTab: action.payload,
      };
    },
  },
});

const { actions, reducer } = layoutSlice;
export const { setSelectedNavItem, setSelectedTab, setSelectedAccount } =
  actions;
export { reducer as layoutReducer };
