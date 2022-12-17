// SQUAREMETERS //
// Define a function to calculate the area
function calculateArea() {
  // Get the length and width values from the input fields
  const length = document.getElementById("lengthm2").value;
  const width = document.getElementById("widthm2").value;

  // Convert the values to numbers and calculate the area
  const area = length * width;

  // Displays the result in the input element
  document.getElementById("result").value = area.toFixed(1) + " m2";
}

// defines the function and adds a set value to the equation
function calculateAdhesive() {
  let wall = document.getElementById("wallM2").value * 2.5;
  let floor = document.getElementById("floorM2").value * 3;

  // defines the percentage needed for the "big tiles" checkbox. Checked should be 3.5kg/m2 (3 + 16.67% = 3.5)
  const percentageToGet = 16.67;
  const bigTileCheck = (percentageToGet / 100) * floor;
  console.log(bigTileCheck);
  // Checks if checkbox is checked and adds 0.5 to the equation
  if (document.getElementById("bigT").checked) {
    floor = bigTileCheck + floor;
  }

  // Convert the values to numbers and calculates the area
  const totalM2 = wall + floor;
  // Displays the result in the input element
  document.getElementById("totalAd").value = totalM2.toFixed(1) + " kg";
  console.log(typeof "wall");
}
// GROUT //

// Defines a function to calculate grout
function calculateGrout() {
  // Get the selected tile size element
  const tileSize = document.getElementById("tSize");

  // Get the selected grout thickness element
  const groutThickness = document.getElementById("groutT");

  // Converts the values into numbers
  const selectedTileSize = parseFloat(tileSize.value);
  const selectedGroutThickness = parseFloat(groutThickness.value);

  // Get the total area element
  const totalAreaG = document.getElementById("groutM2");

  // Convert the value of the total area element into a number
  const totalAreaGN = parseFloat(totalAreaG.value);

  let totalGrout = totalAreaGN * selectedTileSize + selectedGroutThickness;

  document.getElementById("totalG").value = totalGrout.toFixed(1) + " kg";
  console.log(typeof "totalGrout");
}
