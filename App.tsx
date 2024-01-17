import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './lessons/lesson 2/HelloWorld';
import React from 'react';
import Greeter from './lessons/lesson 2/Greeter';

export default function App() {
 /* return (
    <View style={styles.container}>
      <Text style={styles.textDemo}>Hello React Native WOrld!</Text>
      <Text style={{...styles.textDemo,...styles.someOtherStyle}}>Hello React Native World!</Text>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <Greeter name="Bob" />
      <Greeter name="Alice" />
    </View>
  );
}*/
/*<View style={{width: 80, height: 80, backgroundColor: "red"}}></View>
    <View style={{width: 80, height: 80, backgroundColor: "green"}}></View>
    <View style={{width: 80, height: 80, backgroundColor: "blue"}}></View>
    <View style={{width: 80, height: 80, backgroundColor: "yellow"}}></View>
    */

return (
  <View style={styles.container}>
    <View style={styles.firstRow}>
      <View style={[styles.item, {backgroundColor: '#66F',flex:1}]}></View>
      <View style={[styles.item, {backgroundColor: '#66A',flex:2}]}></View>
      </View>
      <View style={styles.secondRow}>
      <View style={{backgroundColor: 'green',flex:1}}></View>
      </View>
      <View style={styles.thirdRow}>
      <View style={[styles.item, {backgroundColor: '#090',flex:1}]}></View>
      <View style={[styles.item, {backgroundColor: '#0B0',flex:1}]}></View>
      <View style={[styles.item, {backgroundColor: '#090',flex:1}]}></View>
      </View>
      <View style={styles.forthRow}>
      <View style={{backgroundColor: '#66A',flex:1,height:'100%'}}></View>
      </View>
      <View style={styles.fifthRow}>
      <View style={{backgroundColor: '#66F',flex:1,height:'100%'}}></View>
       </View>
     
      
  </View>

);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  firstRow: {
    flex: 1,
    flexDirection: "row",
  },
  secondRow: {
    flex: 4,
    backgroundColor: '#0D0',
    width: '100%',
  },
  thirdRow: {
    flex: 3,
    flexDirection: "row",
  },
  forthRow: {
    flex: 1,
    flexDirection: "row",
  },
  fifthRow: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: '100%',
  },
   
  textDemo: {
    fontSize: 30,
    color: "red",
    
  },
  

});
