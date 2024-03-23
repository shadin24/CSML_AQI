import React, { useState } from 'react';
import GraphComponent from './GraphComponent'; // Assuming GraphComponent is defined elsewhere

const CardWithGraph = () => {
  const [selectedGraph, setSelectedGraph] = useState('PM2.5'); // Initial selected graph

  const handleGraphChange = (graphName) => {
    setSelectedGraph(graphName);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="flex justify-end space-x-1">
        <button 
          className={`w-20 border ${selectedGraph === 'PM2.5' ? 'bg-indigo-100 text-indigo-500' : 'bg-white hover:bg-indigo-200 text-gray-700'} px-4 py-2 rounded focus:outline-none focus:border-blue-500`}
          onClick={() => handleGraphChange('PM2.5')}
        >
          PM2.5
        </button>
        <button 
          className={`w-20 border ${selectedGraph === 'PM10' ? 'bg-indigo-100 text-indigo-500' : 'bg-white hover:bg-indigo-200 text-gray-700'} px-4 py-2 rounded focus:outline-none focus:border-blue-500`}
          onClick={() => handleGraphChange('PM10')}
        >
          PM10
        </button>
        <button 
          className={`w-20 border ${selectedGraph === 'SO2' ? 'bg-indigo-100 text-indigo-500' : 'bg-white hover:bg-indigo-200 text-gray-700'} px-4 py-2 rounded focus:outline-none focus:border-blue-500`}
          onClick={() => handleGraphChange('SO2')}
        >
          SO2
        </button>
        <button 
          className={`w-20 border ${selectedGraph === 'CO' ? 'bg-indigo-100 text-indigo-500' : 'bg-white hover:bg-indigo-200 text-gray-700'} px-4 py-2 rounded focus:outline-none focus:border-blue-500`}
          onClick={() => handleGraphChange('CO')}
        >
          CO
        </button>
        <button 
          className={`w-20 border ${selectedGraph === 'NO2' ? 'bg-indigo-100 text-indigo-500' : 'bg-white hover:bg-indigo-200 text-gray-700'} px-4 py-2 rounded focus:outline-none focus:border-blue-500`}
          onClick={() => handleGraphChange('NO2')}
        >
          NO2
        </button>
      </div>
      <div className="mt-4">
        <GraphComponent selectedGraph={selectedGraph} />
      </div>
    </div>
  );
};

export default CardWithGraph;
