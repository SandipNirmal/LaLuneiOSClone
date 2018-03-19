import React from 'react'
import {StackNavigator} from 'react-navigation'
import theme from 'react-native-theme'

import Search from '../components/search/Search'
import { MovieDetailsRoutes } from './Movies'
import { TvShowDetailsRoutes } from './TvShows'
import ShareButton from '../components/common/ShareButton'

import {StackNavHeaderStyles_Light, StackNavHeaderStyles_Dark, headerBackgroundColor} from '../styles/styles'

const StackNavHeaderStyles = theme.name === 'Dark'
  ? StackNavHeaderStyles_Dark
  : StackNavHeaderStyles_Light;

const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Search',
        ...StackNavHeaderStyles
      }
    },
    ...MovieDetailsRoutes,
    ...TvShowDetailsRoutes
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: headerBackgroundColor
      // backgroundColor: 'rgba(4, 4, 4, 0.6)'
    }
  }
)

export default SearchStack
