import { Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native'
import { getResource } from '../services/marvelApi';
import Grid from '../components/shared/Grid';
import React, { useEffect, useState }  from 'react'

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
            <ScrollView>
                <Grid dataset={comics}>
                    {(comic, newStyle) => (
                        <Pressable
                            key={`comic_${comic.id}`}
                            style={[styles.button, newStyle]}
                            onPress={() => {}}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                                    }}
                                />
                                <Text style={styles.text}>
                                    {comic.title.length > 15 ? (
                                        `${comic.title.substring(0, 12)}...`
                                    ) : (
                                        comic.title
                                    )}
                                </Text>
                        </Pressable>
                    )}
                </Grid>
            </ScrollView>
        )
  )
}

export default ComicsComponent


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      elevation: 3,
      backgroundColor: 'black',
      margin: 16
    },
    text: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 120,
      height: 100,
      margin: 5,
      borderRadius: 20,
    },
  });