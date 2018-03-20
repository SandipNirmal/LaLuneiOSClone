import React, {Component} from 'react'
import {ActivityIndicator, Text, View} from 'react-native'
import * as _ from 'lodash'
import {connect} from 'react-redux'
import axios from 'axios'
import {styles} from 'react-native-theme'
import {Avatar} from 'react-native-elements'

import {configFetched, movieFetched} from '../Actions'
import {getUriPopulated} from '../utilities/utils'
import Constant from '../utilities/constants'

import {primaryColor} from '../styles/styles'

class SplashScreen extends Component {
  componentDidMount() {
    const apiKey = Constant.api_key
    let uri = `${Constant.api_base_url}/configuration?${apiKey}`
    const {onFetchCompleted, onConfigFetched, config, settings: {
        language
      }} = this.props

    axios.get(uri)
      .then(({data}) => {
        onConfigFetched(data)
        uri = `${Constant.api_base_url}/movie/now_playing?${apiKey}&language=${language}&page=1`

        axios.get(uri).
          then(({data}) => {
            onFetchCompleted('nowShowing', getUriPopulated(data.results, config, 'posterSizeForImageList'))
          }).catch(error => console.log(error.response))
      }).catch(error => console.log(error.response))
  }

  render() {
    return (
      <View style={[styles.centerContentContainer, styles.splashScreenBackground]}>
        <Avatar
          xlarge
          rounded
          containerStyle={{
          backgroundColor: primaryColor
        }}
          title='M'
          titleStyle={{
          fontWeight: '900',
          fontSize: 100
        }}/>
        <Text style={[styles.appName, styles.startupScreenTextProps]}>
          MovieDB
        </Text>
        <View style={{
          marginTop: 50,
          marginBottom: 50
        }}>
          <ActivityIndicator size='large' color={primaryColor}/>
        </View>
        <Text style={[styles.titleText, styles.startupScreenTextProps]}>
          For everyone in love with movies and TV Shows
        </Text>
      </View>
    )
  }
};

const mapStateToProps = state => ({config: state.configuration, settings: state.settings})

const mapDispatchToProps = dispatch => ({
  onFetchCompleted: (category, movies) => {
    dispatch(movieFetched(category, movies))
  },
  onConfigFetched: config => {
    dispatch(configFetched(config))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
