let map = L.map('liermap').setView([51.131270, 4.570050], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// circle op de kaart
let circleCenter = [51.131270, 4.570050]; 
L.circle(circleCenter, {
    color: "#e60005",
    fillColor: "#e60005",
    fillOpacity: 0.5,
    radius: 100 // meters radius
}).addTo(map);