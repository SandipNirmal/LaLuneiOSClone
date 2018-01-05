import React from 'react';
import {
  TabNavigator
} from 'react-navigation';
import {
  Icon
} from 'react-native-elements';

import MoviesStack from './screens/movies';
import TvShows from './screens/tvShows';
import Search from './screens/search';
import Settings from './screens/settings';

export const AppRoot = TabNavigator({
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'Movies',
      tabBarIcon: ({tintColor}) => <Icon name="movie" size={30} color={tintColor}/>,
    },
  },
  TvShows: {
    screen: TvShows,
    navigationOptions: {
      tabBarLabel: 'TV Shows',
      tabBarIcon: ({tintColor}) => <Icon name="tv" size={30} color={tintColor}/>
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => <Icon name="search" size={30} color={tintColor}/>
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <Icon name="settings" size={30} color={tintColor}/>
    },
  },
});
