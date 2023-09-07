import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { urlFor } from '../sanity'
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid'
import {useDispatch, useSelector} from 'react-redux'
import { addToBasket, selectBasketItemWithId, selectBasketItems, removeFromBasket } from '../Slices/basketSlice'

const DishCard = ({id, image, name, price, description}) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state=>selectBasketItemWithId(state, id))

    const addItemToBasket = ()=>{
      dispatch(addToBasket({id, name, description, price, name}))
    }
    const removeItemFromBasket = ()=>{
      if(items.length > 0)
        dispatch(removeFromBasket({id}))
      else return
    }
  return (
    <>
    <TouchableOpacity onPress={()=>{setIsPressed(!isPressed)}}
    style={tw`bg-white border border-gray-300 flex-row items-center p-2`}>
        <Image source={{uri:urlFor(image)?.url()}} style={tw`h-15 w-15`}/>
        <View style={tw`pl-3 flex-1`}>
            <Text style={tw`text-xl`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-400 pt-1`}>${price}</Text>
        </View>
        
        {(isPressed ) && (
     <View style={tw`flex-row items-center p-2`}>
        <TouchableOpacity onPress={removeItemFromBasket} >
        <MinusCircleIcon size={40} color={items.length>0 ? "green": "gray"} opacity={.6}/>
        </TouchableOpacity>
        
        <Text> {items.length} </Text>
        
        <TouchableOpacity onPress={addItemToBasket}>
        <PlusCircleIcon size={40} color="green" opacity={.6}/>
        </TouchableOpacity> 
     </View>
   )}
    </TouchableOpacity>
   
  </>
  )
}

export default DishCard