import { createSlice } from '@reduxjs/toolkit';

let initialCustomer = JSON.parse(localStorage.getItem("Customer")) || [];
const initialState = initialCustomer;

const customerSlice = createSlice({
  name: 'Customer',
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
      localStorage.setItem("Customer", JSON.stringify([...state]));
      
    },
    RemoveItem(state, action) {
  const id = action.payload;
  const newCustomer = state.filter(customer => customer.id !== id);
  localStorage.setItem("Customer", JSON.stringify(newCustomer));
  return newCustomer;
}

  }
});

export const { addCustomer, RemoveItem } = customerSlice.actions;

export default customerSlice.reducer;
