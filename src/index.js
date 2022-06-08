const colorNames = require("./webColors.json");

function convert(color, input, output) {
  switch(input) {
    // if converting to same code
    case output:
      return color;
    
    case "hex":
      console.log("hex!");
      break;
    case "rgb":
      console.log("rgb!");
      break;
    case "hsl":
      console.log("hsl!");
      break;
    case "cmyk":
      console.log("cymk!");
      break;
    case "name":
      console.log("name!");
      console.log(convertNameToHex(color));
      break;
  }
}

function convertNameToHex(color) {
  const index = Object.keys(colorNames).indexOf(color);
  return Object.values(colorNames)[index];
}

convert("lightcoral", "name", "hex");