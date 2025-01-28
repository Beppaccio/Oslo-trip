const map = L.map('map').setView([59.9139, 10.7522], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const places = [
    // Existing 2 places + 28 new entries
    {
        name: "Vigeland Sculpture Park",
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
        ticketCost: "Free (tours cost $15)",
        website: "https://operaen.no"
    },
    {
        name: "Akershus Fortress",
        lat: 59.9073,
        lng: 10.7361,
        openingHours: "6:00 AM - 9:00 PM",
        ticketCost: "Free (museum entry $10)",
        website: "https://www.akershusfestning.no"
    },
    {
        name: "The Royal Palace",
        lat: 59.9169,
        lng: 10.7275,
        openingHours: "10:00 AM - 5:00 PM (summer)",
        ticketCost: "Guided tour $20",
        website: "https://www.royalcourt.no"
    },
    {
        name: "Fram Museum",
        lat: 59.9028,
        lng: 10.6994,
        openingHours: "10:00 AM - 5:00 PM",
        ticketCost: "$15",
        website: "https://frammuseum.no"
    },
    {
        name: "Munch Museum",
        lat: 59.9054,
        lng: 10.7613,
        openingHours: "10:00 AM - 6:00 PM",
        ticketCost: "$18",
        website: "https://www.munchmuseet.no"
    },
    {
        name: "Norwegian Museum of Cultural History",
        lat: 59.9079,
        lng: 10.6854,
        openingHours: "10:00 AM - 5:00 PM",
        ticketCost: "$16",
        website: "https://norskfolkemuseum.no"
    },
    {
        name: "Holmenkollen Ski Museum",
        lat: 59.9637,
        lng: 10.6681,
        openingHours: "10:00 AM - 4:00 PM",
        ticketCost: "$20",
        website: "https://www.skiforeningen.no"
    },
    {
        name: "Karl Johans Gate",
        lat: 59.9138,
        lng: 10.7385,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Aker Brygge",
        lat: 59.9104,
        lng: 10.7253,
        openingHours: "10:00 AM - 10:00 PM",
        ticketCost: "Free",
        website: "https://www.akerbrygge.no"
    },
    {
        name: "Mathallen Food Hall",
        lat: 59.9236,
        lng: 10.7523,
        openingHours: "10:00 AM - 8:00 PM",
        ticketCost: "Free",
        website: "https://mathallenoslo.no"
    },
    {
        name: "Oslofjord",
        lat: 59.8907,
        lng: 10.7165,
        openingHours: "Open 24 hours",
        ticketCost: "Cruises from $36",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Nobel Peace Center",
        lat: 59.9102,
        lng: 10.7405,
        openingHours: "10:00 AM - 6:00 PM",
        ticketCost: "$15",
        website: "https://www.nobelpeacecenter.org"
    },
    {
        name: "Astrup Fearnley Museum",
        lat: 59.9087,
        lng: 10.7216,
        openingHours: "12:00 PM - 5:00 PM",
        ticketCost: "$18",
        website: "https://www.afmuseet.no"
    },
    {
        name: "Oslo City Hall",
        lat: 59.9113,
        lng: 10.7338,
        openingHours: "9:00 AM - 4:00 PM",
        ticketCost: "Free",
        website: "https://www.oslo.kommune.no"
    },
    {
        name: "Ekebergparken Sculpture Park",
        lat: 59.8952,
        lng: 10.7793,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://ekebergparken.com"
    },
    {
        name: "Kon-Tiki Museum",
        lat: 59.9031,
        lng: 10.6983,
        openingHours: "10:00 AM - 5:00 PM",
        ticketCost: "$12",
        website: "https://www.kon-tiki.no"
    },
    {
        name: "Norwegian Maritime Museum",
        lat: 59.9037,
        lng: 10.6992,
        openingHours: "10:00 AM - 5:00 PM",
        ticketCost: "$14",
        website: "https://marmuseum.no"
    },
    {
        name: "National Museum",
        lat: 59.9170,
        lng: 10.7405,
        openingHours: "10:00 AM - 6:00 PM",
        ticketCost: "$20",
        website: "https://www.nasjonalmuseet.no"
    },
    {
        name: "Natural History Museum",
        lat: 59.9187,
        lng: 10.7698,
        openingHours: "10:00 AM - 5:00 PM",
        ticketCost: "$12",
        website: "https://www.nhm.uio.no"
    },
    {
        name: "Bygdøy Peninsula",
        lat: 59.9030,
        lng: 10.6836,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Frogner Park",
        lat: 59.9266,
        lng: 10.7025,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Norwegian Resistance Museum",
        lat: 59.9081,
        lng: 10.7362,
        openingHours: "10:00 AM - 5:00 PM",
        ticketCost: "$10",
        website: "https://www.norgeshistorien.no"
    },
    {
        name: "Tjuvholmen",
        lat: 59.9089,
        lng: 10.7218,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.tjuvholmen.no"
    },
    {
        name: "Grünerløkka District",
        lat: 59.9224,
        lng: 10.7581,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Sognsvann Lake",
        lat: 59.9688,
        lng: 10.7301,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Akerselva River",
        lat: 59.9239,
        lng: 10.7562,
        openingHours: "Open 24 hours",
        ticketCost: "Free",
        website: "https://www.visitoslo.com"
    },
    {
        name: "Oslo Cathedral",
        lat: 59.9150,
        lng: 10.7465,
        openingHours: "10:00 AM - 4:00 PM",
        ticketCost: "Free",
        website: "https://www.oslodomkirke.no"
    },
    {
        name: "Botanical Garden",
        lat: 59.9184,
        lng: 10.7690,
        openingHours: "7:00 AM - 8:00 PM",
        ticketCost: "Free",
        website: "https://www.nhm.uio.no"
    },
    {
        name: "Norwegian Armed Forces Museum",
        lat: 59.9076,
        lng: 10.7352,
        openingHours: "10:00 AM - 4:00 PM",
        ticketCost: "Free",
        website: "https://www.forsvarsmuseet.no"
    }
];

// Add clustered markers
const markers = L.markerClusterGroup();
places.forEach(place => {
    const marker = L.marker([place.lat, place.lng]);
    marker.bindPopup(`
        <b>${place.name}</b><br>
        <b>Hours:</b> ${place.openingHours}<br>
        <b>Cost:</b> ${place.ticketCost}<br>
        <b>Website:</b> <a href="${place.website}" target="_blank">Visit</a>
    `);
    markers.addLayer(marker);
});
map.addLayer(markers);
