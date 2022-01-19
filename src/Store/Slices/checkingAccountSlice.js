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
  accountBalance: 7154.5,
  remainingBalance: 6754.45,
  status: null,
};

export const checkingAccountSlice = createSlice({
  name: "checkingAccount",
  initialState,
  reducers: {
    handleIncomingPayment: (state, action) => {
      return {
        ...state,
        incomingPayments: [...state.incomingPayments, action.payload],
        accountBalance: state.accountBalance + Number(action.payload.amount),
        remainingBalance:
          state.remainingBalance + Number(action.payload.amount),
      };
    },
    handleOutgoingPayment: (state, action) => {
      return {
        ...state,
        outgoingPayments: [...state.outgoingPayments, action.payload],
        accountBalance: state.accountBalance - Number(action.payload.amount),
        remainingBalance:
          state.remainingBalance - Number(action.payload.amount),
      };
    },
  },
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
export const { handleIncomingPayment, handleOutgoingPayment } = actions;
export { reducer as checkingAccountReducer };
