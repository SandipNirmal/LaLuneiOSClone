import React, { Component } from 'react'
import {View, Text, ScrollView } from 'react-native'
import {connect} from 'react-redux'
import axios from 'axios'

import { fetchSeasonDetails } from './../../Actions'
import BackgroundImage from '../common/BackgroundImage'
import ShowOverview from '../common/ShowOverview'
import EpisodeList from './EpisodeList'

import Constant from './../../utilities/constants'
import style from '../../styles/light-theme'

class SeasonDetails extends Component {
  // TODO: Use redux store
  constructor (props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  componentDidMount () {
    const {tvShowId, season: {season_number}} = this.props.navigation.state.params
    this.props.fetchSeasonDetails(tvShowId, season_number, null, (err) => {
      this.setState({
        error: err.response.data.message
      })
    })
  }

  render () {
    const season = this.props.navigation.state.params.season;
    const { poster_path, air_date, episode_count, season_number, episodes = [] } = this.props.season || season
    const { secureBaseUrl, posterSizeForBackground } = this.props.config.image
    const bgImage = `${secureBaseUrl}${posterSizeForBackground}/${poster_path}`

    return (
      <View style={[{ flex: 1 }, style.screenBackgroundColor]}>
        <BackgroundImage uri={bgImage} />
        <ScrollView>
          <View style={style.detailsContainer}>
            <Text style={[style.text, style.titleText]}>
              Season {season_number}
            </Text>
            <ShowOverview
              date={air_date || 'Unknown'}
              episodes={episode_count || episodes.length}
            />
            <EpisodeList episodes={episodes} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({configuration, season}) => ({
  config: configuration,
  season
})

export default connect(mapStateToProps, {fetchSeasonDetails})(SeasonDetails)
