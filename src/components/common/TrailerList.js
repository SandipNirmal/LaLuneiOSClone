import React from 'react'
import {View, Text, ScrollView} from 'react-native'

import TrailerItem from './TrailerItem'
import style from '../../styles/light-theme'

const Trailer = (props) => {
  const showTrailers = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style.posterList}>

        {props.videos.map((video, index) => (
          <TrailerItem key={index} video={video} onPlay={props.playVideo} />
        ))}
      </ScrollView>
    )
  }
  return (
    <View>
      <Text style={[style.text, style.headingText, style.detailHeadings]}>Trailers</Text>

      {props.videos.length
        ? showTrailers()
        : <View style={{height: 100, alignContent: 'center', alignItems: 'center'}}>
          <Text
            style={[style.text, style.subHeadingText]}>
            No Trailers
          </Text>
        </View>
      }
    </View>
  )
}

export default Trailer
