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
import {styles} from 'react-native-theme'

// import style from '../../styles/light-theme'

const CastList = (props) => {
  return (
    <View>
      <Text style={[styles.text, styles.headingText, styles.detailHeadings]}>
        {props.title}
      </Text>
      <ScrollView horizontal>
        {props
          .items
          .map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.avatarContaier}
              onPress={() => props.onPress(item)}
            >
              <Image
                style={styles.avatarSize}
                source={{
                  uri: item.uri
                }} />
              <Text
                style={[styles.text, styles.normalText, styles.avatarText]}
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
