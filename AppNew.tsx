import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function TestingFile() {

  return (
      <View  style={styles.container}>
      <Text style={styles.textarea}>Hello World !!!! </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  textarea: {
    color: 'black',
    padding: 100,
  }
})

export default TestingFile;
