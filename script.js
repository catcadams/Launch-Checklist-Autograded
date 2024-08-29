// Write your JavaScript code here!

window.addEventListener("load", function () {
  // Add validation to notify the user if they forgot to enter a value for any one of the fields
  // Add an alert to notify the user that all fields are required.
  // Alert needs to happen before submit is processed
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const pilot = document.querySelector("input[name=pilotName]").value;
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoLevel = document.querySelector("input[name=cargoMass]").value;
    const list = document.getElementById("faultyItems");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  console.log(listedPlanetsResponse);
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);

      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
});
