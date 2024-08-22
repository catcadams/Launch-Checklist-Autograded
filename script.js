// Write your JavaScript code here!

window.addEventListener("load", function () {
  // Add validation to notify the user if they forgot to enter a value for any one of the fields
  // Add an alert to notify the user that all fields are required.
  // Alert needs to happen before submit is processed
  const form = document.querySelector("form");
  const pilot = document.querySelector("input[name=pilotName]");
  const copilot = document.querySelector("input[name=copilotName]");
  const fuelLevel = document.querySelector("input[name=fuelLevel]");
  const cargoLevel = document.querySelector("input[name=cargoMass]");
  const list = document.getElementById("faultyItems");
  const launchStatus = document.getElementById("launchStatus");

  console.log("test");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formSubmission(list, launchStatus, pilot, copilot, fuelLevel, cargoLevel);
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
