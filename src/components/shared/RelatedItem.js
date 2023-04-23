import { Pressable, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const RealtedItem = (props) => {
  const {
    itemId,
    title,
    onPress,
  } = props;

  return (
    <Pressable
      key={`${title}_${itemId}`}
      style={styles.button}
      onPress={onPress}
    >
      <LinearGradient
          colors={['gray', 'black']}
          locations={[0.0,1.0]}
          style={styles.linearGradient}
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  )
}

export default RealtedItem


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 5,
    width: 100,
    height: 100,
  },
  text: {
    padding: 10,
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  linearGradient: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: "transparent",
    width: 100,
    height: 100,
  },
});