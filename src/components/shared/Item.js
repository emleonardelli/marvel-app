import { Pressable, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Item = (props) => {
  const {
    itemId,
    imageUrl,
    title,
    entity,
  } = props;

  return (
    <Pressable
      key={`${entity}_${itemId}`}
      style={styles.button}
      onPress={() => {}}
    >
      <Image
        style={styles.comicImg}
        source={{
          uri: imageUrl
        }}
      />
      <LinearGradient
          colors={['transparent', 'black']}
          locations={[0.3,0.9]}
          style={styles.linearGradient}
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  )
}

export default Item


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
    marginBottom:30,
  },
  comicImg: {
    width: ((Dimensions.get('window').width-30)/2)-10,
    height: Dimensions.get('window').height/3,
    borderRadius: 5,
  },
  linearGradient: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 5,
    backgroundColor: "transparent",
    width: ((Dimensions.get('window').width-30)/2)-10,
    height: Dimensions.get('window').height/3,
  },
});