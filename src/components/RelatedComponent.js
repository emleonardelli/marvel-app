import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Alert,
} from 'react-native'
import { getResource } from '../services/marvelApi';
import React, { useEffect, useState }  from 'react'
import Item from './shared/Item';
import List from './shared/List';
import { useNavigation } from '@react-navigation/native';
import RealtedItem from './shared/RelatedItem';

const RelatedComponent = (props) => {
  const {
    title,
    items,
  } = props; 
  const entityTypes = require(`../types/entity`);
  const entity = entityTypes[title];
  const navigation = useNavigation();
  return (
    items.length > 0 &&(
      <View style={{marginTop: 5}}>
        <Text style={styles.title}>{entity.name}</Text>
        <List dataset={items}>
          {(comic) => (
            <RealtedItem
              itemId={comic.name}
              title={comic.name}
              onPress={() => {
                const url = comic.resourceURI.split('/');
                const id = url[url.length-1];
                navigation.push('Description', {
                  id,
                  entity
                })
              }}
            />
          )}
        </List>
      </View>
    )
  )
}

export default RelatedComponent

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
    paddingLeft: 20,
    fontSize: 20,
    color: 'white',
  }
});