import { View, Text, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {XCircleIcon} from 'react-native-heroicons/solid'
import {useDispatch, useSelector} from 'react-redux'
import { selectRestaurant } from '../Slices/RestaurantSlice'

const BasketScreen = () => {
  const restaurant = useSelector(selectRestaurant)
  return (
    <View>
      <View style={tw`flex-row items-center bg-white py-3`}>
        <View style={tw`flex-1 items-center`}>
            <Text style={tw`font-bold text-xl`}>Basket</Text>
            <Text style={tw`text-lg text-gray-500 -mt-1`}>{restaurant.title}</Text>
        </View>
        <XCircleIcon size={40} color="green" style={tw`pr-5`}/>
      </View>
      <View style={tw`flex-row items-center bg-white p-3 my-5`}>
        <Image source={{uri:"https://www.indulge.com.mt/wp-content/uploads/2017/04/indukge-me-food-App-Icon.png"}}
          style = {tw`h-10 w-10 rounded-full`} />
        <Text style={tw`text-lg flex-1 pl-5`}>Deliver in 50-60 minute</Text>
        <Text style={tw`pr-5 text-lg text-green-500`}>Change</Text>
      </View>
    </View>

  )
}

export default BasketScreen