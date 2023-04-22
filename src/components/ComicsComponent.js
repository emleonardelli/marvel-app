import { Text, ScrollView, Pressable, StyleSheet, Image, TextInput, RefreshControl, SafeAreaView, View } from 'react-native'
import { getResource } from '../services/marvelApi';
import Grid from '../components/shared/Grid';
import React, { useEffect, useState }  from 'react'
import { Button } from 'react-native';
import ComicItem from './shared/ComicItem';
import List from './shared/List';

const ComicsComponent = () => {
  const [comics, setComics] = useState([]);
  const getComics = async () => {
    const res = await getResource();
    setComics(res);
  }
  useEffect(() => {
    getComics();
  }, [])
  return (
    comics.length === 0 ? (
        <Pressable
            style={styles.button}
            onPress={() => {}}>
                <Text style={styles.text}>Cargando...</Text>
        </Pressable>
    ) : (
      <SafeAreaView>
        {comics.length > 0 && (
          <View style={{paddingHorizontal: 5}}>
            <Text style={styles.title}>Comics</Text>
            <List dataset={comics}>
              {(comic, newStyle) => (
                <ComicItem
                  key={comic.id}
                  comic={comic}
                  newStyle={newStyle}
                />
              )}
            </List>
          </View>
        )}
      </SafeAreaView>
    )
  )
}

export default ComicsComponent

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
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    marginTop: 5,
    padding: 10,
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    borderRadius: 10,
  }
});