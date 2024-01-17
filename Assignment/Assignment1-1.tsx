import { StyleSheet, View, Text } from 'react-native';
import React from 'react';


export default function Assignment1() {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={[styles.item, { backgroundColor: '#66F', flex: 1 }]}></View>
        <View style={[styles.item, { backgroundColor: '#66A', flex: 2 }]}></View>
      </View>
      <View style={[styles.secondRow, styles.item]}>
        <View style={{ backgroundColor: 'green', flex: 1 }}></View>
      </View>
      <View style={styles.thirdRow}>
        <View style={[styles.item, { backgroundColor: '#090', flex: 1 }]}></View>
        <View style={[styles.item, { backgroundColor: '#0B0', flex: 1 }]}></View>
        <View style={[styles.item, { backgroundColor: '#090', flex: 1 }]}></View>
      </View>
      <View style={[styles.forthRow, styles.item]}>
        <View style={{ backgroundColor: '#66A', flex: 1 }}></View>
      </View>
      <View style={[styles.fifthRow, styles.item]}>
        <View style={{ backgroundColor: '#66F', flex: 1 }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
  },
  secondRow: {
    flex: 4,
    backgroundColor: '#0D0',
    width: '100%',
  },
  thirdRow: {
    flex: 3,
    flexDirection: 'row',
  },
  forthRow: {
    flex: 1,
    flexDirection: 'row',
  },
  fifthRow: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: '100%',
  },
  textDemo: {
    fontSize: 30,
    color: 'red',
  },
});
