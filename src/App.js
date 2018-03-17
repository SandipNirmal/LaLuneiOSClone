import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {StyleSheet, View, StatusBar} from 'react-native'
import Orientation from 'react-native-orientation'
import promise from 'redux-promise'
// TODO - Add theme support in root
import theme from 'react-native-theme'

import AppNavigation from './components/AppNavigation'
import SplashScreen from './components/SplashScreen'
import MovieDB from './reducers/root'
import {layoutChanged} from './Actions'

class Screen extends Component {
  render () {
    const {isFetching, onLayoutChange} = this.props
    const color = isFetching ? "#000000" : "#222222"
    return (
      <View style={styles.container} onLayout={onLayoutChange}>
         <StatusBar
           backgroundColor={color}
           barStyle="light-content"
         />
        { isFetching ? <SplashScreen /> : <AppNavigation /> }
      </View>
    )
  }
}

const mapStateToProps = state => ({isFetching: state.movies.isFetching})
const mapDispatchToProps = dispatch => ({
  onLayoutChange: (e) => {
    dispatch(layoutChanged())
  }
})

const AppRoot = connect(mapStateToProps, mapDispatchToProps)(Screen)

export default class App extends Component {
  // Component did mount event
  componentDidMount () {
    Orientation.lockToPortrait()
  }

  componentWillMount() {
    theme.setRoot(this);
    theme.active('Dark');
  }

  render () {
    // TODO - Use redux-promise middleware properly
    // https://medium.com/react-native-training/redux-4-ways-95a130da0cdc
    const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

    return (
      <Provider store={createStoreWithMiddleware(MovieDB)}>
        <AppRoot />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404'
  }
})
