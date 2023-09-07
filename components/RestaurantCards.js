import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {StarIcon, MapPinIcon} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import {useNavigation} from '@react-navigation/native'

const RestaurantCards = ({imgUrl, id, title, rating, genre, address, description, long, lat, dishes}) => {
  const navigation = useNavigation();
  return (
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("Restaurant",{
                imgUrl, id, title, rating, genre, address, description, long, lat, dishes
            })
        }}
        style={tw`bg-white mr-2 shadow`}>
            <Image source={{uri:urlFor(imgUrl)?.url()}} style={tw`h-40 w-60 rounded`} />
            <View style={tw`pl-1`}>
                <Text style={tw`text-lg pt-2`}>{title}</Text>
                <View style={tw`flex-row items-center`}>
                    <StarIcon size={20} color="green" opacity={0.5} />
                    <Text style={tw`ml-1 text-xs text-gray-500`}>{rating} · {genre}</Text>
                </View>
            </View>
            <View style={tw`pl-1 flex-row items-center`}>
                <MapPinIcon size={20} color="#BDBDBD" />
                <Text style={tw`ml-1 text-xs text-gray-500`}>{address}</Text>
            </View>
        </TouchableOpacity>
    
  )
}

export default RestaurantCards