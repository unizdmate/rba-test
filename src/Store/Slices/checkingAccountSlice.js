import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCheckingAccountIncomingPayments,
  fetchCheckingAccountOutgoingPayments,
} from "../../Api/checkingAccountApi";

export const getCheckingAccountIncomingPayments = createAsyncThunk(
  "checkingAccount/getIncomingPayments",
  async () => {
    const response = await fetchCheckingAccountIncomingPayments();
    return response;
  }
);

export const getCheckingAccountOutgoingPayments = createAsyncThunk(
  "checkingAccount/getOutgoingPayments",
  async () => {
    const response = await fetchCheckingAccountOutgoingPayments();
    return response;
  }
);

const initialState = {
  incomingPayments: [],
  outgoingPayments: [],
  status: null,
};

export const checkingAccountSlice = createSlice({
  name: "checkingAccount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCheckingAccountIncomingPayments.pending, (state, action) => {
        return {
          ...state,
          status: "pending",
        };
      })
      .addCase(
        getCheckingAccountIncomingPayments.fulfilled,
        (state, action) => {
          return {
            ...state,
            incomingPayments: action.payload,
            status: "ready",
          };
        }
      )
      .addCase(getCheckingAccountIncomingPayments.rejected, (state, action) => {
        return {
          ...state,
          status: "error",
        };
      })
      .addCase(getCheckingAccountOutgoingPayments.pending, (state, action) => {
        return {
          ...state,
          status: "pending",
        };
      })
      .addCase(
        getCheckingAccountOutgoingPayments.fulfilled,
        (state, action) => {
          return {
            ...state,
            outgoingPayments: action.payload,
            status: "ready",
          };
        }
      )
      .addCase(getCheckingAccountOutgoingPayments.rejected, (state, action) => {
        return {
          ...state,
          status: "error",
        };
      });
  },
});

const { actions, reducer } = checkingAccountSlice;
export const {} = actions;
export { reducer as checkingAccountReducer };
