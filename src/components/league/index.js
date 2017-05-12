import {
    StackNavigator
} from 'react-navigation';

import Leagues from './Leagues'
import MatchDetail from './MatchDetail'
import MatchList from './MatchList'

export default StackNavigator({
    Leagues:{ screen: Leagues },
    MatchList: { screen: MatchList },
    MatchDetail: { screen: MatchDetail }
})

