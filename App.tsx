import { View } from 'react-native';
import HelloWorld from './lessons/lesson 2/HelloWorld';
import React from 'react';
import Greeter from './lessons/lesson 2/Greeter';
import Assignment2 from './Assignment/Assignment1-2';
import Assignment1 from './Assignment/Assignment1-1';
import L4TextInputDemo from './lessons/lesson 2/Lesson4/L4TextInputDemo';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
    { /* <Greeter />*/}
    { /* <HelloWorld />*/}
    { /* <Assignment1 />*/}
    { /* <Assignment2 />*/}
    { /* <Assignment3 />*/}
    { <L4TextInputDemo/> }
    </View>
  );
}