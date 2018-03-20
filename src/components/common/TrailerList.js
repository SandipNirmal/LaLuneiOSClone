import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {styles} from 'react-native-theme'

import TrailerItem from './TrailerItem'

const Trailer = (props) => {
  const showTrailers = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.posterList}>

        {props.videos.map((video, index) => (
          <TrailerItem key={index} video={video} onPlay={props.playVideo} />
        ))}
      </ScrollView>
    )
  }
  return (
    <View>
      <Text style={[styles.text, styles.headingText, styles.detailHeadings]}>Trailers</Text>

      {props.videos.length
        ? showTrailers()
        : <View style={{height: 100, alignContent: 'center', alignItems: 'center'}}>
          <Text
            style={[styles.text, styles.subHeadingText]}>
            No Trailers
          </Text>
        </View>
      }
    </View>
  )
}

export default Trailer
