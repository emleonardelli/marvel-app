import {
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  View,
  Pressable
} from 'react-native'
import React, { useState } from 'react'

const SearchScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [findedComics, setFindedComics] = useState([]);
  const [search, setSearch] = useState('');
  const onRefresh = React.useCallback(() => {
    //setFindedComics(comics);
  }, []);
  const searchHandler = async (e) => {
    setSearch(e);
    /*
    if (e === '') {
      setFindedComics(comics);
    }else{
      const finded = await comics.filter(comic => comic.title.includes(e));
      setFindedComics(finded);
    }
    */
  }
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <SafeAreaView style={{marginHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            onChangeText={searchHandler}
            value={search}
            placeholder='Buscador...'
          />
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert('Cannot press this one')}
          >
            <Text style={styles.text}>Buscar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default SearchScreen


const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'black',
    color: 'white',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    fontSize: 20
  },
});