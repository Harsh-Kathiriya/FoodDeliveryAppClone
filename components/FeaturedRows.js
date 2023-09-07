import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import RestaurantCards from './RestaurantCards'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import { client } from '../sanity'

const FeaturedRows = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    client.fetch(
      `*[_type=="featured" && _id==$id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{name}
        }
      }`, {id}).then(data=>{
        setRestaurants(data[0]?.restaurants);
      })
  },[id])
  return (
    <View style={tw`mt-7 ml-2`}>
        <View style={tw`flex-row`}>
            <Text style={tw`flex-1 font-bold text-lg`}>{title}</Text>
            <ArrowRightIcon size={20} color="#BDBDBD" style={tw`pr-3`}/>
        </View>
        <Text style={tw`text-gray-400 text-s`}>{description}</Text>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw``}
        style={tw`pt-3`}>
          {
            restaurants?.map(restaurant=>{
              return(
                <RestaurantCards imgUrl={restaurant.image} 
                title={restaurant.name}
                id = {restaurant._id}
                rating = {restaurant.Rating}
                genre = {restaurant.type.name}
                address = {restaurant.address}
                description= {restaurant.description}
                long = {restaurant.long}
                lat = {restaurant.lat}
                key = {restaurant._id}
                dishes = {restaurant.dishes}
                />
              )
            })
          }
            
        </ScrollView>
    </View>
    
  )
}

export default FeaturedRows