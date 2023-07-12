import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    clearIngredients: (state) => (state.list = initialState),
  },
});

export const { setIngredients, clearIngredients } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
