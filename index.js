import React from 'react';
import ExampleAreachart from './Achart'
import ExamplePiechart from './Pchart'
import ExampleLinechart from './Lchart'

export default class MyChartsNerdlet extends React.Component {
  render() {
    return  (  
      <div>
        <h2>Line Chart</h2>
        <ExampleLinechart />
        <h2>Pie chart</h2>
        <ExamplePiechart />
        <h2>Area Chart</h2>
        <ExampleAreachart />
        
      </div>
    )
  }
}