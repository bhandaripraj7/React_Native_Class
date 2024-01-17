import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

export default function Assignment2() {

  return (
    <View style={styles.fullpage}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  fullpage: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
});