import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import {styles} from 'react-native-theme'

const ListItem = ({name, value, selected}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.listTitle}>
        <Text style={[styles.text, styles.subHeadingText]}>
          {name}
        </Text>
      </View>
      <View style={styles.listValue}>
        <Text style={[styles.text, styles.normalText]}>
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
    <TouchableOpacity style={styles.listContainer} onPress={onPress}>
      <ListItem name={name} value={value} selected={selected} />
    </TouchableOpacity>
  )
}

export {
  MovieDBListItem,
  TouchableListItem
}
