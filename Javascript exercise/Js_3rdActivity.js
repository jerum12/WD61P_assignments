// Exercise (3rd Activity in Js)

// 1.) x = 1.5 y = 2
// condition 4 met the given problem.
let x = 1.5;
let y = 2;
let z = (x % 5) * (2 * y);
let ans = z;

console.log((x % 5) * (2 * y));
z = (1.5 % 5) * (2 * 2);
z = 1.5 * 4;
z = 6;
ans = 6;

// 2.) x = -1 y = -1
// condition 1 met the given problem.
x = -1;
y = -1;
if (x < 0) {
  ans = (x / y) * x + 4;
}
console.log((ans = (x / y) * x + 4));
ans = (-1 / -1) * -1 + 4;
ans = 1 * -1 + 4;
ans = -1 + 4;
ans = 3;

// 3.) x = 0.5 y = -2.5
// condition 2 met the given problem.
x = 0.5;
y = -2.5;
if (y < 0) {
  ans = x - y;
}
console.log((ans = x - y));
ans = 0.5 - -2.5;
ans = 0.5 + 2.5;
ans = 3;

// 4.) x = 10 y = 4
// condition 3 met the given problem.
x = 10;
y = 4;
z = ((x * 5) / 2) % y;
ans = z;
console.log((ans = ((x * 5) / 2) % y));
z = ((10 * 5) / 2) % 4;
z = (50 / 2) % 4;
z = 25 % 4;
z = 1;
ans = 1;

// 5.) x = 2.5 y = 3
// condition 2 met the given problem.
x = 2.5;
y = 3;
if (y < 0) {
  ans = x - y;
}
console.log((ans = x - y));
z = (2.5 % 5) * (2 * 3);
z = 2.5 * 6;
z = 15;
ans = 15;
