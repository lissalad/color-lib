# Color Library
functions to convert color codes between web color name, hex code, and rgb values


## Installation
`npm i lissa-color-convert`

at the top of your file put:
```ts
 const lissaColor = require('lissa-color-convert');
```

## Usage
# convert()
takes 3 paramaters: color code, the type of code input, and the type of code desired output  

valid input and output values:
  - "name" for web color name
  - "hex" for hex code
  - "rgb" for rgb values
 
examples:  

```js
 lissaColor.convert([0, 206, 209], "rgb", "name");  
  // returns "darkturquoise"
```

```js
 lissaColor.("ghostwhite", "name", "hex");  
  // returns "#f8f8ff"
```

```js
 lissaColor.("#4b0082", "hex", "rgb");  
  // returns [75, 0, 130]
```

## Color Code Formatting  
### RGB  
- formatted as array of 3 integer values ranging between 0 and 255 

### Hex  
- returned as all lowercase string beginning with "#", followed by 6 charaters consisting only of digits 0-9 and/or letters a-f  
- input is not case sensitive, beginning "#" is optional, and can be an integer

### Name
- returned as all lowercase string with no spaces  
- input is not case sensitive, and may include spaces

## Invalid Inputs

- if web color input name does not exist, null is returned  
- if input color code is incorrectly formatted, null is returned  
- if no existing web color is equal to the input color, undefined is returned

## THANKS
major thanks to this stack overflow answer  
[Color Names and Hex Values](https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes)
