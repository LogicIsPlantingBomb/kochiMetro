import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { trains } from '../data/trains';
import TrainDetails from './TrainDetails';

export const TrainMap = () => {
  const stations = {
    blue: [
      { name: 'Aluva', coords: [10.1097, 76.3497] },
      { name: 'Pulinchodu', coords: [10.095, 76.3467] },
      { name: 'Companypady', coords: [10.0872, 76.3428] },
      { name: 'Ambattukavu', coords: [10.0794, 76.3389] },
      { name: 'Muttom', coords: [10.0728, 76.3336] },
      { name: 'Kalamassery', coords: [10.0583, 76.3219] },
      { name: 'Cochin University', coords: [10.0469, 76.3183] },
      { name: 'Pathadipalam', coords: [10.0358, 76.3144] },
      { name: 'Edapally', coords: [10.0275, 76.3119] },
      { name: 'Changampuzha Park', coords: [10.0186, 76.3092] },
      { name: 'Palarivattom', coords: [10.0097, 76.3064] },
      { name: 'J. L. N. Stadium', coords: [10.0019, 76.2994] },
      { name: 'Kaloor', coords: [9.9931, 76.2925] },
      { name: 'Town Hall', coords: [9.9856, 76.2858] },
    ],
    red: [
      { name: 'M. G. Road', coords: [9.9781, 76.2831] },
      { name: 'Maharaja\'s College', coords: [9.9689, 76.2847] },
      { name: 'Ernakulam South', coords: [9.9686, 76.2897] },
      { name: 'Kadavanthra', coords: [9.9628, 76.3025] },
      { name: 'Elamkulam', coords: [9.9594, 76.3119] },
      { name: 'Vyttila', coords: [9.955, 76.3217] },
      { name: 'Thaikoodam', coords: [9.9486, 76.3281] },
      { name: 'Petta', coords: [9.9422, 76.3344] },
      { name: 'Vadakkekotta', coords: [9.9358, 76.3408] },
      { name: 'SN Junction', coords: [9.9294, 76.3472] },
      { name: 'Thrippunithura Terminal', coords: [9.9231, 76.3536] },
    ]
  };

  const bluePolyline = stations.blue.map(station => station.coords);
  const redPolyline = stations.red.map(station => station.coords);

  const allStations = [...stations.blue, ...stations.red];

  const getTrainLocation = (train) => {
    const station = allStations.find(s => s.name === train.currentStation);
    return station ? station.coords : null;
  };

  return (
    <div>
      <div className="bg-white shadow rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Metro Map</h2>
          <MapContainer center={[10.015, 76.3]} zoom={12} style={{ height: '500px', width: '100%' }}>
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {allStations.map((station, index) => (
              <Marker key={index} position={station.coords}>
                <Popup>
                  <div>
                    <h3 className="font-bold">{station.name}</h3>
                    <p>Line: {stations.blue.includes(station) ? 'Blue' : 'Red'}</p>
                  </div>
                </Popup>
              </Marker>
          ))}
          <Polyline positions={bluePolyline} color="blue" />
          <Polyline positions={redPolyline} color="red" />
          {trains.map(train => {
            const location = getTrainLocation(train);
            if (!location) return null;

            return (
              <Marker key={train.id} position={location}>
                <Popup>
                  <div>
                    <h3 className="font-bold">{train.name}</h3>
                    <p>Status: {train.status}</p>
                    <p>Next Station: {train.nextStation}</p>
                    <p>ETA: {train.eta}</p>
                    <p>Load: {train.currentLoad} / {train.capacity}</p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
          </MapContainer>
      </div>
      <TrainDetails />
    </div>
  );
};