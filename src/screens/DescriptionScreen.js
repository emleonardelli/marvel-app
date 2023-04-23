
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import {ActivityIndicator, View} from 'react-native';
import { getEntityResource } from '../services/marvelApi';
import RelatedComponent from '../components/RelatedComponent';

const DescriptionScreen = (props) => {
    const {
        id,
        entity
    } = props.route.params;
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [entityResponse, setEntityResponse] = useState({});
    const getEntity = async () => {
      const res = await getEntityResource(entity.entity, id);
      setEntityResponse(res)
      setLoading(false);
    }
    useEffect(() => {
      getEntity();
    }, [])
    const onRefresh = React.useCallback(() => {
      //setFindedComics(comics);
    }, []);
    return (
        <SafeAreaView style={{
            flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
        }} >
          <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
            {loading ? (
              <ActivityIndicator
                style={{marginTop: Dimensions.get('window').height/2-170}}
                size={50}
              />
            ) : (
              <View style={{marginHorizontal: 15}}>
                {entityResponse.thumbnail && (
                  <Image
                    style={styles.comicImg}
                    source={{
                      uri: `${entityResponse.thumbnail.path}.${entityResponse.thumbnail.extension}`
                    }}
                  />
                )}
                {entityResponse[entity.title] !== '' && (
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.subtitle}>
                    Titulo
                    </Text>
                    <Text style={styles.text}>
                      {entityResponse[entity.title]}
                    </Text>
                  </View>
                )}
                {entityResponse[entity.description] && (
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.subtitle}>
                      Descripcion
                    </Text>
                    <Text style={styles.text}>
                      {entityResponse[entity.description]}
                    </Text>
                  </View>
                )}
                <View>
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.subtitle}>Relacionados</Text>
                  </View>
                  {entity.related.map(related => (
                    entityResponse[related].items && (
                      <RelatedComponent
                        title={related}
                        entity={related}
                        items={entityResponse[related].items}
                      />
                    )
                  ))}
                </View>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
    )
}

export default DescriptionScreen

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 15,
    marginVertical: 2,
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginVertical: 2
  },
  comicImg: {
    width: Dimensions.get('window').width-30,
    height: 250,
    borderRadius: 10,
  },
  descriptionContainer: {
    marginTop: 10,
    padding:10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});