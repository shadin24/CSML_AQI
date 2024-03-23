import React from "react";

function Threshold() {
  return (
    <div className="flex flex-col p-4 border rounded shadow-md m-5 justify-center items-center">
      <div className="m-3 text-center">
        <h3>
          <b>Air Quality Index Scale</b>
        </h3>
        <p className="text-gray-500">
          Know about the category of air quality index (AQI) your ambient air falls in and what it implies.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex  p-2 border rounded shadow-md justify-center items-center">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_4.webp"
            alt="Good air quality"
            className="w-20 h-20"
          />
          <div className="text-green-500 font-bold m-3 whitespace-nowrap">Good (0-50)</div>
          <p className="text-gray-500">
            The air is fresh and free from toxins. People are not exposed to any health risk.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_3.webp"
            alt="Moderate air quality"
            className="w-20 h-20"
          />
          <div className="text-yellow-500 font-bold m-3 whitespace-nowrap">Moderate (51-100)</div>
          <p className="text-gray-500">
            Acceptable air quality for healthy adults but might cause mild threat to sensitive individuals.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_2.webp"
            alt="Poor air quality"
            className="w-20 h-20"
          />
          <div className="text-orange-500 font-bold m-3 whitespace-nowrap">Poor (101-200)</div>
          <p className="text-gray-500">
            Inhaling such air can cause slight discomfort and difficulty in breathing. Unhealthy for children, pregnant women, and the elderly.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_5.webp"
            alt="Unhealthy air quality"
            className="w-20 h-20"
          />
          <div className="text-red-500 font-bold m-3 whitespace-nowrap">Unhealthy (201-300)</div>
          <p className="text-gray-500">
            Exposure to air can cause chronic morbidities or even organ impairment. Prolonged exposure can lead to premature death.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_1.webp"
            alt="Severe air quality"
            className="w-20 h-20"
          />
          <div className="text-purple-500 font-bold m-3 whitespace-nowrap">Severe (301-400)</div>
          <p className="text-gray-500">
            Exposure to air can cause respiratory illness. Your life is in danger. Prolonged exposure can lead to premature death.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_6.webp"
            alt="Hazardous air quality"
            className="w-20 h-20"
          />
          <div className="text-green-500 font-bold m-3 whitespace-nowrap">Hazardous (401-500)</div>
          <p className="text-gray-500">
            Hazardous air quality. Everyone is at risk.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Threshold;
