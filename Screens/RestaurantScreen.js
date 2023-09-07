import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import {useEffect, useLayoutEffect, useState} from 'react'
import tw from 'twrnc'
import { urlFor } from '../sanity'
import {StarIcon, MapPinIcon, ArrowLeftIcon, QuestionMarkCircleIcon, ChevronRightIcon} from 'react-native-heroicons/solid'
import DishCard from '../components/DishCard'
import Basket from '../components/Basket'
import {useDispatch, useSelector} from 'react-redux'
import { setRestaurant } from '../Slices/RestaurantSlice'


const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {params:{imgUrl, id, title, rating, genre, address, description, long, lat, dishes}} = useRoute();
  //route.param.id
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown : false
    })
  }, [])
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setRestaurant({imgUrl, id, title, rating, genre, address, description, long, lat, dishes}))
  }, [dispatch])
  return (
   <>
   <Basket />
    <ScrollView style={tw`relative`}>
        <View style={tw`relative`}>
            <Image source={{uri:urlFor(imgUrl).url()}} style={tw`w-full h-60`} />
            <TouchableOpacity 
            onPress={navigation.goBack}
            style={tw`absolute top-10 left-5 bg-gray-100 p-3 rounded-full opacity-70`}>
            <ArrowLeftIcon size={20} color="gray" />
            </TouchableOpacity>
        </View>
        

        <View style={tw`bg-white`}>
            <View style={tw`px-4 pt-3 bg-white`}>
                <Text style={tw`text-4xl font-bold pt-2`}>{title}</Text>
                <View style={tw`flex-row items-center pt-1`}>
                    <StarIcon size={20} color="green" opacity={0.5} />
                    <Text style={tw`ml-1 text-sm mr-4 text-gray-500`}>{rating} · {genre}</Text>
                    <MapPinIcon size={20} color="#BDBDBD" />
                    <Text style={tw`ml-1 text-sm text-gray-500`}>Nearby · {address}</Text>
                </View>
                <View>
                    <Text style={tw`text-sm pt-2 text-gray-500 pb-4`}>{description}</Text>
                </View>
            </View>
            <TouchableOpacity style={tw`flex-row items-center p-4 border border-gray-300`}>
                    <QuestionMarkCircleIcon size={20} color="green" opacity={0.5} />
                    <Text style={tw`flex-1 pl-3 font-bold`}>Have a food Allergy?</Text>
                    <ChevronRightIcon size={20} color="green" opacity={0.5} />
            </TouchableOpacity>
        </View>
        
        <View style={tw`pb-40`}>
            <Text style={tw`font-bold text-xl pl-2 py-2`}>Menu</Text>
            {dishes.map((dish)=>{
                return(
                <DishCard 
                key = {dish._id}
                id = {dish._id}
                name = {dish.name}
                description = {dish.description}
                image = {dish.image}
                price = {dish.price}
                />
            )
            })}
        </View>

        
    </ScrollView>
  </>
  )
}

export default RestaurantScreen