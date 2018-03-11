import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types'

import style, { primaryColor } from '../../styles/light-theme'

const ShowOverview = (props) => {
  return (
    <View style={Style.container}>
      <View style={Style.infoItems}>
        <Icon name='event' color={primaryColor} size={30} />
        <Text style={[style.text, Style.infoText]}>
          {props.date}
        </Text>
      </View>
      { props.runtime &&
        <View style={Style.infoItems}>
          <Icon name='schedule' color={primaryColor} />
          <Text style={[style.text, Style.infoText]}>
            {props.runtime} Min
          </Text>
        </View>
      }
      <View style={Style.infoItems}>
        { props.ratings
          ? <Icon name='stars' color={primaryColor} />
          : props.episodes
            ? <Text style={[style.text, Style.titleText]}>Episodes: </Text>
            : null
        }
        <Text style={[style.text, Style.infoText]}>
          {props.ratings || props.episodes}
        </Text>
      </View>
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 6,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5
  },
  infoItems: {
    display: 'flex',
    flexDirection: 'row'
  },
  infoText: {
    fontSize: 14,
    lineHeight: 24,
    paddingLeft: 3
  },
  titleText: {
    fontSize: 18,
    color: primaryColor
  }
})

ShowOverview.propTypes = {
  date: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  ratings: PropTypes.number,
  episodes: PropTypes.number
}

export default ShowOverview
