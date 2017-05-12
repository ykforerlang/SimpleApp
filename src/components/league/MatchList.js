import React, {Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { NavigationActions } from 'react-navigation';

const MatchList = ({navigation}) => {
    return (
        <View>
            <Text>MatchList</Text>
            <Button onPress={e => {
                navigation.dispatch(NavigationActions.navigate({ routeName: 'MatchDetail' }))
            }}
                    title="to MatchDetail"
            />
        </View>
    )
}
MatchList.navigationOptions = {
    title: "MatchList"
}

export default MatchList

