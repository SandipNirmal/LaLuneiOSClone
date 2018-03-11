import React from 'react'
import {View, Text, Image} from 'react-native'

import style from '../../styles/light-theme'

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
    <View style={style.searchItem}>
      <View style={[style.searchItemImage, style.imagePlaceholder]}>
        <Image source={{uri}} style={style.searchItemImage} />
      </View>
      <View style={style.searchItemData}>
        <Text style={[style.text, style.headingText]}>{name || title}</Text>
        <Text style={[style.text, style.normalText]}>{media_type.toUpperCase()}</Text>
      </View>
    </View>
  )
}

export default SearchItem
