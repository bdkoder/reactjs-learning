import { Component } from 'react'
import MovieCard from './MovieCard';
import Axios from 'axios';
import queryString from 'query-string';


class MovieList extends Component {
  state = { movies: [] }

  componentDidMount() {
    this.fetchMovies();
    // const searchText = queryString.parse(location.search);
    // console.log(searchText);
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.location);
    // console.log('prevProps.locatio', prevProps.location.search);
    console.log('prevProps.location', prevProps.location);
    console.log('this.props.location', this.props.location);
    if (this.props.location !== prevProps.location) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    let q = queryString.parse(location.search);
    // let q = queryString.parse(this.props.location.search);
    Axios.get(`http://www.omdbapi.com/?s=${q.searchText}&apikey=4a3b711b`)
      .then(resp => resp.data)
      .then(data => data.Search)
      .then(movies => this.setState({ movies }))
  }

  render() {
    const movieList = this.state.movies.map(m => <MovieCard movie={m} key={m.imdbID} />)
    return (
      <div className="row">
        {movieList}
      </div>
    );
  }
}

export default MovieList;
