import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import tw from 'twrnc'
import { client } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    client.fetch(
      `*[_type=="category"]`
    ).then(data=>{
      setCategories(data);
    })
  },[])
  console.log(categories);
  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={tw`pt-2 pl-2 pr-1`}>
      {categories?.map(category=>{
        return(
          <CategoryCard 
          imgUrl={category.image} 
          title={category.name} 
          key={category._id} />
        )
      })}
      

    </ScrollView>
  )
}

export default Categories