import React from 'react'
import {View, Text, Image} from 'react-native'
import {connect} from 'react-redux'

// import style from './../../styles/styles'
import {styles} from 'react-native-theme';

const EpisodeItem = ({data, config}) => {
  const {name, overview, still_path, episode_number} = data
  const {secureBaseUrl, stillSize} = config.image
  const episodeImg = `${secureBaseUrl}${stillSize}/${still_path}`

  return (
    <View style={styles.episodeItem}>
      <View style={styles.episodePosterContainer}>
        <Image
          style={styles.episodePoster}
          source={{uri: episodeImg}}
        />
      </View>
      <View style={styles.episodeDesc}>
        <Text style={[styles.text, styles.subHeadingText]}>{name}</Text>
        <Text style={[styles.secondaryText, styles.normalText]}>Episode #{episode_number}</Text>
        <Text style={[styles.text, styles.normalText]}>{overview}</Text>
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  config: state.configuration
})

export default connect(mapStateToProps)(EpisodeItem)
