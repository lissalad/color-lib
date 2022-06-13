const colorNames = require("./webColors.json");

function convert(color, input, output) {
  let hex;

  // convert all to hex
  switch (input) {
    // unless converting to same code
    case output:
      return color;

    case "hex":
      console.log("input: hex!");
      hex = color;
      break;

    case "rgb":
      console.log("input: rgb!");
      break;

    case "hsl":
      console.log("input: hsl!");
      break;

    case "cmyk":
      console.log("input: cymk!");
      break;

    case "name":
      console.log("input: name!");
      hex = convertNameToHex(color);
      break;
  }

  // convert hex to requested output and return value
  switch (output) {
    // unless hex IS requested output
    case "hex":
      return hex;

    case "rgb":
      console.log("output: rgb!");
      break;

    case "hsl":
      console.log("output: hsl!");
      break;

    case "cmyk":
      console.log("output: cymk!");
      break;
      
    case "name":
      console.log("output: name!");
      return convertHexToName(hex);
  }
}

// ------- convert ALL to hex --------------------------------- //

// complete
function convertNameToHex(color) {
  const index = Object.keys(colorNames).indexOf(color);
  return Object.values(colorNames)[index];
}

// in progress
function convertRGBToHex(color) { 

  const hex = color.map((v) => {
    return(v.toString(16));
  });

  return `#${hex.join("")}`;
}

function convertHSLToHex(color) {}

function convertCYMKToHex(color) {}

// ------- convert hex to desired code output --------------------- //
// complete
function convertHexToName(color) {
  const index = Object.values(colorNames).indexOf(color);
  return Object.keys(colorNames)[index];
}

// complete
function convertHexToRGB(color) {
  let values = color.slice(1).match(/.{1,2}/g);

  const rgb = values.map((v) => {
    return parseInt(v, 16);
  });

  return rgb;
}

function convertHexToHSL(color) {
  // incomplete
}

function convertHexToCYMK(color) {
  // incomplete
}

// ----------------- helpers ------------------------------ //
function initializeHex(color, input, output) {
  if (input === "hex") {
    return color;
  } else {
    return "ok";
  }
}

// LISSA'S TESTS

console.log(convertRGBToHex([254, 227, 62]));
