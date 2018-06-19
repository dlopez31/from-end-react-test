// Dependencies
import React, { Component } from 'react';

import DataDiaria from '../../data/DataDiaria';

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      results: [],

    };

    this.fetchProfileStockInfo1 = this.fetchProfileStockInfo1.bind(this);
  }

  componentDidMount(){
    console.log("paso por aca:About ");
    this.fetchProfileStockInfo1();
  }

  // componentWillUnmount() {
  //   console.log("unmount");
  // }

  fetchProfileStockInfo1() {

      fetch('http://localhost:3300/api/daily?currency=ETH', { method: 'GET' })
        .then(res => res.json())
        .then(json => {
           console.log('ETH', json)
            if(json.success){
            this.setState({
              isLoading: false,
              results: json.results
            });
          }else {
            this.setState({
              isLoading:false,
              error: json.message,
            })
          }
        });

  }

  render(){
    const {
      error,
      isLoading,
      results
    } = this.state;

    if (isLoading) {
      return (
        <div className="About" >
          <p>Loading...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="About" style={{ backgroundColor: '#610B21' }}>
          <p style={{ color: '#fff' }}>{error}</p>
        </div>
      );
    }

    return(
      <div className="About">
        <div className="Diario">
          {
            results.map(result => <DataDiaria data={ result } />)
          }
        </div>
        <div className="Mes">Grafica mensual</div>
      </div>
    );
  }
}

export default About;
