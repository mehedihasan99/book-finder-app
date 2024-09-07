import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const found = state.items.find((item) => item.id === action.payload.id)
      if (!found) {
        state.items.push(action.payload)
        toast.success(`${action.payload.book_name} added to cart`, {
          position: 'top-center',
        })
      } else {
        toast.error(`${action.payload.book_name} already in cart`, {
          position: 'top-center',
        })
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      toast.error(`${action.payload.book_name} removed from cart`, {
        position: 'top-center',
      })
    },
  },
})
export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
