import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const customerSlice = createSlice({
  name: 'Customer',
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    RemoveItem(state, action) {
      return state.filter(cardproduct => cardproduct.id !== action.payload);
    }
  }
});

export const { addCustomer, RemoveItem } = customerSlice.actions;

export default customerSlice.reducer;
