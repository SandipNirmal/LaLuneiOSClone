import React, {Component} from 'react';
import { 
  ActivityIndicator,
  Button,
  ScrollView, StyleSheet,
  Text,
  View,
  Linking,
  Platform
} from 'react-native';
import axios from 'axios'

import BackgroundImage from '../common/BackgroundImage';
import ShowOverview from '../common/ShowOverview';
import HorizontalImageList from '../common/ImageList';
import CastList from '../common/CastList'
import TrailerList from '../common/TrailerList';
import CastDetails from '../common/CastDetails';

import { getUriPopulated } from '../../utilities/utils';
import style, {marginTop} from '../../styles/light-theme';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      blur: 0
    };
  }

  componentDidMount() {
    console.error("Override!!");
  }

  getSpecialComponent() {
    console.error("Override!!");
  }

  fetchDetails(imagesUri, peopleUri) {
    const { onDetailsFetched, currentTab, config } = this.props;

    axios.get(imagesUri)
      .then(({data}) => {
        const {images, videos} = data;
        data.images = getUriPopulated(images.backdrops, config, 'backdropSize');
        data.videos = this.formVideoUrls(videos.results) 
        onDetailsFetched(data, 'imagesAndVideos', currentTab);
      }).catch((error) => { console.error(error.response); });

    axios.get(peopleUri)
      .then(({data}) => {
        const {crew, cast} = data;
        const people = {
          'directors': getUriPopulated(crew.filter((member) => 
            member.job === 'Director'), config, 'profileSize'),
          'casts': getUriPopulated(cast.sort((a, b) => a.order - b.order), config, 'profileSize')
        }
        onDetailsFetched(people, 'directorsAndCast', currentTab);
      }).catch((error) => { console.error(error.response); });
  }

  /**
   * Forms video urls
   */
  formVideoUrls(videos) {
    const filteredVideos = videos.filter((video) => video.site === 'YouTube');
    return filteredVideos.map((video) => {
      return {
        name: video.name,
        url: `https://www.youtube.com/embed/${video.key}?&autoplay=1`
      };
    });
  }

  showCastDetails(cast) {
    this.props.onCastSelected(cast, this.props.currentTab);
  }

  playVideo(url) {
    if (Platform.OS === 'ios') {
      this.props
        .navigation
        .navigate('VideoPlayer', {url});
    } else if (Platform.OS === 'android') {
      Linking
        .openURL(url)
        .catch(err => console.error('An error occurred', err));
    }
  }

  handleOnScroll = (e) => {
    const yOffset = e.nativeEvent.contentOffset.y;
    const blurConstant = 10;
    // If Y scroll position is more than detail poster then blur it
    if (yOffset > marginTop) {
      this.setState({
        opacity: 0,
        blur: blurConstant
      })
    } else {
      const opacity = 1 - (yOffset/marginTop);
      const blur = parseInt((yOffset * blurConstant ) / marginTop, 10);
      this.setState({
        opacity,
        blur
      })
    }
  }

  render() {
    const {
      config: {
        image: { secureBaseUrl, posterSizeForBackground },
        style: { backdropSize }
      },
      details: {
        title, images, videos, release_date, casts, first_air_date, runtime,
        vote_average, overview, poster_path
      }
    } = this.props;
    const bgImage = `${secureBaseUrl}${posterSizeForBackground}/${poster_path}`;

    return (
      <View style={[{ flex: 1 }, style.screenBackgroundColor]}>
        <BackgroundImage 
          uri={bgImage} 
          opacity={this.state.opacity}
          blur={this.state.blur}/>
        <ScrollView>

        { // TODO - Disabling onScroll blur. Need better solution
          /* onScroll={this.handleOnScroll} scrollEventThrottle={160} */}
          <View style={style.detailsContainer}>
            <Text style={[style.text, style.titleText]}>
              {title}
            </Text>

            <ShowOverview
              date={release_date || first_air_date || ''}
              runtime={runtime || 100}
              ratings={vote_average}
              />

            <Text style={[style.text, style.normalText]}>
              {overview}
            </Text>

            <HorizontalImageList
              title="Photos"
              images={images || []}
              style={backdropSize}
            />

            <TrailerList 
              videos={videos || []} 
              playVideo={this.playVideo.bind(this)}
            />

            {this.getSpecialComponent()} 

            <CastList
              title="Cast"
              items={casts || []}
              onPress={this.showCastDetails.bind(this)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Details;
