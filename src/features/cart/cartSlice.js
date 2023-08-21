import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const id = action.payload
      state.cartItems = state.cartItems.filter((item) => {
        return id !== item.id
      })
    },
    increase: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === payload.id
      })
      cartItem.amount += 1
    },
    decrease: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === payload.id
      })
      cartItem.amount -= 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach(item => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    }
  }
})

export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions

export default cartSlice.reducer