import React from 'react';
import {
        LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
      } from 'recharts';



const DataDiaria = (props) => {
  //console.log('props.data', props.data);
  const {
    data,
  } = props;


  // const information = data['Meta Data']['1. Information'];
   const digitalCurrencyCode = data['Meta Data']['2. Digital Currency Code'];
  // const digitalCurrencyName = data['Meta Data']['3. Digital Currency Name'];
  // const marketCode = data['Meta Data']['4. Market Code'];
  // const marketName = data['Meta Data']['5. Market Name'];
  // const interval = data['Meta Data']['6. Interval'];
  // const lastRefreshed = data['Meta Data']['7. Last Refreshed'];
  // const timeZone = data['Meta Data']['8. Time Zone'];


  const rows = [];
  const timeSeries = data['Time Series (Digital Currency Intraday)'];

   // console.log('timeSeries', timeSeries);
  // key is date
  for(let key in timeSeries) {

    if(timeSeries[key]) {
      const finData = timeSeries[key];
      const aPriceClp = parseFloat(finData['1a. price (CLP)']).toFixed(2);
      const bPriceUsd = parseFloat(finData['1b. price (USD)']).toFixed(2);
      const volumen = parseFloat(finData['2. volume']).toFixed(2);
      const marketCapUsd = parseFloat(finData['3. market cap (USD)']).toFixed(2);

      rows.push({
        date: key, aPriceClp, bPriceUsd, volumen, marketCapUsd,
            });
    }
  }

 //console.log('rows', rows);

  return (
    <div>
      <h4 className="Titulo3" >Diarias { digitalCurrencyCode }</h4>

      <LineChart width={650} height={300} data={rows}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="date"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="aPriceClp" stroke="#8884d8" dot={false} />
         <Line type="monotone" dataKey="bPriceUsd" stroke="#B4045f" dot={false} />
         <Line type="monotone" dataKey="volumen" stroke="#82ca9d" dot={false} />
         <Line type="monotone" dataKey="marketCapUsd" stroke="#868A08" dot={false} />

      </LineChart>

    </div>
  )
};

export default DataDiaria;
