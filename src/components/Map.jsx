import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import '../styles/components/Map.css'

function isEmptyObject(obj) {
    if(typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0){
        return false;
    } else {
        return true;
    }
}

const Map = ({ data }) => {
    if (!isEmptyObject(data)) {
        return (
            <MapContainer center={[data.latitude, data.longitude]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[data.latitude, data.longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        );
    } else {
        return (
            <h3>Hubo un problemita.</h3>
        )
    }

}

export default Map;

