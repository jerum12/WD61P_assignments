let x = 2.5;
let y = 3;
if(x < 0) {
    console.log(ans = (x / y) * x + 4);
    console.log("condition 1");
} else if (y < 0) {
    console.log(ans = x - y);
    console.log("condition 2");
} else if(x > y) {
    let z = ((x * 5) / 2) % y;
    console.log(ans = z);
    console.log("condition 3");
} else {
    let z = (x % 5) * (2 * y);
    console.log(ans = z);
    console.log("condition 4");
}

//my answer:
console.log("|  x  |  y  |  condition  |  ans  |");
console.log("| 1.5 |  2  |      4      |   6   |");
console.log("| -1  | -1  |      1      |   3   |");
console.log("| 0.5 |-2.5 |      2      |   3   |");
console.log("| 10  |  4  |      3      |   1   |");
console.log("| 2.5 |  3  |      4      |  15   |");