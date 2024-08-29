// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (!isNaN(testInput)) {
    return "Is a Number";
  }
  if (isNaN(testInput)) {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    return alert("All fields are required!");
  }
  if (
    validateInput(pilot) === "Is a number" ||
    validateInput(copilot) === "Is a number"
  ) {
    return alert("Make sure to enter valid information for each field!");
  }
  if (
    validateInput(fuelLevel) === "Not a number" ||
    validateInput(cargoLevel) === "Not a number"
  ) {
    return alert("Make sure to enter valid information for each field!");
  }
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  const launchStatus = document.getElementById("launchStatus");

  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  if (fuelLevel < 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else if (fuelLevel < 10000 && cargoLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  const num = Math.floor(Math.random() * planets.length);
  return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
