import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  FlatList,
  Text, TouchableOpacity,
  ScrollView, StyleSheet,
  View
} from 'react-native'
import {styles} from 'react-native-theme'
import * as _ from 'lodash'

import { TouchableImage, TouchableText } from './Touchable'

const HorizontalImageList = (props) => (
  <View style={styles.container}>
    <Title {...props} />
    <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      style={Styles.posterList}>
      {props.images.map((image, index) => (
        props.isTouchableImage
          ? <TouchableImage
            key={index}
            style={[styles.imagePlaceholder, props.style]}
            onPress={() => props.onPress(image)}
            uri={image.uri}
          />
          : <Image
            key={index}
            style={[styles.imagePlaceholder, props.style]}
            source={{uri: _.isString(image) ? image : image.uri}}
          />
      ))}
    </ScrollView>
  </View>
)

// TODO: See All should be of normatText. Nesting of text should fix it
// since TouchableText is involved, the situaion gets complicated.Fix this
const Title = (props) => (
  <View style={Styles.titleContainer}>
    <Text style={[styles.text, styles.headingText]}>
      {props.title}
    </Text>
    {
      props.hasSeeAllOption
        ? <TouchableText
          onPress={() => props.onShowAll(props.title, props.images)}
          text='See All &gt;'
        />
        : null
    }
  </View>
)

Title.propTypes = HorizontalImageList.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  isTouchableButton: PropTypes.bool,
  hasSeeAllOption: PropTypes.bool,
  onPress: (props, thisProp) => {
    if (props['isTouchableButton'] &&
      (!props[thisProp] || typeof (props[thisProp]) !== 'function')) {
      return new Error('onPress is required when isTouchableButton is true!')
    } else {
      return null
    }
  },
  onShowAll: (props, thisProp) => {
    if (props['hasSeeAllOption'] &&
      (!props[thisProp] || typeof (props[thisProp]) !== 'function')) {
      return new Error('onShowAll is required when hasSeeAllOption is true!')
    } else {
      return null
    }
  }
}

// Note, Changing numColumns on the fly is not supported. Change the key prop
// on FlatList when changing the number of columns to force refresh
const FlatImageList = (props) => (
  <FlatList
    key={'dummy_key_' + props.numColumns}
    style={props.style.bgColor}
    numColumns={props.numColumns}
    data={props.images}
    renderItem={({item}) =>
      <TouchableImage
        key={item.id}
        onPress={() => props.onPress(item)}
        style={[props.style.imageStyle, Styles.flatList]}
        uri={item.uri}
      />
    }
    keyExtractor={(item, index) => index}
  />
)

FlatImageList.protoTypes = {
  images: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  numColumns: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
}

const Styles = StyleSheet.create({
  // TODO: does ios have a standard? if so use that
  // Image size for poster size w92 on TMDB
  posterList: {
    flexDirection: 'row'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5
  },
  flatList: {
    justifyContent: 'space-between'
  }
})

export {FlatImageList}
export default HorizontalImageList
