import './App.css'

import React from 'react';
import DataDisplay from './DataDisplay';

import jsonData from './data.json';
function App() {

  const getTotal = () => {
    let total = 0;
    jsonData.forEach((item) => {
        total += item.amount;
    })
    return total
}

  const total = getTotal();
  return (
    <>
    <div className="container">
      <div className="Balance">
        <h3>Balance</h3>
        <h1>$<span>1000.55</span></h1>
      </div>
      <div className="spending-chart">
        <div className="spending-title">
          <h1>Spending - <span>Last 7 Days</span></h1>
        </div>
        <DataDisplay />
        <div className="spending__line"></div>
        <div className="spending__total-spend-per__month">
          <div className="total_per_month">
            <p>Total This Week</p>
            <h4 className='Number'>$<span>{total}</span></h4>
          </div>
          <div className="difference-from_last_month">
            <h4 className='Number Percentage'><span className='Difference'>+</span><span className='amount'>2.4</span>%</h4>
            <p>from last week</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
