import { StyleSheet, View,Text } from 'react-native';
import React from 'react';

export default function Assignment2() {
  return (
    <View style={styles.fullpage}>
      
        <View style={styles.circletopleft} />
    
    <View style={styles.circletopright} />

    <View style={styles.middlewhite}>
  <Text style={styles.text}>
    Sent successfully to{' '}
    <Text style={styles.boldText}>Lela Crowford</Text>
  </Text>
  <Text style={styles.boldText1}>$100.00</Text>
  <Text style={styles.transictiontext}>
    Transaction done on  <Text style={styles.boldText2}>12th Jan 2021</Text>  Your refrence number is 123456789 </Text>
</View>
    <View style={styles.whitetopradious} />
    <View style={styles.whitebottomradious} />
    <View style={styles.centerlogocircle} />
    <View style={styles.centerlogocircle1} />
    <View style={styles.centerlogocircle2} />
    <View style={styles.centerlogocircle3} />
    </View>  

  );
}

const styles = StyleSheet.create({
  fullpage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00563F',
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'flex-start', // Align content to the start (top)
    paddingTop: 40,
    overflow: 'hidden', // Hide the overflow content
  },
  
  circletopleft: {
    width: 300,
    height: 300,
    borderRadius: 1000,
    backgroundColor: '#d0d0d0',
    position: 'absolute',
    top: -140,
    left: -160,
  },


circletopright: {
  width: 150,
  height: 150,
  borderRadius: 100,
  backgroundColor: '#d0d0d0',
  position: 'absolute',
  top: -50,
  left: 300,
},

middlewhite: {
  width: 340,
  height: 660,
  backgroundColor: '#fff',
  top: 130,
  left: 23,
  borderRadius: 10,
},
text: {
  color: 'red',
  fontSize: 16,
  textAlign: 'center',
  top: 200,
},

boldText: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 16,
  textAlign: 'center',
},

boldText1: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 25,
  textAlign: 'center',
  top: 220,
},
boldText2: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 16,
  textAlign: 'center',
  
},

transictiontext: {
  color: 'red',
  fontSize: 16,
  textAlign: 'center',
  top: 370,
},

transictionboldText: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 16,
  textAlign: 'center',
},

whitetopradious: {
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: '#00563F',
  top: -545,
  left: 8
  
 
},
whitebottomradious: {
  width: 100,
    height: 100,
    borderRadius: 300,
    position: 'absolute',
    top: 780,
    right: -20,
    backgroundColor: '#00563F',
  
},
centerlogocircle: {
  width: 130,
    height: 130,
    borderRadius: 300,
    top: 230,
    left: 130,
    position: 'absolute',
    
    backgroundColor: '#00563F',
  
},
centerlogocircle1: {
  width: 5,
    height: 5,
    borderRadius: 300,
    top: 300,
    left: 150,
    position: 'absolute',
    
    backgroundColor: 'blue',
  
},
centerlogocircle2: {
  width: 7,
    height: 7,
    borderRadius: 300,
    top: 245,
    left: 204,
    position: 'absolute',
    
    backgroundColor: 'blue',
  
},
centerlogocircle3: {
  width: 3,
    height: 3,
    borderRadius: 300,
    top: 310,
    left: 240,
    position: 'absolute',
    
    backgroundColor: 'blue',
  
},
});


