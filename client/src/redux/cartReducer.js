import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const item = state.products.find(item=> item.id === action.payload.id)
      if(item){
        item.quantity += action.payload.quantity
      }
      else{
        state.push(action.payload)
      }
    },
    removeCart: (state,action) => {
      state.products = state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer