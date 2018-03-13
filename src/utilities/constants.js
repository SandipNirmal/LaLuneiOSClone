import {Dimensions} from 'react-native'
import Config from 'react-native-config';

const {height, width} = Dimensions.get('screen')
const tabBarHeight = 54

const APP_CONSTANT = {
  api_base_url: Config.API_ENDPOINT,
  api_key: `api_key=${Config.API_KEY}`,
  lan_region: '&language=IN-hi&region=IN&page=1',
  goldenRatio: 1.618,
  width,
  height: height - (tabBarHeight * 2)
}

export default APP_CONSTANT
