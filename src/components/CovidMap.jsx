import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON } from 'react-leaflet';
import './CovidMap.css'
const CovidMap = ({countries}) => {
  
    const mapStyle= {
        fillColor:"white",
        weight: 1,
        color: "black",
        fillOpacity: 1,

    }
    const onEachCountry = (country, layer)=>{
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const confirmedText = country.properties.confirmedText;
        layer.bindPopup(`${name} ${confirmedText}`)
    }
    
    return ( 
        <MapContainer style={{height: "90vh"}} zoom={1.5} center={[5,30]}>
            <GeoJSON style={mapStyle} data={countries}
            onEachFeature={onEachCountry}/>
        </MapContainer>

     );
}
 
export default CovidMap;