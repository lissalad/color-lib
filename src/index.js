const colorNames = require("./webColors.json");

function convert(color, input, output) {
  let hex;

  switch (input) {
    // return same if converting to same code
    case output:
      return color;

    // convert all to hex
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

  // otherwise convert hex to requested output
  switch (output) {
    // convert all from hex to desired output
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
    case "hex":
  }
}

// ------- convert ALL to hex --------------------------------- //

// complete
function convertNameToHex(color) {
  const index = Object.keys(colorNames).indexOf(color);
  return Object.values(colorNames)[index];
}

// in progress
function convertRGBToHex(color) {}

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
  let rgb = [];
  color.forEach((v) => {
    rgb.push(parseInt(v, 16));
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
// console.log(convert("#ff0000", "hex", "name"));
// console.log(parseInt("C2", 16));
// const str = "abcd";
// const r = str.slice(0,2);
// console.log(str);
// console.log(convertHexToName("#8a2be2"));
// console.log(convertNameToHex("red"));
console.log(convertHexToRGB([44, 60, "c5"]));
