document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([33.2104, -97.1473], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const buildings = new Map();
    buildings.set("GAB", [33.21316482090388, -97.1481464082617]);
    buildings.set ("NTDP", [33.253667671664694, -97.15253791766376]);
    buildings.set("BLB", [33.208923343929065, -97.14768127787393]);
    buildings.set("PHYS", [33.213146118569824, -97.14658036227581]);

    var input = document.getElementsByClassName("input-class")[0]; 
    input.addEventListener("input", function() {
        if (buildings.has(input.value)) {
            var coordinates = buildings.get(input.value);
            L.marker(coordinates).addTo(map);
            console.log(`Added marker successfully at ${input.value}`)
        }
    });
});