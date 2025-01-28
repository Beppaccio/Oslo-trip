// script.js
// Initialize the map
const map = L.map('map').setView([59.9139, 10.7522], 13); // Oslo coordinates

// Add the tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample data for the 30 most visited places in Oslo
const places = [
    {
        name: "Vigeland Park",
        lat: 59.9271,
        lng: 10.7005,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.vigeland.museum.no"
    },
    {
        name: "Oslo Opera House",
        lat: 59.9075,
        lng: 10.7533,
        openingHours: "10:00 AM - 8:00 PM",
        ticketCost: "Varies by event",
        website: "https://www.operaen.no"
    },
    // Add more places here...
];

// Add markers for each place
places.forEach(place => {
    const marker = L.marker([place.lat, place.lng]).addTo(map);
    marker.bindPopup(`
        <b>${place.name}</b><br>
        <b>Opening Hours:</b> ${place.openingHours}<br>
        <b>Ticket Cost:</b> ${place.ticketCost}<br>
        <b>Website:</b> <a href="${place.website}" target="_blank">${place.website}</a>
    `);
});
