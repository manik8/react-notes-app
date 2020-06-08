import React, { Fragment } from 'react';
import Title from '../components/Title';
import Content from '../components/Content';

export default function MoviesPage() {
  return (
    <Fragment>
      <Title/>
      <Content keywords='movie'/>    
    </Fragment>
  );
}

