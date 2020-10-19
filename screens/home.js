import React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Calculator');

    }

    const pressHandler2 = () => {
        navigation.navigate('Map');
    }

    const pressHandler3 = () => {
        navigation.navigate('Flappy Bird');
    }

    return(
        <View style={globalStyles.container}>
            <Text style = {globalStyles.titleText}>Home Screen</Text>
            <Button 
                title = 'go to Calculator' 
                onPress = {pressHandler}
            />

            <Button 
                title = "Go to Map"
                onPress = {pressHandler2}
            />

            <Button 
                title = 'Go to Flappy Bird'
                onPress = {pressHandler3}
            />
        </View>
    )
}

