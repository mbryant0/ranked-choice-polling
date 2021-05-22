import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../scenes/home';
import CreateNewPollScreen from '../scenes/createnewpoll';
import ViewPollScreen from '../scenes/viewpoll';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  CreateNewPoll: {
    screen: CreateNewPollScreen,
  },
  ViewPoll: {
    screen: ViewPollScreen,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
