/**
 *
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const rodMap = new Map();

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = rings[i + 1];

    // if the rod is not in the map, add it (it will be initialized with all false)
    if (!rodMap.has(rod)) {
      rodMap.set(rod, { R: false, G: false, B: false });
    }
    rodMap.get(rod)[color] = true;
  }
  let count = 0;
  for (let [rod, color] of rodMap) {
    if (color.R && color.G && color.B) {
      count++;
    }
  }
  return count;
};

const rings = "G4";
const result = countPoints(rings);
console.log(result);

// Time Complexity: O(N)
// Space Complexity: O(N)
