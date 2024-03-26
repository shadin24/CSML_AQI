import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

export default function Readings() {
  const metroStations = [
    { title: "Aluva", aqi: 50, pm25: 10, pm10: 20, no2: 5, so2: 3 },
    { title: "Ambattukavu", aqi: 100, pm25: 20, pm10: 30, no2: 8, so2: 4 },
    { title: "Muttom", aqi: 75, pm25: 15, pm10: 25, no2: 6, so2: 3 },
    { title: "Kalamassery", aqi: 40, pm25: 12, pm10: 22, no2: 4, so2: 2 },
    { title: "Pulinchodu", aqi: 90, pm25: 18, pm10: 28, no2: 7, so2: 4 },
    { title: "Companypady", aqi: 95, pm25: 17, pm10: 27, no2: 7, so2: 4 },
    { title: "Pathadippalam", aqi: 35, pm25: 11, pm10: 21, no2: 4, so2: 3 },
    { title: "Edappally", aqi: 45, pm25: 10, pm10: 20, no2: 5, so2: 3 },
    { title: "Changampuzha Park", aqi: 80, pm25: 19, pm10: 29, no2: 7, so2: 4 },
    { title: "Palarivattom", aqi: 70, pm25: 16, pm10: 26, no2: 7, so2: 4 },
    // Add more metro station data as needed
  ];

  const getColorClass = (value) => {
    if (value <= 10) {
      return 'text-green-500';
    } else if (value <= 40) {
      return 'text-yellow-500';
    } else if (value <= 100) {
      return 'text-orange-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div className="p-5 overflow-x-auto">
      <Card className="rounded-lg shadow-lg border">
        <CardBody>
          <div className="overflow-x-auto">
            <Table className="text-sm">
              <TableHead>
                <TableHeadCell>LOCATION</TableHeadCell>
                <TableHeadCell>AQI</TableHeadCell>
                <TableHeadCell>PM 2.5</TableHeadCell>
                <TableHeadCell>PM 10</TableHeadCell>
                <TableHeadCell>NO2</TableHeadCell>
                <TableHeadCell>SO2</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {metroStations.map((station, index) => (
                  <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800 py-2">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {station.title}
                    </TableCell>
                    <TableCell className={`${getColorClass(station.aqi)} font-normal`}>
                      {station.aqi}
                    </TableCell>
                    <TableCell className={`${getColorClass(station.pm25)} font-normal`}>
                      {station.pm25}
                    </TableCell>
                    <TableCell className={`${getColorClass(station.pm10)} font-normal`}>
                      {station.pm10}
                    </TableCell>
                    <TableCell className={`${getColorClass(station.no2)} font-normal`}>
                      {station.no2}
                    </TableCell>
                    <TableCell className={`${getColorClass(station.so2)} font-normal`}>
                      {station.so2}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
