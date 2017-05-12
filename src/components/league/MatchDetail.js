import React, {Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { NavigationActions } from 'react-navigation';


const MatchDetail = ({ navigation }) => {
    return (
        <View>
            <Text>MatchDetail</Text>
            <Button onPress={e => {
                navigation.dispatch(NavigationActions.navigate({ routeName: 'VideoPage' }))
            }}
                    title="to VideoPage"
            />
        </View>
    )
}

MatchDetail.navigationOptions = {
    title: "MatchDetail",
    tabBarVisible: false
}

export default MatchDetail

