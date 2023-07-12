import { createSlice, current } from "@reduxjs/toolkit";
import toppings from "../../utils/generateTopping";

const initialState = { list: [], confirmedIngredients: [] };

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeIngredient: (state, action) => {
      state.list =
        state.list.filter((item) => current(item) !== action.payload) || [];
    },
    selectAllIngredients: (state) => {
      state.list = toppings;
    },
    clearIngredients: (state) => {
      state.list = [];
    },
    setConfirmedIngredients: (state, action) => {
      state.confirmedIngredients = action.payload;
    },
  },
});

export const {
  setIngredients,
  removeIngredient,
  selectAllIngredients,
  clearIngredients,
  setConfirmedIngredients,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
