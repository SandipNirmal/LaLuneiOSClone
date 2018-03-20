import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

import MainScreen from '../router'

// Refer https://reactnavigation.org/docs/redux-integration.html

// following is to resolve issue https://github.com/infinitered/ignite/issues/1225
// for react-navigation 1.0.0-beta.30
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)
const addListener = createReduxBoundAddListener('root')
// end for react-navigation 1.0.0-beta.30

class AppNavigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  /**
   * Close the app if we are on the main screen of the current tab and a back
   * button is hit
   */
  closeApp = () => {
    const { navigationState } = this.props
    const index = navigationState.index
    // Are we on the main screen of the tab ? i.e. not on any details page
    return navigationState.routes[index].index == 0 ? true : false
  }

  onBackPress = () => {
    if (this.closeApp()) return false
    this.props.dispatch(NavigationActions.back())
    return true
  };

  render () {
    const { navigationState, dispatch } = this.props
    return (
      <MainScreen
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationState,
          addListener
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation
})

export default connect(mapStateToProps)(AppNavigation)
