import { View } from 'react-native';
import HelloWorld from './lessons/lesson 2/HelloWorld';
import React from 'react';
import Greeter from './lessons/lesson 2/Greeter';
import Assignment2 from './Assignment/Assignment1-2';
import Assignment1 from './Assignment/Assignment1-1';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Assignment2 />
    </View>
  );
}