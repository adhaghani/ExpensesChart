import React, { Component } from 'react';
import jsonData from './data.json';
class DataDisplay extends Component {

    getmax = () => {
        let max = 0;
        jsonData.forEach((item) => {
            if(item.amount > max) {
                max = item.amount;
            }
        })
        return max
    }
    
    
    render() {
        const max = this.getmax();

        return (
            <div className="spending-chart__bars">
                {jsonData.map((item, index) => (
                    <div
                    key={index}
                    className='chart_bars'
                    >   
                        <div className="Amount"> <p>{item.amount}</p> </div>
                        <div className={'bar' + (item.amount === max ? ' tallest' : '')} style={{ height : `${(item.amount / max) * 200}px` }}></div>
                        <div className="date_of_chart">
                            <p>{item.day}</p>
                        </div>
                    </div>
                ))
                }
          </div>
        );
    }
}

export default DataDisplay;