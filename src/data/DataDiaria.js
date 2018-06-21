import React from 'react';
import {
        LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
      } from 'recharts';

const DataDiaria = (props) => {
  const {
    data,
  } = props;

  const result = data
  const currey = result['Meta Data']['2. Digital Currency Code'];
  const items = result['Time Series (Digital Currency Intraday)'];

  const values = Object.keys(items).map((dateString) => {
    const item = items[dateString];
    // merge de item objecto y creo un objecto que contiene date que seria : 2018-06-19 11:10:00
    return { ...item, ...{date: dateString} };
  });

   const arryas= values.map((item, index) => {
    const CLP = parseFloat(parseFloat(item['1a. price (CLP)']).toFixed(2));
    const USD = parseFloat(parseFloat(item['1b. price (USD)']).toFixed(2));
    const volumen = parseFloat(parseFloat(item['2. volume']).toFixed(2));
    const market = parseFloat(parseFloat(item['3. market cap (USD)']).toFixed(2));
    return ({
                date:item.date.toString(), CLP, USD, volumen, market,
            });
    });

  return (
    <div>
      <h4 className="Titulo3" >Diarias { currey }</h4>

         <LineChart width={1000} height={360} data={arryas}
         margin={{top: 20, right: 5, left: 5, bottom: 2}} fontSize={10}>
         <XAxis dataKey="date"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend verticalAlign="top" fontSize={5} height={40} iconSize={7} iconSize={14} textSize={10}  />
         <Line name="Precio CLP" type="monotone" dataKey="CLP" stroke="#8884d8" dot={false} />
         <Line name="Precio USD" type="monotone" dataKey="USD" stroke="#B4045f" dot={false} />
         <Line name="Volumen"    type="monotone" dataKey="USD" stroke="#1DAD93" dot={false} />
         <Line name="Mercado USD"type="monotone" dataKey="market" stroke="#868A08" dot={false} />
      </LineChart>

    </div>
  )
};

export default DataDiaria;
