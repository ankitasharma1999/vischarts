import React from "react";
import { AreaChart } from 'nr1'

export default class ExampleAreachart extends React.Component{
    render(){
        const areachart1 = [
            {
                metadata: {
                  id: 'series-1',
                  name: 'Serie 1',
                  color: '#a35ebf',
                  viz: 'main',
                  units_data: {
                    y: 'BYTES',
                  },
                },
                data: [{ y: 128 }],
              }
        ]
        // return <PieChart data={[piechart1]} fullWidth />;
        return <AreaChart
        accountId={4043843}
        query="SELECT average(host.disk.usedPercent) as 'Storage used %' FROM Metric WHERE `entityGuid` = 'NDA0Mzg0M3xJTkZSQXxOQXw2NDE3MDA3ODg0NjMyMDM4NzM3' TIMESERIES auto"
        fullWidth
      />;
    }
}