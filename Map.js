// This example adds a map using web components.
function initMap() {
  console.log("Maps JavaScript API loaded.");

  const advancedMarkers = document.querySelectorAll(
    "#marker-click-event-example gmp-advanced-marker",
  );

  for (const advancedMarker of advancedMarkers) {
    customElements.whenDefined(advancedMarker.localName).then(async () => {
      advancedMarker.addEventListener("gmp-click", async () => {
        const infoWindow = new google.maps.InfoWindow({
          //@ts-ignore
          content: advancedMarker.title,
        });

        infoWindow.open({
          //@ts-ignore
          anchor: advancedMarker,
        });
      });
    });
  }
}

window.initMap = initMap;
