import React from 'react';
import axios from 'axios';

import Movie from '../components/Movie';

import '../routes/Home.css';

class Home extends React.Component { 
    state = {
        isLoading: true,
        movies: [],
    };

    //async handler
    // arrow function 이용 시 this를 bind 해주지 않아도 됨.
    getMovies = async () => {
      //Destructuring Assignment from ES6
      const {
        data: {
          data: {movies}
        }
      } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
      this.setState({ movies, isLoading: false });
    };

    //First callback method after mount
    componentDidMount() {
      this.getMovies();
    }

    render() {
      const {isLoading, movies} = this.state;
      return (
        <section className="container">
          { isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {
                movies.map( movies => (
                  <Movie 
                    key={movies.id}
                    id={movies.id} 
                    year={movies.year} 
                    title={movies.title} 
                    summary = { movies.summary ? movies.summary : "No Summary..." } 
                    poster={movies.medium_cover_image}
                    genres = {movies.genres} 
                  />
                ))}
            </div>
          )}
        </section>
    )};
}

export default Home