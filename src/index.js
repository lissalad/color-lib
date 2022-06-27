const colorNames = require("./webColors.json");

// ------------ main converter ---------------------------- //
function convert(color, input, output) {
  let hex;

  // convert all to hex
  switch (input.toLowerCase()) {
    // unless converting to same code
    // TODO:  MAKE VALID FIRST !!!!!
    case output:
      console.log("requested output same type as input");
      return color;

    case "hex":
      hex = validHex(color);
      break;

    case "rgb":
      hex = convertRGBToHex(color);
      break;

    case "name":
      hex = convertNameToHex(color);
      break;
  }

  // convert hex to requested output and return value
  switch (output.toLowerCase()) {
    // unless hex IS requested output
    case "hex":
      return hex;

    case "rgb":
      return convertHexToRGB(hex);
      break;

    case "name":
      return convertHexToName(hex);
  }
}

// ------- convert TO hex --------------------------------- //

function convertNameToHex(color) {
  color = validName(color);

  // check that name input is valid
  if (!color) {
    console.log("invalid color name");
    return null;
  }

  const index = Object.keys(colorNames).indexOf(color);
  if (Object.values(colorNames)[index]) {
    return Object.values(colorNames)[index];
  }
  return null;
}

function convertRGBToHex(color) {
  color = validRGB(color);

  // check that rgb input is valid
  if (!color) {
    console.log("invalid RGB value");
    return null;
  }

  const hex = color.map((v) => {
    const converted = v.toString(16);
    // return 0 if first digit is 0
    if (converted.length == 1) {
      return "0" + converted;
    }
    return converted;
  });

  return `#${hex.join("")}`;
}

// ------- convert FROM hex --------------------- //
function convertHexToName(color) {
  color = validHex(color);

  // check that hex input is valid
  if (!color) {
    console.log("invalid hex value");
    return null;
  }

  // find and return matching color name
  const index = Object.values(colorNames).indexOf(color);
  return Object.keys(colorNames)[index];
}

function convertHexToRGB(color) {
  color = validHex(color);

  // check that hex input is valid
  if (!color) {
    console.log("invalid hex value");
    return null;
  }

  let values = color.slice(1).match(/.{1,2}/g);

  const rgb = values.map((v) => {
    return parseInt(v, 16);
  });

  return rgb;
}

// ----------------- type validators ------------------------------ //
function validHex(color) {
  // check type is string
  if (typeof color !== "string") {
    // check if type is int
    if (!Number.isInteger(color)) {
      console.log("enter hex as STRING or INTEGER");
      return null;
    }
    // if type is int, force string
    else {
      color = color.toString();
    }
  }

  // make lowercase
  color = color.toLowerCase();

  // confirm starts with #, or add if forgotten
  if (color[0] !== "#") {
    color = "#" + color;
  }

  // valid characters?
  const characters = color.slice(0);
  const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/g;
  if (!regex.test(characters)) {
    console.log("invalid characters for hex value");
    return null;
  }

  // correct length?
  if (color.length !== 7) {
    // const error = new Error("incorrect length for hex value");
    // throw error;
    return null;
  }

  return color;
}

function validRGB(color) {
  // check is array
  if (!Array.isArray(color)) {
    console.log("RGB must be an array");
    return null;
  }

  // check correct length
  if (color.length !== 3) {
    console.log("RGB have exactly 3 values");
    return null;
  }

  // check values are between 0-255
  for (let i = 0; i < 3; i += 1) {
    // force int
    color[i] = parseInt(color[i]);
    if (color[i] < 0 || color[i] > 255) {
      console.log("RGB values range from 0-255");
      return null;
    }
  }

  return color;
}

function validName(color) {
  // check type is string
  if (typeof color !== "string") {
    console.log("color names must be a string");
    return null;
  }

  // make lowercase and remove any spaces
  color = color.toLowerCase().replace(/\s/g, "");

  if (!Object.keys(colorNames).includes(color)) {
    console.log("named color does not exist");
    return null;
  }

  return color;
}

// ----------------- exports ------------------------------ //
module.exports = {
  convert,
  convertNameToHex,
  convertRGBToHex,
  convertHexToName,
  convertHexToRGB,
  validHex,
  validRGB,
  validName,
};

