// To add TvShows. Think if this is really required? we can have this for
// readability purpose
import React from 'react'
import {StackNavigator} from 'react-navigation'
import theme from 'react-native-theme'

import TvShow from '../components/tv/TvShows'
import TvShowDetails from '../components/tv/TvShowDetails'
import AllTvShows from '../components/tv/AllTvShows'
import SeasonDetails from '../components/tv/SeasonDetails'
import CommonRoutes from './Common'
import ShareButton from './../components/common/ShareButton'

import {StackNavHeaderStyles_Light, StackNavHeaderStyles_Dark} from '../styles/styles'

const StackNavHeaderStyles = theme.name === 'Dark'
  ? StackNavHeaderStyles_Dark
  : StackNavHeaderStyles_Light;

const TvShowDetailsRoutes = {
  TvShowDetails: {
    screen: TvShowDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton name={params.name} type='tv' id={params.id} />
    })
  },
  SeasonDetails: {
    screen: SeasonDetails,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
      ...StackNavHeaderStyles
    })
  },
  ...CommonRoutes
}

const TvShowStack = StackNavigator(
  {
    TvShow: {
      screen: TvShow,
      navigationOptions: {
        title: 'TvShows',
        ...StackNavHeaderStyles
      }
    },
    AllTvShows: {
      screen: AllTvShows,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.category,
        ...StackNavHeaderStyles
      })
    },
    ...TvShowDetailsRoutes
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
)

export { TvShowDetailsRoutes }
export default TvShowStack
