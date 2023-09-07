import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectBasketItems, selectBasketTotal} from '../Slices/basketSlice'
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'

const Basket = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation()
  const total = useSelector(selectBasketTotal)
  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
      <TouchableOpacity style={tw`bg-green-400 flex-row items-center rounded-lg mx-5 h-15`} onPress={()=>navigation.navigate("Basket")}>
        <Text style={tw`bg-green-600 ml-5 rounded p-2 text-white`}>{items.length}</Text>
        <Text style={tw`font-bold flex-1 ml-5 text-center text-lg text-white`}>View Basket</Text>
        <Text style={tw`font-bold mx-5 text-lg text-white`}>${total}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Basket