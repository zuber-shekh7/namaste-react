import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const { id } = item?.card?.info;

      const existingItem = state.items.find(
        (item) => item?.card?.info?.id === id
      );

      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const { id } = item?.card?.info;

      const newItems = state.items.filter(
        (item) => item?.card?.info?.id !== id
      );
      state.items = [...newItems];
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
