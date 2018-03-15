import axios from 'axios'
import {AsyncStorage} from 'react-native'
import theme from 'react-native-theme';

import {getSeasonDetails} from './services/seasons';
import {getCastDetails} from './services/person';
import initialState from './State'

const SETTINGS_KEY = 'Settings'

// CONFIGURATION
export const CONFIG_FETCHED = 'CONFIG_FETCHED'
export const configFetched = (config) => ({
  type: 'CONFIG_FETCHED',
  config
})

// MOVIES
export const FETCHING_MOVIES = 'FETCHING_MOVIES'
export const fetchingMovies = () => ({
  type: 'FETCHING_MOVIES'
})

export const NOW_SHOWING_MOVIES_FETCHED = 'NOW_SHOWING_MOVIES_FETCHED'
export const COMING_SOON_MOVIES_FETCHED = 'COMING_SOON_MOVIES_FETCHED'
export const POPULAR_MOVIES_FETCHED = 'POPULAR_MOVIES_FETCHED'

export const movieFetched = (category, movies) => ({
  type: category.toUnderScore().toUpperCase() + '_MOVIES_FETCHED',
  movies
})

export const MOVIE_SELECTED = 'MOVIE_SELECTED'
export const selectedMovie = (movie) => ({
  type: 'MOVIE_SELECTED',
  movie
})

export const MOVIE_DETAILS_FETCHED = 'MOVIE_DETAILS_FETCHED'
export const movieDetailsFetched = (details, category) => ({
  type: 'MOVIE_DETAILS_FETCHED',
  details,
  category
})

// TV SHOWS
export const FETCHING_TV_SHOWS = 'FETCHING_TV_SHOWS'
export const fetchingTvShows = () => ({
  type: 'FETCHING_TV_SHOWS'
})

export const SHOWING_TODAY_TV_SHOWS_FETCHED = 'SHOWING_TODAY_TV_SHOWS_FETCHED'
export const TOP_RATED_TV_SHOWS_FETCHED = 'TOP_RATED_TV_SHOWS_FETCHED'
export const POPULAR_TV_SHOWS_FETCHED = 'POPULAR_TV_SHOWS_FETCHED'

export const tvShowsFetched = (category, tvShows) => ({
  type: category.toUnderScore().toUpperCase() + '_TV_SHOWS_FETCHED',
  tvShows
})

export const TV_SHOW_SELECTED = 'TV_SHOW_SELECTED'
export const selectedTvShow = (tvShow) => ({
  type: 'TV_SHOW_SELECTED',
  tvShow
})

export const TV_SHOW_DETAILS_FETCHED = 'TV_SHOW_DETAILS_FETCHED'
export const tvShowDetailsFetched = (details, category) => ({
  type: 'TV_SHOW_DETAILS_FETCHED',
  details,
  category
})

// SEARCH
export const SEARCHING_MOVIES_ETC = 'SEARCHING_MOVIES_ETC'
export const searchingForMoviesEtc = () => ({
  type: 'SEARCHING_MOVIES_ETC'
})

export const DONE_SEARCHING_MOVIES_ETC = 'DONE_SEARCHING_MOVIES_ETC'
export const doneSearchingMoviesEtc = (results) => ({
  type: 'DONE_SEARCHING_MOVIES_ETC',
  results
})

export const SEARCH_FILTER_CHANGED = 'SEARCH_FILTER_CHANGED'
export const searchFilterChanged = (index) => ({
  type: 'SEARCH_FILTER_CHANGED',
  index
})

export const SEARCH_RESULT_SELECTED = 'SEARCH_RESULT_SELECTED'
export const searchResultSelected = (result, mediaType) => ({
  type: 'SEARCH_RESULT_SELECTED',
  result,
  mediaType
})

export const SEARCH_ITEM_DETAILS_FETCHED = 'SEARCH_ITEM_DETAILS_FETCHED'
export const searchItemDetailsFetched = (details, category) => ({
  type: 'SEARCH_ITEM_DETAILS_FETCHED',
  details,
  category
})

// CAST
export const MOVIES_CAST_SELECTED = 'MOVIES_CAST_SELECTED'
export const TVSHOWS_CAST_SELECTED = 'TVSHOWS_CAST_SELECTED'
export const SEARCH_CAST_SELECTED = 'SEARCH_CAST_SELECTED'
export const castSelected = (cast, screen) => ({
  type: `${screen.toUpperCase()}_CAST_SELECTED`,
  cast
})

export const FETCHING_MOVIES_CAST_DETAILS = 'FETCHING_MOVIES_CAST_DETAILS'
export const FETCHING_TVSHOWS_CAST_DETAILS = 'FETCHING_TVSHOWS_CAST_DETAILS'
export const FETCHING_SEARCH_CAST_DETAILS = 'FETCHING_SEARCH_CAST_DETAILS'
export const fetchingCastDetails = (screen) => ({
  type: `FETCHING_${screen.toUpperCase()}_CAST_DETAILS`
})

export const MOVIES_CAST_DETAILS_FETCHED = 'MOVIES_CAST_DETAILS_FETCHED'
export const TVSHOWS_CAST_DETAILS_FETCHED = 'TVSHOWS_CAST_DETAILS_FETCHED'
export const SEARCH_CAST_DETAILS_FETCHED = 'SEARCH_CAST_DETAILS_FETCHED'
export const castDetailsFetched = (details, category, screen) => ({
  type: `${screen.toUpperCase()}_CAST_DETAILS_FETCHED`,
  details,
  category
})

export const FETCH_CAST_DETAILS = 'FETCH_CAST_DETAILS'

export function fetchCastDetails (castId) {
  const request = getCastDetails(castId);
  
  return {
    type: FETCH_CAST_DETAILS,
    payload: request
  }
}

// Layout
export const LAYOUT_CHANGED = 'LAYOUT_CHANGED'
export const layoutChanged = () => ({
  type: LAYOUT_CHANGED
})

// Settings
export const SETTINGS_LANGUAGE_CHANGED = 'SETTINGS_LANGUAGE_CHANGED'
export const SETTINGS_REGION_CHANGED = 'SETTINGS_REGION_CHANGED'
export const SETTINGS_THEME_CHANGED = 'SETTINGS_THEME_CHANGED'
export const FETCH_SETTINGS = 'FETCH_SETTINGS'
export const SAVE_SETTINGS = 'SAVE_SETTINGS'

export const fetchSettingsAction = async () => {
  const payload = JSON.parse(await AsyncStorage.getItem(SETTINGS_KEY)) || initialState['settings']

  return {
    type: FETCH_SETTINGS,
    payload
  }
}

export const saveSettingsAction = async (values = initialState['settings']) => {
  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(values))
    const payload = JSON.parse(await AsyncStorage.getItem(SETTINGS_KEY))

    // TODO - Might need to seperate each settings action handlers
    theme.active(payload.theme);

    return {
      type: SAVE_SETTINGS,
      payload
    }
  } catch (e) {
    return {
      type: SAVE_SETTINGS,
      payload: null
    }
  }
}

// SEASONS
export const FETCH_SEASON_DETAILS = 'FETCH_SEASON_DETAILS';

export const fetchSeasonDetails = (showId, season_number, success, err) => {
  const request = getSeasonDetails(showId, season_number);

  return {
    type: FETCH_SEASON_DETAILS,
    payload: request
  }
}
