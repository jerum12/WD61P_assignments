let a = [
  { x: 1.5, y: 2 },
  { x: -1, y: -1 },
  { x: 0.5, y: 2.5 },
  { x: 10, y: 4 },
  { x: 2.5, y: 3 },
];

for (let e = 0; e < a.length; e++) {
  function i() {
    if (a.x < 0) {
      ans = (a.x / y) * a.x + 4;
      console.log(`condition:1 `, ans);
    } else if (a.y < 0) {
      ans = a.x - a.y;
      console.log(`condition:2 `, ans);
    } else if (a.x > a.y) {
      let z = ((a.x * 5) / 2) % a.y;
      ans = z;
      console.log(`condition:3 `, ans);
    } else {
      let z = (a.x % 5) * (2 * a.y);
      ans = z;
      console.log(`condition:4 `, ans);
    }
  }
  i();
}
