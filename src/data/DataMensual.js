import React from 'react';
import {
        LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
      } from 'recharts';

const DataMensual = (props) => {
  const {
    datam,
  } = props;

  const result = datam
  const currey = result['Meta Data']['2. Digital Currency Code'];
  const items = result['Time Series (Digital Currency Monthly)'];

  const values = Object.keys(items).map((dateString) => {
    const item = items[dateString];
    // merge de item objecto y creo un objecto que contiene date que seria : 2018-06-19 11:10:00
    return { ...item, ...{date: dateString} };
  });

   const arryas= values.map((item, index) => {
    const CLP = parseFloat(parseFloat(item['1a. open (CLP)']).toFixed(2));
    const USD = parseFloat(parseFloat(item['1b. open (USD)']).toFixed(2));
    const HCLP = parseFloat(parseFloat(item['2a. high (CLP)']).toFixed(2));
    const HUSD = parseFloat(parseFloat(item['2b. high (USD)']).toFixed(2));
    const LCLP = parseFloat(parseFloat(item['3a. low (CLP)']).toFixed(2));
    const LUSD = parseFloat(parseFloat(item['3b. low (USD)']).toFixed(2));
    const CCLP = parseFloat(parseFloat(item['4a. close (CLP)']).toFixed(2));
    const CUSD = parseFloat(parseFloat(item['4b. close (USD)']).toFixed(2));
    const volumen = parseFloat(parseFloat(item['5. volume']).toFixed(2));
    const market = parseFloat(parseFloat(item['6. market cap (USD)']).toFixed(2));

    return ({
                date:item.date.toString(), CLP, USD, HCLP, HUSD, LCLP, LUSD, CCLP, CUSD, volumen, market,
            });
    });

  return (
    <div>
      <h4 className="Titulo3" >Mensual { currey }</h4>

         <LineChart width={1000} height={360} data={arryas}
         margin={{top: 20, right: 5, left: 5, bottom: 2}} fontSize={10}>
         <XAxis dataKey="date"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend verticalAlign="top" height={40} iconSize={10} />
         <Line name="Open CLP" type="monotone" dataKey="CLP" stroke="#8884d8" dot={false} />
         <Line name="Open USD" type="monotone" dataKey="USD" stroke="#B4045f" dot={false} />
         <Line name="High CLP"    type="monotone" dataKey="HCLP" stroke="#1D21AD" dot={false} />
         <Line name="High USD"type="monotone" dataKey="HUSD" stroke="#AD1D37" dot={false} />
         <Line name="Low CLP" type="monotone" dataKey="LCLP" stroke="#21AD1D" dot={false} />
         <Line name="Low USD" type="monotone" dataKey="LUSD" stroke="#E70834" dot={false} />
         <Line name="Close CLP"    type="monotone" dataKey="CCLP" stroke="#1DAD93" dot={false} />
         <Line name="Close USD"type="monotone" dataKey="CUSD" stroke="#E5A0AD" dot={false} />
         <Line name="Volumen" type="monotone" dataKey="volumen" stroke="#CBD50E" dot={false} />
         <Line name="Market USD" type="monotone" dataKey="market" stroke="#EC860C" dot={false} />
      </LineChart>

    </div>
  )
};

export default DataMensual;
