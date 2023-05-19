var x, y, ans;

if(x<0){
ans = (x/y) * x+4;
console.log("first condition");
console.log(ans);
} 
else if(y>0){
    ans = x-y;
    console.log("second condition");
    console.log(ans);
}
else if(x>y){
    let z = ((x*5)/2) % y;
    ans = z;
    console.log("third condition");
    console.log(ans);
}
else{
    let z = (x%5) * (2*y);
    ans = z;
    console.log("fourth condition");
    console.log(ans);
}

        //Condition         answer
//1.  second condition      -0.5
// 2. first condition        3
// 3. third condition       1.25
// 4. second condition       6
// 5. second condition     -0.5