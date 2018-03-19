import React from 'react'
import theme from 'react-native-theme'

import CastDetails from '../components/common/CastDetails'
import VideoPlayer from '../components/common/VideoPlayer'
import ShareButton from '../components/common/ShareButton'
import {StackNavHeaderStyles_Light, StackNavHeaderStyles_Dark} from '../styles/styles'

const StackNavHeaderStyles = theme.name === 'Dark'
  ? StackNavHeaderStyles_Dark
  : StackNavHeaderStyles_Light;

const CommonRoutes = {
  CastDetails: {
    screen: CastDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton name={params.name} type='person' id={params.id}/>
    })
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
      headerVisible: false,
      ...StackNavHeaderStyles
    })
  }
}

export default CommonRoutes;
