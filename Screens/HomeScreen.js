import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRows from '../components/FeaturedRows'
import { client } from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown : false
    })
  }, [])
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(()=>{
    client.fetch(
      `*[_type=="featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
      )
      .then(data=>{
        setFeaturedCategories(data);
    
      })
    }, []);
  return (
    <SafeAreaView style={tw`bg-white`}>
      {/* Header */}
      <View style={tw`flex-row pb-2 items-center mx-2 my-2 `}>
        <Image source={{uri:"https://www.indulge.com.mt/wp-content/uploads/2017/04/indukge-me-food-App-Icon.png"}}
          style = {tw`h-6 w-6 p-7 mr-1 rounded-full`} />
        
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-s `}>Order Now</Text>
          <Text style={tw`font-bold text-xl`}>
            Current address
            <ChevronDownIcon size={20} color="#BDBDBD" style={tw`ml-1`}/>
          </Text>
        </View>
        <UserIcon size={35} color="#BDBDBD"/>
      </View>

      {/* Search */}
      <View style={tw`flex-row pb-3 items-center space-x-2`}>
        <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 px-2 py-1 ml-4 mr-5`}>
          <MagnifyingGlassIcon color="#BDBDBD" style={tw`mr-3`}/>
          <TextInput placeholder='Search your Faves!' keyboardType='default' style={tw`flex-1`}/>
        </View>
        <AdjustmentsVerticalIcon color = "#BDBDBD" style={tw`pr-3`}/>
      </View>

      <ScrollView style={tw`bg-gray-100`}
      contentContainerStyle = {tw`pb-10`}>
        <Categories />

        {
          featuredCategories?.map(category => {
            return (
              <FeaturedRows 
                key={category._id}
                title={category.name}
                description={category.description}
                id={category._id}
              />
            );
          })
      }
      </ScrollView>
      
    </SafeAreaView >
  )
}

export default HomeScreen