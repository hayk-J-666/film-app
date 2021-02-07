import { connect } from 'react-redux';
import React from 'react';
import './about-film.css';
import { useParams } from 'react-router-dom';

function AboutFilm({film: {films}}) {
  const {id} = useParams()
  const {title, imageUrl, year, description} = films.find(film => film.id === parseInt(id))

  return (
    <div className='about-film'>
      <img src={imageUrl} alt='' />
      <div className='about-film-content'>
        <h2 className='film-title'>{title}</h2>
        <p className='film-year'>{year}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps)(AboutFilm);

