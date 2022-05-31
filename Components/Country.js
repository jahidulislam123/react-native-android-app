import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Country({country}) {
  return (
    <View>
      <Text >Country : {country.name.common}</Text>
        <Image
        style={{width:200 ,height :200,borderRadius:7}}
        source={{uri:country.flags.png}}
        ></Image>
    </View>
  )
}