import React, { Component } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { saveSettingsAction } from './../../Actions'
import { MovieDBListItem, TouchableListItem } from './../common/ListItem';
// import style from './../../styles/styles';
import style from './../../styles/light-theme';

const appInfo = [
  {
    name: 'App Name',
    value: 'MovieDB'
  }, {
    name: 'App Version',
    value: '0.0.1'
  }
];

const settings = [
  {
    name: 'Language',
    values: ['IN-hi', 'US-en', 'UK-en']
  }, {
    name: 'Region',
    values: ['IN', 'US', 'UK']
  }, {
    name: 'Theme',
    values: ['Light', 'Dark']
  }
]

class Settings extends Component {

  onSettingsChange = (values) => {
    this.props.saveSettingsAction(values);
  }

  render() {
    return (
      <View>
        <ScrollView style={{marginTop: 20,minHeight: 400}}>
          <Text style={[style.text, style.headingText]}>
            About
          </Text>
          {appInfo.map((info, index) => (
          <MovieDBListItem name={info.name} value={info.value} key={index}/>
          ))}

          <View style={{marginTop: 20}}>
            <Text style={[style.text, style.headingText]}>
              Language and Region
            </Text>

            {settings.map(({name, values}) => (<TouchableListItem
              key={name}
              name={name}
              onPress={() => {
              this.props.navigation.dispatch(NavigationActions.navigate({
                  routeName: 'SettingDetails',
                  params: {
                    name,
                    values,
                    onSelect: this.onSettingsChange
                  }
                }))
            }}/>))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(null, { saveSettingsAction })(Settings);
