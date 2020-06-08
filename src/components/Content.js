import React from 'react';
import Card from './Card';
import * as api from '../lib/api';

export default class Content extends React.Component {
   
    state = {        
        data: null,
        loading: false,
        error: null
    };

    UNSAFE_componentWillMount(){    
      console.log('willMount');
      if(!this.props.keywords)
        return;

      this.setState({...this.state, loading:true, error:null});
      api.getDataByFilter(this.props.keywords)
      .then(({data}) => this.setState({...this.state, data, loading:false}))
      .catch(error=>this.setState({...this.state, loading:false, error}));
    }

    render() {
      const { loading, error, data } = this.state;      
      let cards = null;
      if(data) {
        cards = data.filter(e => e.releaseYear >= 2010).sort((a,b) => a.title - b.title).slice(0, 21).map((c, i) => {
          return (
            <Card key={i} title={c.title} thumb={c.images['Poster Art'].url} to='#'/>
          )
        });
      }

      return (
        <div className="content">
          { loading && <p>Loading...</p> }
          { error && <p>{error.message}</p> }
          { cards }
          { this.props.children }
        </div>
      );
    }
}