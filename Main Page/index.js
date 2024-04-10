document.addEventListener("DOMContentLoaded", function() {
  const menuContainer = document.querySelector('.menu-container');
  const menuContent = document.querySelector('.menu-content');

  menuContainer.addEventListener('mouseover', function(){
      menuContent.style.display = 'block';
  });

  menuContainer.addEventListener('mouseout', function(){
      menuContent.style.display = 'none';
  });

  var map = L.map('map').setView([33.2104, -97.1473], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const buildings = new Map();
  buildings.set("GAB", [33.21316482090388, -97.1481464082617]);
  buildings.set("NTDP", [33.253667671664694, -97.15253791766376]);
  buildings.set("BLB", [33.208923343929065, -97.14768127787393]);
  buildings.set("PHYS", [33.213146118569824, -97.14658036227581]);
  buildings.set("LANG", [33.21406767682987, -97.14665440400988]);
  buildings.set("CVAD", [33.21319699426222, -97.14544204563157]);
  buildings.set("CHEM", [33.21413050925735, -97.15023783496879]);

  var inputs = document.getElementsByClassName("input-class");
  var buttons = document.getElementsByClassName("map-button");
  
  for (var i = 0; i < inputs.length; i++) {
      buttons[i].addEventListener("click", function() {
          console.log("Button clicked");
          var input = this.previousElementSibling;
          console.log(input.value);
          if (buildings.has(input.value)) {
              console.log("Building found");
              var coordinates = buildings.get(input.value);
              var url = `https://www.google.com/maps/search/?api=1&query=${coordinates[0]},${coordinates[1]}`;
              window.open(url, '_blank');
          }
      });

      inputs[i].addEventListener("input", function() {
          console.log("Input changed");
          if (this.value === "") {
              // Remove marker
              map.eachLayer(function(layer) {
                  if (layer instanceof L.Marker) {
                      map.removeLayer(layer);
                  }
              });
          } else if (buildings.has(this.value)) {
              console.log("Building found");
              var coordinates = buildings.get(this.value);
              L.marker(coordinates).addTo(map);
              console.log(`Added marker successfully at ${this.value}`);
          }
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const menuContent = document.querySelector('.menu-content');

  menuButton.onclick = function() {
      if (menuContent.style.display === "block") {
          menuContent.style.display = "none";
      } else {
          menuContent.style.display = "block";
      }
  }
});
