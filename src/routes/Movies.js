import React from 'react'
import {StackNavigator} from 'react-navigation'
import theme from 'react-native-theme'

import Movies from '../components/movies/Movies'
import MovieDetails from '../components/movies/MovieDetails'
import AllMovies from '../components/movies/AllMovies'
import ShareButton from './../components/common/ShareButton'
import CommonRoutes from './Common'

import {StackNavHeaderStyles_Light, StackNavHeaderStyles_Dark} from '../styles/styles'

const StackNavHeaderStyles = theme.name === 'Dark'
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
      headerRight: <ShareButton
        name={params.name}
        type='movie'
        id={params.id} />
    })
  },
  ...CommonRoutes
}

const MoviesStack = StackNavigator(
  {
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
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
)

export { MovieDetailsRoutes }
export default MoviesStack
