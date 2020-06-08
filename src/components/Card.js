import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({title, thumb, to}){
  return (
      <div className="card">
          <Link to={to}>
            <img src={thumb} alt={title} className="card-img" />
          </Link>
        <p>{title}</p>
      </div>
  )
}