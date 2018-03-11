import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { FlatImageList } from '../common/ImageList'
import { connect } from 'react-redux'
import { selectedMovie } from '../../Actions'
import { NavigationActions } from 'react-navigation'

import style from '../../styles/light-theme'

// return device width and height
const {height, width} = Dimensions.get('window')
const numColumns = parseInt(width / (92 + (5 * 2)))

class AllMovies extends Component {
  render () {
    const { onShowDetails, categories, config } = this.props
    const { category } = this.props.navigation.state.params

    return (
      // TODO: Move config.style to FlatImageList? Think customization !
      <FlatImageList
        numColumns={config.image.numColumns}
        style={{
          bgColor: style.screenBackgroundColor,
          imageStyle: config.style.posterSize
        }}
        images={categories[category.toCategory()]}
        onPress={onShowDetails.bind(this)}
      />
    )
  }
}

const mapStateToProps = state => ({
  ...state.movies,
  config: state.configuration
})

const mapDispatchToProps = dispatch => ({
  onShowDetails: (movie) => {
    dispatch(selectedMovie(movie))
    dispatch(NavigationActions.navigate({routeName: 'MovieDetails',
      params: {
        name: movie.name,
        id: movie.id
      }}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)
