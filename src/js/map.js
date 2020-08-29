import { coords } from './ln/resources.js';
  
export default function updateMap(lon, lat, language) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXdhbm93aWN6IiwiYSI6ImNrYjU3bTdzajBpdGEycXBkaDA1dTVwOWcifQ.VDOIpprjmTNEThiIdf4u-Q';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lon, lat],
        zoom: 8,
    });

    document.getElementById('latitude').innerHTML = `${coords[language].latitude}: ${lat}`;
    document.getElementById('longitude').innerHTML = `${coords[language].longitude}: ${lon}`;
}
