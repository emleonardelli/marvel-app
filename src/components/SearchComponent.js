import { Text, ScrollView, Pressable, StyleSheet, Image, TextInput, RefreshControl, SafeAreaView, View } from 'react-native'
import { getResource } from '../services/marvelApi';
import Grid from './shared/Grid';
import React, { useEffect, useState }  from 'react'
import { Button } from 'react-native';
import ComicItem from './shared/ComicItem';
import List from './shared/List';

const SearchComponent = () => {
  const [comics, setComics] = useState([]);
  const [findedComics, setFindedComics] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setFindedComics(comics);
    setSearchText('');
  }, []);
  const getComics = async () => {
    const res = await getResource();
    setComics(res);
    setFindedComics(res);
  }
  const searchHandler = async (e) => {
    setSearchText(e);
    if (e === '') {
      setFindedComics(comics);
    }else{
      const finded = await comics.filter(comic => comic.title.includes(e));
      setFindedComics(finded);
    }
  }
  useEffect(() => {
    getComics();
  }, [])
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      {
        comics.length === 0 ? (
            <Pressable
                style={styles.button}
                onPress={() => {}}>
                    <Text style={styles.text}>Cargando...</Text>
            </Pressable>
        ) : (
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={searchHandler}
              value={searchText}
              placeholder='Buscador...'
            />
              {findedComics.length == 0 && (
                <View style={{paddingHorizontal: 15,alignItems: 'center'}}>
                  <Text style={{fontSize: 20}}>No se encontraron resultados...</Text>
                  <Pressable
                    style={[styles.button, {height: 50, width: 300, backgroundColor: 'orange'}]}
                    onPress={onRefresh}
                  >
                    <Text style={[styles.text, {color: 'black', fontSize: 20}]}>Recargar</Text>
                  </Pressable>
                </View>
              )}
              {findedComics.length > 0 && (
                <View style={{paddingHorizontal: 5}}>
                  
                  <List dataset={findedComics}>
                    {(comic, newStyle) => (
                      <ComicItem
                        comic={comic}
                        newStyle={newStyle}
                      />
                    )}
                  </List>
                </View>
              )}
          </SafeAreaView>
        )
      }
    </ScrollView>
  )
}

export default SearchComponent


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
});