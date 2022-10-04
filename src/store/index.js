import { createSlice, configureStore } from "@reduxjs/toolkit";

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
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  // reducer: { counter: counterSlice.reducer },
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
