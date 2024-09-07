import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: ['mehedi'],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
  },
})
export default cartSlice.reducer
export const { addToCart } = cartSlice.actions
