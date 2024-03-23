import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const GraphComponent = ({ selectedGraph }) => {
  const renderGraph = (graphName) => {
    let data;
    let lineColor;
    let filterId = 'dropShadow';

    switch (graphName) {
      case 'PM2.5':
        data = [
          { month: 'Jan', value: 30 },
          { month: 'Feb', value: 40 },
          { month: 'Mar', value: 50 },
          { month: 'Apr', value: 60 },
          { month: 'May', value: 70 },
          { month: 'Jun', value: 80 },
          { month: 'Jul', value: 90 },
          { month: 'Aug', value: 80 },
          { month: 'Sep', value: 70 },
          { month: 'Oct', value: 60 },
          { month: 'Nov', value: 50 },
          { month: 'Dec', value: 40 }
        ];
        lineColor = '#8884d8';
        break;
      case 'PM10':
        data = [
          { month: 'Jan', value: 20 },
          { month: 'Feb', value: 30 },
          { month: 'Mar', value: 40 },
          { month: 'Apr', value: 50 },
          { month: 'May', value: 60 },
          { month: 'Jun', value: 70 },
          { month: 'Jul', value: 80 },
          { month: 'Aug', value: 70 },
          { month: 'Sep', value: 60 },
          { month: 'Oct', value: 50 },
          { month: 'Nov', value: 40 },
          { month: 'Dec', value: 30 }
        ];
        lineColor = '#ff00ff';
        break;
      case 'SO2':
        data = [
          { month: 'Jan', value: 40 },
          { month: 'Feb', value: 50 },
          { month: 'Mar', value: 60 },
          { month: 'Apr', value: 70 },
          { month: 'May', value: 80 },
          { month: 'Jun', value: 90 },
          { month: 'Jul', value: 80 },
          { month: 'Aug', value: 70 },
          { month: 'Sep', value: 60 },
          { month: 'Oct', value: 50 },
          { month: 'Nov', value: 40 },
          { month: 'Dec', value: 30 }
        ];
        lineColor = '#00ff00';
        break;
      case 'CO':
        data = [
          { month: 'Jan', value: 50 },
          { month: 'Feb', value: 60 },
          { month: 'Mar', value: 70 },
          { month: 'Apr', value: 80 },
          { month: 'May', value: 90 },
          { month: 'Jun', value: 80 },
          { month: 'Jul', value: 70 },
          { month: 'Aug', value: 60 },
          { month: 'Sep', value: 50 },
          { month: 'Oct', value: 40 },
          { month: 'Nov', value: 30 },
          { month: 'Dec', value: 20 }
        ];
        lineColor = '#0000ff';
        break;
      case 'NO2':
        data = [
          { month: 'Jan', value: 60 },
          { month: 'Feb', value: 70 },
          { month: 'Mar', value: 80 },
          { month: 'Apr', value: 90 },
          { month: 'May', value: 80 },
          { month: 'Jun', value: 70 },
          { month: 'Jul', value: 60 },
          { month: 'Aug', value: 50 },
          { month: 'Sep', value: 40 },
          { month: 'Oct', value: 30 },
          { month: 'Nov', value: 20 },
          { month: 'Dec', value: 10 }
        ];
        lineColor = '#ff0000';
        break;
      default:
        return <div>No graph selected</div>;
    }

    return (
      <div className="flex justify-center">
        <ResponsiveContainer width="90%" height={300}>
           <LineChart data={data}>
              <defs>
                <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="2" floodColor="#00000033" />
                </filter>
              </defs>
              <CartesianGrid opacity={.6} strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#718096" />
              <YAxis type="number" domain={[10, 100]} stroke="#718096" />
              <Tooltip cursor={{ stroke: '#718096', strokeWidth: 1 }} />
              <Legend />
              <Line type="monotone" dataKey="value" stroke={lineColor} strokeWidth={2} dot={{ fill: '#4299e1' }} filter={`url(#${filterId})`} />
            </LineChart>
          </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="graph-content">
      {renderGraph(selectedGraph)}
    </div>
  );
};

export default GraphComponent;
