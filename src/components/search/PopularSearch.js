import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {styles} from 'react-native-theme'

// import style from './../../styles/styles'
// import style from './../../styles/light-theme'

const PopularSearch = ({data, onSelect}) => {

  return (
    <View style={[styles.popularSearchContainer]}>
      <Text style={[styles.text, styles.headingText]}>Popular Searches</Text>

      {data.map((popular) => (
        <TouchableOpacity key={popular.id} 
          style={[styles.popularSearch]}
          onPress={() => {onSelect(popular.title)}}>
          <Text style={[styles.text, styles.subHeadingText]}>
            {popular.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default PopularSearch;
