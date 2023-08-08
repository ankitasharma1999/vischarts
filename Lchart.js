import React from "react";
import { LineChart } from 'nr1'

export default class ExampleLinechart extends React.Component{
    render(){
        const linechart1 = {
            metadata :{
                id: 'line-chart-1',
                name: 'Version A',
                viz: 'main',
                color: 'red'
            },
            data :[
                {x: 0 , y:0},
                {x: 10, y:20},
                {x: 30, y:40}
            ]
        }
        // return <LineChart data={[linechart1]} fullWidth />;
        return <LineChart
        accountId={4043843}
        query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDA0Mzg0M3xJTkZSQXxOQXw2NDE3MDA3ODg0NjMyMDM4NzM3' TIMESERIES auto" 
        fullWidth
      />;
    }
}