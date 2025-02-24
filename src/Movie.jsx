import React from 'react';

function Movie({id, year, title,summary, poster}) {
    return (
        <h1>{title}</h1>
    );
}

export default Movie;