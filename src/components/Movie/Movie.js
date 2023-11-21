import React from 'react'
import styled from 'styled-components'

const Movie = (props) => {
    const { title, date, image } = props
    const url_image = `https://image.tmdb.org/t/p/w300/${image}`
  return (
    <MovieStyle>
      <div className="movie">
    <img 
    className="movies__image"src={url_image}alt=""/>
    <h3 className="movies__tittle">{title}</h3>
    <p className="movies__date">{date}</p>
    </div>
    </MovieStyle>
  )
}

const MovieStyle = styled.div`
.movie {
    margin-bottom: 1rem;
}

.movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

.movie__tittle {
    color:#4361ee;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.movie__date {
    color: #64748b;
}

/* Large Screen */
@media (min-width: 768px) {
  flex-basis: 50%;
}

/* Large Screen */
@media (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
}
`

export default Movie;