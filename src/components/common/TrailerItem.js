import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import {connect} from 'react-redux'

import styles from '../../styles/light-theme'

const TrailerItem = ({style, video, onPlay}) => {
  return (
    <View>
      <Text style={[styles.text, styles.normalText, styles.trailerTitle]}>
        {video.name}
      </Text>
      <TouchableOpacity onPress={() => { onPlay(video.url) }}>
        <View
          style={[style.backdropSize, styles.centerContentContainer, styles.trailerContainer]}>
          <Icon
            name='youtube-play'
            type='font-awesome'
            size={50}
            color='#ff0000'
            style={style.trailerPlayIcon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => ({
  style: state.configuration.style
})
export default connect(mapStateToProps)(TrailerItem)
