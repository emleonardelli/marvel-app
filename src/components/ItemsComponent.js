import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native'
import { getResource } from '../services/marvelApi';
import React, { useEffect, useState }  from 'react'
import Item from './shared/Item';
import List from './shared/List';
import { useNavigation } from '@react-navigation/native';

const ItemsComponent = (props) => {
  const {
    entity,
    setLoaded
  } = props; 
  const title = entity.name;
  const navigation = useNavigation();
  const [items, setComics] = useState([]);
  const getComics = async () => {
    const res = await getResource(entity.entity);
    setComics(res);
    setLoaded((loaded) => ({
      ...loaded,
      [entity.entity]:true
    }))
  }
  useEffect(() => {
    getComics();
  }, [])
  return (
    items.length > 0 &&(
      <SafeAreaView>
        <View style={{paddingHorizontal: 5}}>
          <Text style={styles.title}>{title}</Text>
          <List dataset={items}>
            {(comic) => (
              <Item
                key={comic.id}
                entity={entity}
                itemId={comic.id}
                title={comic[entity.title]}
                imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                onPress={() => navigation.navigate('Description', {
                  id: comic.id,
                  entity
                })}
              />
            )}
          </List>
        </View>
      </SafeAreaView>
    )
  )
}

export default ItemsComponent

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
    marginHorizontal: 10,
    padding: 10,
    paddingLeft: 20,
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'white',
    borderRadius: 40,
  }
});