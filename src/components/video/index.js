import {
    StackNavigator
} from 'react-navigation';

import VideoList from './VideoList'
import VideoPage from './VideoPage'

export default  StackNavigator({
    VideoList: { screen: VideoList },
    VideoPage: { screen: VideoPage }
})

