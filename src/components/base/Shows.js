import React, {Component} from 'react'
import {
  ActivityIndicator,
  ScrollView
} from 'react-native'
import axios from 'axios'

import HorizontalImageList from '../common/ImageList'
import Carousel from '../common/Carousel'
import Constant from '../../utilities/constants'
import { getUriPopulated } from '../../utilities/utils'

import style, { primaryColor } from '../../styles/light-theme'

String.prototype.toTitle = function () {
  return this.replace(/([A-Z])/g, ' $1').replace(/(.)/, c => c.toUpperCase())
}

class Shows extends Component {
  componentDidMount () {
    console.error('Need to override this in base class')
  }

  fetch (category, route) {
    const baseUrl = Constant.api_base_url
    const apiKey = Constant.api_key
    const { onFetchCompleted, config } = this.props
    const { language, region } = this.props.settings
    const uri = `${baseUrl}${route}?${apiKey}&language=${language}&region=${region}&page=1`

    axios.get(uri)
    .then(({data}) => {
      onFetchCompleted(category,
        getUriPopulated(data.results, config, 'posterSizeForImageList'))
    })
    .catch(error => console.error(error.response))
  }

  showDetails (show) {
    console.error('need to override this in base class')
  }

  showAll (category, shows) {
    console.error('need to override this in base class')
  }

  render () {
    const { isFetching, onShowDetails, categories, config } = this.props

    return (
      isFetching
        ? <ScrollView style={style.screenBackgroundColor}>
          <ActivityIndicator size='large' color={primaryColor} />
        </ScrollView>
        : <ScrollView style={style.screenBackgroundColor}>
          <Carousel
            images={getUriPopulated(categories[this.carouselCategory], config, 'backdropSize')}
            onPress={onShowDetails.bind(this)}
          />
          {Object.keys(categories).map((category, index) => (
            <HorizontalImageList
              isTouchableImage
              hasSeeAllOption
              key={index}
              title={category.toTitle()}
              style={config.style.posterSize}
              onShowAll={this.showAll.bind(this)}
              onPress={onShowDetails.bind(this)}
              images={categories[category]}
            />
          ))}
        </ScrollView>
    )
  }
}

export default Shows
