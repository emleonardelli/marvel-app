
import React from 'react'
import ComicsComponent from '../components/ComicsComponent';
import { RefreshControl, SafeAreaView, ScrollView, Text } from 'react-native';
import CharactersComponent from '../components/CharactersComponent';

import {ActivityIndicator, StyleSheet, View} from 'react-native';
const HomeScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        //setFindedComics(comics);
    }, []);
    return (
        <SafeAreaView>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                
                <ActivityIndicator size="large" />
                <ComicsComponent />
                <CharactersComponent />
                <ComicsComponent />
                <CharactersComponent />
                <ComicsComponent />
                <CharactersComponent />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

