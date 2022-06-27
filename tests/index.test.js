const index = require("../src/index");

// ------- main converter ------------------ //
test('Main Converter', () => {
  expect(index.convert("red", "name", "hex")).toBe("#ff0000");
  expect(index.convert("MEDIUM aquamarine", "name", "rgb")).toStrictEqual([102,205,170]);
  expect(index.convert("yuck", "name", "rgb")).toBe(null);

  expect(index.convert([218,112,214], "rgb", "name")).toBe("orchid");
  expect(index.convert([192,192,192], "rgb", "HEx")).toBe("#c0c0c0");
  expect(index.convert([23,255,100], "RGB", "rgb")).toStrictEqual([23,255,100]);

  expect(index.convert("#f8f8ff", "hex", "name")).toBe("ghostwhite");
  expect(index.convert("E85675", "hex", "name")).toBe(undefined);
  expect(index.convert("#483d8B", "hex", "rgb")).toStrictEqual([72,61,139]);

  expect(index.convert("yep", "hex", "rgb")).toBe(null);
})

// ------- convert TO hex ------------------ //
test('Name to Hex', () => {
  expect(index.convertNameToHex("moccasin")).toBe("#ffe4b5");
  expect(index.convertNameToHex("THISTLE")).toBe("#d8bfd8");
  expect(index.convertNameToHex("gross")).toBe(null);
})

test('RGB to Hex', () => {
  expect(index.convertRGBToHex([49, 166, 94])).toBe("#31a65e");
  expect(index.convertRGBToHex([98, 63, 122, 45])).toBe(null);
  expect(index.convertRGBToHex([0, 128, 128])).toBe("#008080");
  expect(index.convertRGBToHex("yep")).toBe(null);
  expect(index.convertRGBToHex(4)).toBe(null);
})

// ------- convert FROM hex ------------------ //
test('Hex to Name', () => {
  expect(index.convertHexToName("#9400D3")).toBe("darkviolet");
  expect(index.convertHexToName("ffC0cB")).toBe("pink");
  expect(index.convertHexToName("#D0C793")).toBe(undefined);
  // expect(index.convertHexToName(000000)).toBe("black");
  expect(index.convertHexToName("hi")).toBe(null);
  expect(index.convertHexToName(["cool"])).toBe(null);
})

test('Hex to RGB', () => {
  expect(index.convertHexToRGB("#EED545")).toStrictEqual([238,213,69]);
  expect(index.convertHexToRGB("#1A7062")).toStrictEqual([26,112,98]);
  expect(index.convertHexToRGB(482736)).toStrictEqual([72,39,54])
  expect(index.convertHexToRGB(32)).toBe(null)
  expect(index.convertHexToRGB(["list"])).toBe(null)
})

// ------- type validators -------------------- //
test('Valid Hex', () => {
  expect(index.validHex("623F7A")).toBe("#623f7a");
  expect(index.validHex(299344)).toBe("#299344");
  expect(index.validHex("#d9c764")).toBe("#d9c764");
  expect(index.validHex("#445")).toBe(null);
  expect(index.validHex([2, 4, 5, 6, 3])).toBe(null);
  expect(index.validHex("#!55555")).toBe(null);
})

test('Valid RGB', () => {
  expect(index.validRGB("wow")).toBe(null);
  expect(index.validRGB([3,2,3,5])).toBe(null);
  expect(index.validRGB([50,153,240])).toStrictEqual([50,153,240]);
  expect(index.validRGB([300, 30, 3])).toBe(null);
  expect(index.validRGB([34,"187",3])).toStrictEqual([34, 187, 3]);

})

test('Valid Name', () => {
  expect(index.validName("RED")).toBe("red");
  expect(index.validName(43)).toBe(null);
  expect(index.validName("fish")).toBe(null);
  expect(index.validName("violet")).toBe("violet");
})


//     SyntaxError: /Users/lissa/dev/courses/wjsl/colorLib/tests/index.test.js: Legacy octal literals are not allowed in strict mode. (35:24)
// HELP