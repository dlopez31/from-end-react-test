// Dependencies
import React, {
  Component
} from 'react';

import DataDiaria from '../../data/DataDiaria';
import DataMensual from '../../data/DataMensual';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      results: [],
      resultsm: [],
    };

    this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this);
    this.fetchProfileStockInfom = this.fetchProfileStockInfom.bind(this);
  }

  componentDidMount() {
    this.fetchProfileStockInfo();
    this.fetchProfileStockInfom();
  }

  fetchProfileStockInfo() {

      fetch('http://localhost:3300/api/hour?currency=ETH')
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('some error');
        })
        .then(response => {
          if( response.hasOwnProperty('error'))
          {
            this.fetchProfileStockInfo();
            this.fetchProfileStockInfom();
          }
          this.setState({
            isLoading: false,
            results: [response],
          });
        })
        .catch(err => {
          this.setState({
            isLoading:false,
            error: err.message,
          })
        });

  }

  fetchProfileStockInfom() {

      fetch('http://localhost:3300/api/monthly?currency=ETH')
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('some error');
        })
        .then(response => {
          if( response.hasOwnProperty('error'))
          {
            this.fetchProfileStockInfo();
            this.fetchProfileStockInfom();
          }
          this.setState({
            isLoading: false,
            resultsm: [response],
          });
        })
        .catch(err => {
          this.setState({
            isLoading:false,
            error: err.message,
          })
        });

  }

  render() {
    const {
      error,
      isLoading,
      results,
      resultsm
    } = this.state;

    if (isLoading) {
      return (
        <div className = "About">
          <p> Loading... </p>
        </div>
      );
    }

    if (error) {
      return (
        <div className = "About" style = {{ backgroundColor: '#610B21' }} >
            <p style = {{ color: '#fff' }} >
              { error }
            </p>
         </div>
      );
    }

    return (
      <div className = "About" >
        <div className = "Diario">
            { results.map((result, index) => <DataDiaria key={ index } data = { result } />)}
        </div>
        <div className = "Mes" >
            { resultsm.map((result, index) => <DataMensual key={ index } datam = { result } />)}
        </div>
      </div>
      );
    }
  }

  export default About;
