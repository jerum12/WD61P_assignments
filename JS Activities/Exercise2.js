let a = [
  { x: 1.5, y: 2 },
  { x: -1, y: -1 },
  { x: 0.5, y: 2.5 },
  { x: 10, y: 4 },
  { x: 2.5, y: 3 },
];

for (let i = 0; i < a.length; i++) {
  let s = a[i];

  if (s.x < 0) {
    let ans = (s.x / s.y) * s.x + 4;
    console.log(`condition:1 `, ans);
  } else if (s.y < 0) {
    let ans = s.x - s.y;
    console.log(`condition:2 `, ans);
  } else if (s.x > s.y) {
    let z = ((s.x * 5) / 2) % s.y;
    let ans = z;
    console.log(`condition:3 `, ans);
  } else {
    let z = (s.x % 5) * (2 * s.y);
    let ans = z;
    console.log(`condition:4 `, ans);
  }
}
