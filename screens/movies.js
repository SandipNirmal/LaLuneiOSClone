import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  ScrollView,
  View,
} from 'react-native';
import MovieDetails from './movieDetails';
import AllMovies from './allMovies';
import MovieList from '../components/MovieList';

// TODO: Implement Configuration and LatestMovies
import { Configuration } from '../data/configuration';
import { LatestMovies } from '../data/latest_movies';


class Movies extends Component {
  static navigationOptions = {
    title: 'Movies',
  };

  showMovieDetails(name) {
    this.props.navigation.navigate('MovieDetails', {name: name});
  }

  showAllMovies(category) {
    this.props.navigation.navigate('AllMovies', {category: category});
  }

  getMoviesList() {
    const baseUrl = Configuration['images']['secure_base_url'];
    const posterSize = Configuration['images']['poster_sizes'][0];
    const logoSize = Configuration['images']['logo_sizes'][0];
    let movies = [];
    LatestMovies.results.forEach(function(movie) {
      let item = {};
      item['name'] = movie['original_title']
      item['uri'] = baseUrl + '/' + posterSize + '/' + movie['poster_path'];
      movies.push(item);
    });
    return movies;
  }

  render() {
    const { navigate } = this.props.navigation;
    const movies = this.getMoviesList();
    // TODO: should get movies list as props?
    const categories = [
      {
        "title": "Now Showing",
        "movies": movies,
      },
      {
        "title": "Coming Soon",
        "movies": movies,
      },
      {
        "title": "Popular",
        "movies": movies,
      },
    ];

    return (
      <ScrollView>
        {categories.map((category, index) => (
          <MovieList 
            key={index}
            title={category.title}
            onShowAll={this.showAllMovies.bind(this)}
            onPress={this.showMovieDetails.bind(this)}
                     movies={category.movies}
          />
        ))}
      </ScrollView>
    );
  }
}

const MoviesStack = StackNavigator({
  Movies: {
    screen: Movies,
  },
  MovieDetails: {
    screen: MovieDetails,
  },
  AllMovies: {
    screen: AllMovies,
  },
})

export default MoviesStack;
