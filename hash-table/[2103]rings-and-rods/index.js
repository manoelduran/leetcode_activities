/**
 *
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const map = new Map();

  for (let i = 0; i < rings.length; i += 2) {
    map.set(rings[i], rings[i + 1]);
  }
  console.log(map);
};

// const rings = "B0B6G0R6R0R6G9";
const rings = "G4";
const result = countPoints(rings);
console.log(result);
