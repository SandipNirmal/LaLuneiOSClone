import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

// import style from './../../styles/styles'
import style from './../../styles/light-theme';

const ListItem = ({name, value, selected}) => {
  return (
    <View style={style.listContainer}>
      <View style={style.listTitle}>
        <Text style={[style.text, style.subHeadingText]}>
          {name}
        </Text>
      </View>
      <View style={style.listValue}>
        <Text style={[style.text, style.normalText]}>
          {value}
        </Text>
      </View>
      
      {name && (name === selected) &&
      <View>
          <Icon
            name='check'
            color='#00aced'
          />
      </View>}
    </View>
  )
}

const MovieDBListItem = (props) => {
  const {name, value} = props
  return (
    <View>
      <ListItem name={name} value={value}/>
    </View>
  )
}

const TouchableListItem = ({name, value, selected, onPress}) => {
  return (
    <TouchableOpacity style={style.listContainer} onPress={onPress}>
      <ListItem name={name} value={value} selected={selected} />
    </TouchableOpacity>
  )
}

export {
  MovieDBListItem,
  TouchableListItem
}
