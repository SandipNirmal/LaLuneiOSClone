import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class MovieDetails extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });

  render() {
    return(
      <View>
        <Text>
          Movie Details
        </Text>
      </View>
    )
  }
}

export default MovieDetails;
