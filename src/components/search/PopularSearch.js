import React from 'react'

import {View, TouchableOpacity, Text} from 'react-native'
// import style from './../../styles/styles'
import style from './../../styles/light-theme'

const PopularSearch = ({data, onSelect}) => {

  return (
    <View style={[style.popularSearchContainer]}>
      <Text style={[style.text, style.headingText]}>Popular Searches</Text>

      {data.map((popular) => (
        <TouchableOpacity key={popular.id} 
          style={[style.popularSearch]}
          onPress={() => {onSelect(popular.title)}}>
          <Text style={[style.text, style.subHeadingText]}>
            {popular.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default PopularSearch;
