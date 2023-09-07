import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { urlFor } from '../sanity'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={tw`relative m-1`}>
      <Image source={{uri:urlFor(imgUrl).url()}} style={tw`h-25 w-25 rounded`} />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard