import React from 'react';
import { Link } from 'react-router-dom';

import './Movie.css';

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link 
            to={`/movie-detail/${id}`}
            state={{ year, title, summary, poster, genres}}
        >
            <div className='movie'>
            <img src={poster} alt={title} title={title} />

            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className='movie_genres'>
                    {genres.slice(0,3).map((genre, index) => ( //index: map index(default)
                        <li key={index} className='genre'>{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,100)}...</p>
            </div>
        </div>
        </Link>
    );
}

export default Movie;