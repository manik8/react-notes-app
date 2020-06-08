import React, { Fragment } from 'react';
import Title from '../components/Title';
import Content from '../components/Content';
import Card from '../components/Card';
import Series from '../assets/series.png';
import Movies from '../assets/movies.png';

export default function HomePage() {
  return (
    <Fragment>
      <Title/>
      <Content>
        <Card title='Popular Series' thumb={Series} to='/series'/>
        <Card title='Poppular Movies' thumb={Movies} to='/movies'/>
      </Content>
    </Fragment>
  );
}

