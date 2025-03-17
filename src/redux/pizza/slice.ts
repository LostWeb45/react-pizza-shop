import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza, PizzaSliceState, Status } from "./types";
import { fetchPizzas } from "./asyncActions";

// type FetchPizzasArgs = Record<string, string>;

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | succes | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        console.error("Ошибка при получении пицц");
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
