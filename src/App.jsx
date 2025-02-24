import React from 'react';
import axios from 'axios';

import Movie from './Movie';

class App extends React.Component { 
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
        <div>
          { isLoading 
            ? "Loading" 
            : movies.map( movies => (
                <Movie 
                  key={movies.id}
                  id={movies.id} 
                  year={movies.year} 
                  title={movies.title} 
                  summary={movies.summary} 
                  poster={movies.medium_cover_image}  
                />
            ))}
        </div>
    )};
}

export default App
