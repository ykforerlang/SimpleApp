import { AppNavigator } from '../components'

const firstAction = AppNavigator.router.getActionForPathAndParams('LeaguesTab');
const initState = AppNavigator.router.getStateForAction(firstAction);

export default function (state = initState, action) {
    return AppNavigator.router.getStateForAction(action, state);
}

