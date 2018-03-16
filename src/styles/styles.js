import {StyleSheet, Platform} from 'react-native'
import theme from 'react-native-theme';

import APP_CONSTANT from './../utilities/constants.js'

const marginTop = APP_CONSTANT.height / APP_CONSTANT.goldenRatio
const primaryColor = '#32CD32'
const headerBackgroundColor = '#222222'
const headerBorderColor = '#181818'
const backgroundColor = 'rgba(32, 32, 32, 0.9)'
const primaryTextColor = '#FFFFFF'
const secondaryTextColor = '#E1E1E1'
const castBackground = '#595959'
const imagePlaceholder = '#545454'
const screenBackground = '#181818'
const splashScreenBackground = '#040404'
const trailerBackground = '#020202'
const searchItemBackground = '#393939'

const headerBackgroundColor_dark = '#222222'
const headerBorderColor_dark = '#181818'
const backgroundColor_dark = 'rgba(32, 32, 32, 0.9)'
const headerTextColor_dark = '#CFCFCF'
const primaryTextColor_dark = '#FFFFFF'
const secondaryTextColor_dark = '#E1E1E1'
const castBackground_dark = '#595959'
const imagePlaceholder_dark = '#545454'
const screenBackground_dark = '#181818'
const splashScreenBackground_dark = '#040404'
const trailerBackground_dark = '#020202'
const searchItemBackground_dark = '#393939'

const headerBackgroundColor_light = '#F1F1F1'
const headerBorderColor_light = '#E1E1E1'
const backgroundColor_light = '#FFFFFF'
const headerTextColor_light = '#333333'
const primaryTextColor_light = '#444444'
const secondaryTextColor_light = '#616161'
const castBackground_light = '#B5B5B5'
const imagePlaceholder_light = '#C4C4C4'
const screenBackground_light = '#FFFFFF'
const splashScreenBackground_light = '#FFFFFF'
const trailerBackground_light = '#FCFCFC'
const searchItemBackground_light = '#C9C9C9'

theme.add({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  detailsContainer: {
    marginTop,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: backgroundColor
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerBackground: {
    backgroundColor: headerBackgroundColor
  },
  headerTextColor: {
    color: headerTextColor_dark
  },
  text: {
    color: primaryTextColor
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  headingText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 6,
    paddingBottom: 6
  },
  subHeadingText: {
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 6,
    paddingBottom: 6
  },
  normalText: {
    fontSize: 12
  },
  secondaryText: {
    color: secondaryTextColor,
    paddingBottom: 4
  },
  textStickToBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  avatarContainer: {
    width: 100,
    height: 60
  },
  castBackground: {
    flex: 1,
    height: (0.618 * (APP_CONSTANT.height - 104)),
    backgroundColor: castBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  castBiography: {
    padding: 20,
    backgroundColor: backgroundColor
  },
  avatarSize: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
    marginRight: 20,
    marginLeft: 20
  },
  avatarBigSize: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  avatarText: {
    maxWidth: 90,
    textAlign: 'center'
  },
  imagePlaceholder: {
    backgroundColor: imagePlaceholder
  },
  screenBackgroundColor: {
    backgroundColor: screenBackground
  },
  splashScreenBackground: {
    backgroundColor: splashScreenBackground
  },
  trailerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#616161',
    backgroundColor: '#020202'
  },
  trailerPlayIcon: {},
  trailerTitle: {
    textAlign: 'left',
    paddingLeft: 4
  },
  centerContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appName: {
    marginTop: 15,
    fontSize: 48,
    fontWeight: '500'
  },
  startupScreenTextProps: {
    color: primaryColor,
    textAlign: 'center'
  },
  flexContainer: {
    flex: 1
  },
  detailHeadings: {
    marginTop: 15,
    marginBottom: 4
  },
  searchItem: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    padding: 2,
    margin: 6,
    backgroundColor: '#393939',
    shadowRadius: 0,
    shadowColor: '#191919'
  },
  searchItemImage: {
    width: 64,
    height: 86
  },
  searchItemData: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25
  },
  searchResult: {
    marginBottom: 200
  },
  rightArrow: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5
  },
  episodeItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1
  },
  episodePosterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  episodePoster: {
    width: 92,
    height: 52
  },
  episodeDesc: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  listContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    height: 54,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4
  },
  listTitle: {
    flexGrow: 1,
    paddingLeft: 5
  },
  listValue: {
    flexGrow: 3,
    paddingRight: 5
  },
  popularSearchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popularSearch: {
    marginTop: 4
  },
  settingDetailsTitle: {
    marginTop: 6,
    marginBottom: 8,
    marginLeft: 6
  }
})

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  detailsContainer: {
    marginTop,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: backgroundColor
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerBackground: {
    backgroundColor: headerBackgroundColor
  },
  headerTextColor: {
    color: '#CFCFCF'
  },
  text: {
    color: '#ffffff'
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  headingText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 6,
    paddingBottom: 6
  },
  subHeadingText: {
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 6,
    paddingBottom: 6
  },
  normalText: {
    fontSize: 12
  },
  secondaryText: {
    color: '#e1e1e1',
    paddingBottom: 4
  },
  textStickToBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  avatarContainer: {
    width: 100,
    height: 60
  },
  castBackground: {
    flex: 1,
    height: (0.618 * (APP_CONSTANT.height - 104)),
    backgroundColor: '#595959',
    alignItems: 'center',
    justifyContent: 'center'
  },
  castBiography: {
    padding: 20,
    backgroundColor: backgroundColor
  },
  avatarSize: {
    // backgroundColor: '#545454',
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
    marginRight: 20,
    marginLeft: 20
  },
  avatarBigSize: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  avatarText: {
    maxWidth: 90,
    textAlign: 'center'
  },
  imagePlaceholder: {
    backgroundColor: '#545454'
  },
  screenBackgroundColor: {
    // backgroundColor: 'rgba(4, 4, 4, 0.75)'
    backgroundColor: '#181818'
  },
  splashScreenBackground: {
    backgroundColor: '#040404'
  },
  trailerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#616161',
    backgroundColor: '#020202'
  },
  trailerPlayIcon: {},
  trailerTitle: {
    textAlign: 'left',
    paddingLeft: 4
  },
  centerContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appName: {
    marginTop: 15,
    fontSize: 48,
    fontWeight: '500'
  },
  startupScreenTextProps: {
    color: primaryColor,
    textAlign: 'center'
  },
  flexContainer: {
    flex: 1
  },
  detailHeadings: {
    marginTop: 15,
    marginBottom: 4
  },
  searchItem: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    padding: 2,
    margin: 6,
    backgroundColor: '#393939',
    shadowRadius: 0,
    shadowColor: '#191919'
  },
  searchItemImage: {
    width: 64,
    height: 86
  },
  searchItemData: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25
  },
  searchResult: {
    marginBottom: 200
  },
  rightArrow: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5
  },
  episodeItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1
  },
  episodePosterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  episodePoster: {
    width: 92,
    height: 52
  },
  episodeDesc: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  listContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    height: 54,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4
  },
  listTitle: {
    flexGrow: 1,
    paddingLeft: 5
  },
  listValue: {
    flexGrow: 3,
    paddingRight: 5
  },
  popularSearchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popularSearch: {
    marginTop: 4
  },
  settingDetailsTitle: {
    marginTop: 6,
    marginBottom: 8,
    marginLeft: 6
  }
})

// Style for light theme
theme.add({
  detailsContainer: {
    marginTop,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: backgroundColor_light
  },
  castBiography: {
    padding: 20,
    backgroundColor: backgroundColor_light
  },
  text: {
    color: primaryTextColor_light
  },
  secondaryText: {
    color: secondaryTextColor_light,
    paddingBottom: 4
  },
  headerBackground: {
    backgroundColor: headerBackgroundColor_light
  },
  headerTextColor: {
    color: headerTextColor_light
  },
  castBackground: {
    flex: 1,
    height: (0.618 * (APP_CONSTANT.height - 104)),
    backgroundColor: castBackground_light,
    alignItems: 'center',
    justifyContent: 'center'
  },
  castBiography: {
    padding: 20,
    backgroundColor: backgroundColor_light
  },
  imagePlaceholder: {
    backgroundColor: imagePlaceholder_light
  },
  screenBackgroundColor: {
    backgroundColor: screenBackground_light
  },
  splashScreenBackground: {
    backgroundColor: splashScreenBackground_light
  },
  trailerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#616161',
    backgroundColor: trailerBackground_light
  },
  searchItem: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    padding: 2,
    margin: 6,
    backgroundColor: searchItemBackground_light,
    shadowRadius: 0,
    shadowColor: '#191919'
  }
}, 'Light');

// Style for dark theme
theme.add({
  detailsContainer: {
    marginTop,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: backgroundColor_dark
  },
  castBiography: {
    padding: 20,
    backgroundColor: backgroundColor_dark
  },
  text: {
    color: primaryTextColor_dark
  },
  secondaryText: {
    color: secondaryTextColor_dark,
    paddingBottom: 4
  },
  headerBackground: {
    backgroundColor: headerBackgroundColor_dark
  },
  headerTextColor: {
    color: headerTextColor_dark
  },
  castBackground: {
    flex: 1,
    height: (0.618 * (APP_CONSTANT.height - 104)),
    backgroundColor: castBackground_dark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  castBiography: {
    padding: 20,
    backgroundColor: backgroundColor_dark
  },
  imagePlaceholder: {
    backgroundColor: imagePlaceholder_dark
  },
  screenBackgroundColor: {
    backgroundColor: screenBackground_dark
  },
  splashScreenBackground: {
    backgroundColor: splashScreenBackground_dark
  },
  trailerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#616161',
    backgroundColor: trailerBackground_dark
  },
  searchItem: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    padding: 2,
    margin: 6,
    backgroundColor: searchItemBackground_dark,
    shadowRadius: 0,
    shadowColor: '#191919'
  }
}, 'Dark');

const StackNavHeaderStyles = {
  headerTitleStyle: {
    color: '#CFCFCF'
  },
  headerStyle: {
    backgroundColor: headerBackgroundColor
  },
  headerTintColor: primaryColor
}

export {StackNavHeaderStyles, primaryColor, marginTop, headerBackgroundColor, headerBorderColor}

export default style
