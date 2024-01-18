import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === productToAdd._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...productToAdd, quantity: 1 });
      }
      state.quantity += 1;
      state.total += productToAdd.price;
    },
    updateProductQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product._id === productId
      );

      if (productToUpdate) {
        state.quantity += newQuantity - productToUpdate.quantity;
        state.total +=
          (newQuantity - productToUpdate.quantity) * productToUpdate.price;
        productToUpdate.quantity = newQuantity;
      }
    },
    extraReducers: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, updateProductQuantity, extraReducers } =
  cartSlice.actions;
export default cartSlice.reducer;
