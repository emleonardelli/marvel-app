
import React, { useEffect, useState } from 'react'
import ItemsComponent from '../components/ItemsComponent';
import { Dimensions, RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import {ActivityIndicator, View} from 'react-native';

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState({
        comics: false,
        characters: false,
        series: false,
        events: false,
        creators: false,
    });
    useEffect(() => {
        const allLoaded = Object.values(loaded).every((load) => load);
        setLoading(!allLoaded);
    }, [loaded])
    
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
                {loading && (
                    <ActivityIndicator
                        style={{marginTop: Dimensions.get('window').height/2-100}}
                        size={50}
                    />
                )}
                {/*
                <View style={{opacity: loading ? 0 : 1}}>
                    <ItemsComponent
                        itemName='title'
                        entity='comics'
                        title='Comics'
                        setLoaded={setLoaded}
                    />
                    <ItemsComponent
                        itemName='name'
                        entity='characters'
                        title='Personajes'
                        setLoaded={setLoaded}
                    />
                    <ItemsComponent
                        itemName='title'
                        entity='series'
                        title='Series'
                        setLoaded={setLoaded}
                    />
                    <ItemsComponent
                        itemName='title'
                        entity='events'
                        title='Eventos'
                        setLoaded={setLoaded}
                    />
                    <ItemsComponent
                        itemName='fullName'
                        entity='creators'
                        title='Creadores'
                        setLoaded={setLoaded}
                    />
                </View>
                */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

