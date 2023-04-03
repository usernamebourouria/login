import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
const Map = () => {
  const [deviceId, setDeviceID] = useState(1);
  const [position, setPosition] = useState([36.8, 3.1])
  const [temp, setTemp] = useState([0])
  const [profondeur, setProfondeur] = useState([0])
  //const position = [36.8, 3.1];
  
  useEffect(() => {
    const donnees = async () => {
      const response = await fetch("http://localhost:8000/api/fetchAll/");
      const json = await response.json();
      const { data } = json;
      const donnees = data[data.length - 1]
      const { temperature, device_id, latitude, longitude, altitude } = donnees
      setTemp(temperature)
      setDeviceID(device_id)
      setPosition([latitude, longitude])
      setProfondeur(altitude)
    };
    donnees();
  }, []);
  //<button onClick={() => setindice(Math.random())}>refresh</button>
  return (
    <>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false} className='mapcontainer'>
        <TileLayer
          //attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
        >
          <Popup>
            Device ID: {deviceId}
            <br />
            Tempertaure : {temp} C
            <br />
            Profondeur : {profondeur} m
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
let DefaultIcon = L.icon({
  iconUrl: "./iconss.png",
  //iconSize: [20, 41],
  iconSize: [25, 55],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Map;
