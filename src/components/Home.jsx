import React, { useState } from "react";
import Round_progress from "./Round_progress";
import Graph from "./Graph";
import { Row, Col } from "reactstrap";


import { chartExample1 } from "../variables/charts";
import Threshold from "./Threshold";

function Home() {
  const [bigChartData, setbigChartData] = useState("data1");
  console.log(chartExample1);
  const setBgChartData = (name) => {
    setbigChartData(name);
  }; // Closing parenthesis added here

  return (
    <div>
      <Row className="flex p-5 justify-center space-x-4  w-full">
        <div className="w-1/4  p-4 border rounded shadow-md">
          <div className="text-9xl font-extrabold text-center mb-2 text-green-500 opacity-75">
            45
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 relative overflow-hidden">
            <div
              className="bg-green-600 h-full rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>

          <div className="py-2 text-3xl font-bold text-black text-center mb-4">
            AQI
          </div>
          <div className="text-white bg-green-500 py-2 px-4 mt-2 text-center rounded-full">
            Good
          </div>
        </div>
        <div className=" w-3/4">
          <Graph></Graph>
        </div>
      </Row>
      <Row className="flex p-4 justify-center w-full">
        <Round_progress
          colour="bg-green-400"
          border="border-green-400"
          value="01"
        />
        <Round_progress
          colour="bg-blue-400"
          border="border-blue-400"
          value="02"
        />
        <Round_progress
          colour="bg-yellow-400"
          border="border-yellow-400"
          value="03"
        />
        <Round_progress
          colour="bg-red-400"
          border="border-red-400"
          value="08"
        />
        <Round_progress
          colour="bg-purple-400"
          border="border-purple-400"
          value="09"
        />
      </Row>
      <div className="">
        <Threshold></Threshold>
      </div>
    </div>
  );
}

export default Home;
