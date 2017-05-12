import React, {Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { NavigationActions } from 'react-navigation';

const Leagues =  ({navigation}) => {
    return (
        <View>
            <Text>Leagues</Text>
            <Button onPress={e => {
                navigation.dispatch(NavigationActions.navigate({ routeName: 'BaseInfo' }))
            }}
                    title="to BaseInfo"
            />
            <Button onPress={e => {
                navigation.dispatch(NavigationActions.navigate({ routeName: 'MatchList' }))
            }}
                    title="to MatchList"
            />
        </View>
    )
}

Leagues.navigationOptions = {
    header: null
}
export default Leagues

