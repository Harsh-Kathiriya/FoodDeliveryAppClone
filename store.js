import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './Slices/basketSlice'
import restaurantSlice from './Slices/RestaurantSlice'

export default configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice
  }
})