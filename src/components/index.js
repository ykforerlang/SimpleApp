import React from 'react';
import { AppRegistry } from 'react-native';
import {
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux';

import LeaguesTab from './league'
import VideoTab from './video'
import BaseInfoTab from './baseInfo'


export const AppNavigator = TabNavigator({
    LeaguesTab: { screen: LeaguesTab },
    VideoTab: { screen: VideoTab },
    BaseInfoTab: { screen: BaseInfoTab }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
)

const mapStateToProps = (state) => {
     return {
         nav:state.nav
     }
}

export default connect(mapStateToProps)(AppWithNavigationState)

