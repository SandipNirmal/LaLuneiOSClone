import React, {Component} from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Alert
} from 'react-native'
import PropTypes from 'prop-types'

import style from '../../styles/light-theme'

const CastList = (props) => {
  return (
    <View>
      <Text style={[style.text, style.headingText, style.detailHeadings]}>
        {props.title}
      </Text>
      <ScrollView horizontal>
        {props
          .items
          .map((item, index) => (
            <TouchableOpacity
              key={index}
              style={style.avatarContaier}
              onPress={() => props.onPress(item)}
            >
              <Image
                style={style.avatarSize}
                source={{
                  uri: item.uri
                }} />
              <Text
                style={[style.text, style.normalText, style.avatarText]}
                numberOfLines={2}
                ellipsizeMode='tail'>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )
}

export default CastList
