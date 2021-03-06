import React from 'react';
import './film-Item.css';
import { Link } from 'react-router-dom';

function FilmItem({ id, imageUrl, title, year, description, published }) {
  return (
    <Link to={`/films/${id}`}>
      <div className='filmItem'>
        <img src={imageUrl} alt='' />
        <h2 className='filmItem-title'>{title}</h2>
        <p className='filmItem-year'>{year}</p>
      </div>
    </Link>
  );
}

export default FilmItem;
