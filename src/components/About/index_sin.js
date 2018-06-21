// Dependencies
import React, { Component } from 'react';

//import DataDiaria from '../../data/DataDiaria';
// esta es BTC
class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      results: [],
      resultsMes: [],
    };

    this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this);
    this.fetchProfileStockInfoMensual = this.fetchProfileStockInfoMensual.bind(this);

  }

  componentDidMount(){
    this.fetchProfileStockInfo();
    this.fetchProfileStockInfoMensual()
  }

  fetchProfileStockInfo() {

      fetch('http://localhost:3300/api/daily?currency=ETH')
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('some error');
        })
        .then(response => {
          const { results } = response;
          const data = results[0];
          const meta = data['Meta Data'];
          const items = data['Time Series (Digital Currency Intraday)'];
          // Aqui itero sobre el objecto con Object.keys
          const values = Object.keys(items).map((dateString) => {
            const item = items[dateString];
            // merge de item objecto y creo un objecto que contiene date que seria : 2018-06-19 11:10:00
            return { ...item, ...{date: dateString} };
          });

          this.setState({
            isLoading: false,
            results: values,
            meta
          });
        })
        .catch(err => {
          this.setState({
            isLoading:false,
            error: err.message,
          })
        });

  }

  //inicio Mensual
  fetchProfileStockInfoMensual() {
      fetch('http://localhost:3300/api/monthly?currency=ETH')
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('some error');
        })
        .then(response => {
          const { results } = response;
          const data = results[0];
          const meta = data['Meta Data'];
          const items = data['Time Series (Digital Currency Monthly)'];
          // Aqui itero sobre el objecto con Object.keys
          const values = Object.keys(items).map((dateString) => {
            const item = items[dateString];
            // merge de item objecto y creo un objecto que contiene date que seria : 2018-06-19 11:10:00
            return { ...item, ...{date: dateString} };
          });

          this.setState({
            isLoading: false,
            resultsMes: values,
            meta
          });
        })
        .catch(err => {
          this.setState({
            isLoading:false,
            error: err.message,
          })
        });

  }//fin mensual

  render(){
    const {
      error,
      isLoading,
      results,
      resultsMes
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
          <h4>Diario ETH </h4>
          <ul>
            {
              results.map((item, index) => {
                const priceCLP = parseFloat(item['1a. price (CLP)']).toFixed(2);
                const priceUSD = parseFloat(item['1b. price (USD)']).toFixed(2);
                const marketPrice = parseFloat(item['3. market cap (USD)']).toFixed(2);
                return (
                  <li key={index} style={{marginTop: 10}}>
                    Fecha => {item.date}
                    <ul>
                      <li>
                        <span>{'Precio CLP'} </span> {priceCLP}
                      </li>
                      <li>
                        <span>{'Precio USD'} </span> {priceUSD}
                      </li>
                      <li>
                        <span>{'Precio Mercado (USD)'} </span> {marketPrice}
                      </li>
                    </ul>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="Mes">
        <h4>Mensual ETH </h4>
        <ul>
          {
            resultsMes.map((item, index) => {
              const priceCLP = parseFloat(item['1a. open (CLP)']).toFixed(2);
              const priceUSD = parseFloat(item['1b. open (USD)']).toFixed(2);
              const highCLP = parseFloat(item['2a. high (CLP)']).toFixed(2);
              const highUSD = parseFloat(item['2b. high (USD)']).toFixed(2);
              const lowCLP = parseFloat(item['3a. low (CLP)']).toFixed(2);
              const lowUSD = parseFloat(item['3b. low (USD)']).toFixed(2);

              return (
                <li key={index} style={{marginTop: 10}}>
                  Fecha => {item.date}
                  <ul>
                    <li>
                      <span>{'Open (CLP)'} </span> {priceCLP}
                    </li>
                    <li>
                      <span>{'Open (USD)'} </span> {priceUSD}
                    </li>
                    <li>
                      <span>{'High (CLP)'} </span> {highCLP}
                    </li>
                    <li>
                      <span>{'High (USD)'} </span> {highUSD}
                    </li>
                    <li>
                      <span>{'Low (CLP)'} </span> {lowCLP}
                    </li>
                    <li>
                      <span>{'Low (USD)'} </span> {lowUSD}
                    </li>
                  </ul>
                </li>
              );
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}


export default About;
