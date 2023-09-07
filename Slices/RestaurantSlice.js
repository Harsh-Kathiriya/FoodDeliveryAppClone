import { createSlice } from '@reduxjs/toolkit'

const initialState = { restaurant: {
      imgUrl: null, id: null, title: null, rating: null, 
      genre: null, address: null, description: null, long: null, 
      lat: null, dishes: null
   }}

const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
      setRestaurant(state, action){
        state.restaurant = action.payload
      }
    },
  }
    
)

export const { setRestaurant } = RestaurantSlice.actions
export const selectRestaurant = (state)=>state.restaurant.restaurant
export default RestaurantSlice.reducer