import React from 'react'
import {StackNavigator} from 'react-navigation'
import theme from 'react-native-theme'

import Movies from '../components/movies/Movies'
import MovieDetails from '../components/movies/MovieDetails'
import AllMovies from '../components/movies/AllMovies'
import ShareButton from './../components/common/ShareButton'
import CommonRoutes from './Common'

import {StackNavHeaderStyles_Light, StackNavHeaderStyles_Dark, headerBackgroundColor_dark, headerBackgroundColor_light} from '../styles/styles'

const StackNavHeaderStyles = (theme.name === 'Dark' || theme.name === 'default')
  ? StackNavHeaderStyles_Dark
  : StackNavHeaderStyles_Light;

const MovieDetailsRoutes = {
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton name={params.name} type='movie' id={params.id}/>
    })
  },
  ...CommonRoutes
}

const MoviesStack = StackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      title: 'Movies',
      ...StackNavHeaderStyles
    }
  },
  AllMovies: {
    screen: AllMovies,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.category,
      ...StackNavHeaderStyles
    })
  },
  ...MovieDetailsRoutes
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: (theme.name === 'Dark' || theme.name === 'default')
      ? headerBackgroundColor_dark
      : headerBackgroundColor_light
  }
})

export {MovieDetailsRoutes}
export default MoviesStack
