import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Greeter( {} ) {
  const [name,setName] = useState('')

  return (
    <View>
      <Text>Greeter</Text>
      <TextInput placeholder='Enter your name' onChangeText={text => setName(text)}
      style={{height: 40,borderColor:"gray",borderWidth:1}} 
      >   </TextInput>
      {
        name !== '' && <Text>Welcome to the world of React Native {name}</Text>
      }
    </View>
  )
}