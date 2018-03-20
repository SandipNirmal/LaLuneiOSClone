import React from 'react'
import {View, Text, Image} from 'react-native'
import {styles} from 'react-native-theme'

const SearchItem = ({item, config}) => {
  const { secureBaseUrl, profileSize, posterSizeForImageList } = config.image
  const { name, title, media_type, profile_path, poster_path } = item

  let size = posterSizeForImageList
  let path = poster_path
  if (media_type === 'person') {
    size = profileSize
    path = profile_path
  }

  const uri = `${secureBaseUrl}${size}${path}`
  console.log('uri ', uri)

  return (
    <View style={styles.searchItem}>
      <View style={[styles.searchItemImage, styles.imagePlaceholder]}>
        <Image source={{uri}} style={styles.searchItemImage} />
      </View>
      <View style={styles.searchItemData}>
        <Text style={[styles.text, styles.headingText]}>{name || title}</Text>
        <Text style={[styles.text, styles.normalText]}>{media_type.toUpperCase()}</Text>
      </View>
    </View>
  )
}

export default SearchItem
