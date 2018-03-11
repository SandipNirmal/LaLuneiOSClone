import React, {Component} from 'react'
import Shows from '../base/Shows'
import {connect} from 'react-redux'
import {selectedMovie, fetchingMovies, movieFetched} from '../../Actions'
import {NavigationActions} from 'react-navigation'

import style from '../../styles/light-theme'

class Movies extends Shows {
  constructor (props) {
    super(props)
    this.carouselCategory = 'nowShowing'
  }

  /**
   * @overrides
   */
  componentDidMount () {
    // calls base class functions
    this.fetch('nowShowing', '/movie/now_playing')
    this.fetch('comingSoon', '/movie/upcoming')
    this.fetch('popular', '/movie/popular')
  }

  /**
   * @overrides
   */
  showAll (category) {
    this
      .props
      .navigation
      .navigate('AllMovies', {category: category})
  }
}

const mapStateToProps = state => ({
  ...state.movies,
  config: state.configuration,
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  onFetching: () => {
    dispatch(fetchingMovies())
  },
  onFetchCompleted: (category, movies) => {
    dispatch(movieFetched(category, movies))
  },
  onShowDetails: (movie) => {
    dispatch(selectedMovie(movie))
    dispatch(NavigationActions.navigate({
      routeName: 'MovieDetails',
      params: {
        id: movie.id,
        name: movie.original_title
      }
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
