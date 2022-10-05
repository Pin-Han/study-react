import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // Bacause redux tookit use IMMER internally to let us write simple immutable code
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // The payload is named by redux tookit
      state.counter = state.counter + action.counter;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
