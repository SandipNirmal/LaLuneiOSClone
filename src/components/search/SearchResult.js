import React from 'react'
import {View, ScrollView, TouchableOpacity} from 'react-native'

import PopularSearch from './../search/PopularSearch';
import style from '../../styles/light-theme'
import SearchItem from './SearchItem'

const SearchResult = ({items, popular, config, onSelect, onSelectPopular}) => {
  return (
    <View>
      <ScrollView style={style.searchResult}>
        {items.length ? 
        items.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => { onSelect(item) }}>
            <SearchItem item={item} config={config} />
          </TouchableOpacity>
        ))
        : <PopularSearch data={popular} onSelect={onSelectPopular}/>
      }
      </ScrollView>
    </View>
  )
}

export default SearchResult
