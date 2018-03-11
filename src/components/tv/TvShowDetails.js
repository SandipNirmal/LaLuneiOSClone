import React, {Component} from 'react'
import Details from '../base/Details'
import Constant from '../../utilities/constants'
import HorizontalImageList from '../common/ImageList'
import style from '../../styles/light-theme'
import * as _ from 'lodash'
import { getUriPopulated } from '../../utilities/utils'
import { connect } from 'react-redux'
import {
  castSelected,
  searchItemDetailsFetched,
  tvShowDetailsFetched
} from '../../Actions'
import { NavigationActions } from 'react-navigation'

class TvShowDetails extends Details {
  componentDidMount () {
    const baseUrl = Constant.api_base_url
    const apiKey = Constant.api_key
    const tvShow_url = '/tv/'
    const appendResponse = 'append_to_response=videos,images'
    const tvShowId = this.props.details.id

    const tvShowUrl = `${baseUrl}${tvShow_url}${tvShowId}?${apiKey}&${appendResponse}`
    const tvShowCreditsUrl = `${baseUrl}${tvShow_url}${tvShowId}/credits?${apiKey}`

    this.fetchDetails(tvShowUrl, tvShowCreditsUrl)
  }

  showSeasonDetails (season) {
    this.props.navigation.navigate('SeasonDetails', {season: season,
      title: this.props.details.name,
      tvShowId: this.props.details.id
    })
  }

  getSpecialComponent () {
    const seasons = _.get(this, 'props.details.seasons', [])
    const { config } = this.props

    return <HorizontalImageList
      isTouchableImage
      title='Seasons'
      style={config.style.posterSize}
      onPress={this.showSeasonDetails.bind(this)}
      images={getUriPopulated(seasons.sort((a, b) => b.season_number - a.season_number), config, 'posterSizeForImageList')}
    />
  }
}

const mapStateToProps = ({tabNavHelper, search, tvShows, configuration}) => ({
  details: tabNavHelper.currentTab === 'Search' ? search.details : tvShows.details,
  currentTab: tabNavHelper.currentTab,
  config: configuration
})

const mapDispatchToProps = dispatch => ({
  onDetailsFetched: (details, category, currentTab) => {
    if (currentTab === 'Search') {
      dispatch(searchItemDetailsFetched(details, category))
    } else {
      dispatch(tvShowDetailsFetched(details, category))
    }
  },
  onCastSelected: (cast, currentTab) => {
    dispatch(castSelected(cast, currentTab))
    dispatch(NavigationActions.navigate({routeName: 'CastDetails',
      params: {
        name: cast.name,
        id: cast.id
      }}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails)
