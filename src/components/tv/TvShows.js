import React, {Component} from 'react'
import {connect} from 'react-redux'
import Shows from '../base/Shows'
import {selectedTvShow, fetchingTvShows, tvShowsFetched} from '../../Actions'
import {NavigationActions} from 'react-navigation'
import * as _ from 'lodash'

import style from '../../styles/light-theme'

class TvShows extends Shows {
  constructor (props) {
    super(props)
    this.carouselCategory = 'showingToday'
  }

  /**
   * @overrides
   */
  componentDidMount () {
    // calls base class functions
    if (_.isEmpty(this.props.categories.showingToday)) {
      this
        .props
        .onFetching()
    }
    this.fetch('showingToday', '/tv/airing_today')
    this.fetch('topRated', '/tv/top_rated')
    this.fetch('popular', '/tv/popular')
  }

  /**
   * @overrides
   */
  showAll (category) {
    this
      .props
      .navigation
      .navigate('AllTvShows', {category: category})
  }
}

const mapStateToProps = state => ({
  ...state.tvShows,
  config: state.configuration,
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  onFetching: () => {
    dispatch(fetchingTvShows())
  },
  onFetchCompleted: (category, tvShows) => {
    dispatch(tvShowsFetched(category, tvShows))
  },
  onShowDetails: (tvShow) => {
    dispatch(selectedTvShow(tvShow))
    dispatch(NavigationActions.navigate({routeName: 'TvShowDetails',
      params: {
        id: tvShow.id,
        name: tvShow.name
      }}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TvShows)
