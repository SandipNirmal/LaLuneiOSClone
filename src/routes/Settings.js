import {StackNavigator} from 'react-navigation'
import theme from 'react-native-theme'

import Settings from './../components/settings/Settings'
import SettingDetails from './../components/settings/SettingsDetail'
import {StackNavHeaderStyles_Light, StackNavHeaderStyles_Dark, headerBackgroundColor_light, headerBackgroundColor_dark} from '../styles/styles'

const StackNavHeaderStyles = (theme.name === 'Dark' || theme.name === 'default')
  ? StackNavHeaderStyles_Dark
  : StackNavHeaderStyles_Light;

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      ...StackNavHeaderStyles
    }
  },
  SettingDetails: {
    screen: SettingDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: `Choose ${params.name}`,
      ...StackNavHeaderStyles
    })
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: (theme.name === 'Dark' || theme.name === 'default')
      ? headerBackgroundColor_dark
      : headerBackgroundColor_light
  }
})

export default SettingsStack
