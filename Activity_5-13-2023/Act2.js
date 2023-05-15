let ans = 0; 
let z = 0;
let x = 2.5;
let y = 3;
if (x < 0) {//condition1
ans=(x/y)* x + 4;}
else if (y < 0){//condition2
ans = x - y;}
else if (x>y){//condition3
let z = ((x*5)/2)%y;
ans=z;
}else{//condition4
let z = (x%5)*(2*y);
ans=z;}


console.log(ans);