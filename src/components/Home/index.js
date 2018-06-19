// Dependencies
import React, { Component } from 'react';


class Home extends Component {
  render(){
    return (
      <div className="Home">
        <h1>DESAFIO</h1>
        <p>La idea es hacer un dashboard que permita mostrar la fluctuación de BTC y ETH (por separado) por Hora y Mensualmente.</p>
        <p>Hora y Mes deberán ser vistas separadas, las consultas deberán mostrar el siguiente conjunto de datos:</p>
        <ul>
         <li>Hora: Mostrar las últimas 24 horas</li>
         <li>Mes: Mostrar los últimos 12 meses</li>
        </ul>
      </div>
    );
  }
};

export default Home;
