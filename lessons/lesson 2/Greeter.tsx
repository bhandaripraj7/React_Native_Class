import { View, Text } from 'react-native'
import React from 'react'

export default function Greeter( { name } ) {

  return (
    <View>
      <Text>Greetings {name}</Text>
    </View>
  )
}