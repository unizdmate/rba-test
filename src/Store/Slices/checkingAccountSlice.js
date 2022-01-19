import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCheckingAccountIncomingPayments = createAsyncThunk(
  "checkingAccount/getIncomingPayments",
  async () => {
    const response = await initialState.incomingPayments.fetch();
    return response;
  }
);

export const getCheckingAccountOutgoingPayments = createAsyncThunk(
  "checkingAccount/getOutgoingPayments",
  async () => {
    const response = await initialState.outgoingPayments.fetch();
    return response;
  }
);

const initialState = {
  incomingPayments: [
    { date: new Date("2017-02-03"), payer: "Marija Marić", amount: 1200.25 },
    { date: new Date("2017-03-04"), payer: "Pero Perić", amount: 825.55 },
    { date: new Date("2018-04-05"), payer: "Ivo Ivić", amount: 1012.66 },
    { date: new Date("2019-09-06"), payer: "Jure Jurić", amount: 460.11 },
    { date: new Date("2020-03-03"), payer: "Stipe Stipanović", amount: 510.55 },
  ],
  outgoingPayments: [
    { date: new Date("2018-07-03"), payee: "Lovre Lovrić", amount: 220.25 },
    { date: new Date("2018-07-04"), payee: "Vice Vicković", amount: 425.55 },
    { date: new Date("2019-08-05"), payee: "Šime Šimić", amount: 912.66 },
    {
      date: new Date("2020-08-06"),
      payee: "Martin Martinović",
      amount: 480.11,
    },
    { date: new Date("2021-09-03"), payee: "Ivana Ivandić", amount: 590.55 },
  ],
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
        incomingPayments: [action.payload, ...state.incomingPayments],
        accountBalance: state.accountBalance + Number(action.payload.amount),
        remainingBalance:
          state.remainingBalance + Number(action.payload.amount),
      };
    },
    handleOutgoingPayment: (state, action) => {
      return {
        ...state,
        outgoingPayments: [action.payload, ...state.outgoingPayments],
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
