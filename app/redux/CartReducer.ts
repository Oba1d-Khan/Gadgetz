import { createSlice } from "@reduxjs/toolkit";

interface ProductProps {
  id: string;
  quantity: number;
}
interface CartState {
  productData: ProductProps[];
}

const initialState: CartState = {
  productData: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (product: ProductProps) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (product: ProductProps) => product.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (product: ProductProps) => product.id === action.payload.id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else existingProduct && existingProduct.quantity--;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartReducer.actions;
export default cartReducer.reducer;
