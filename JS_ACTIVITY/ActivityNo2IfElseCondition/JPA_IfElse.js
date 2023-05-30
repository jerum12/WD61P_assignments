function evaluateConditions(x, y) {
    let ans;
  
    if (x < 0) { // Condition 1
      ans = (x / y) * x + 4;
      console.log("Condition 1");
      console.log("Answer: " + ans);
    } else if (y < 0) { // Condition 2
      ans = x - y;
      console.log("Condition 2");
      console.log("Answer: " + ans);
    } else if (x > y) { // Condition 3
      let z = ((x * 5) / 2) % y;
      ans = z;
      console.log("Condition 3");
      console.log("Answer: " + ans);
    } else { // Condition 4
      let z = (x % 5) * (2 * y);
      ans = z;
      console.log("Condition 4");
      console.log("Answer: " + ans);
    }
  }
  
  // Test Cases
  evaluateConditions(1.5, 2); //Condition 4 | Answer: 6
  evaluateConditions(-1, -1); //Condition 1 | Answer: 3
  evaluateConditions(0.5, -2.5); //Condition 2 | Answer: 3
  evaluateConditions(10, 4); //Condition 3 | Answer: 1
  evaluateConditions(2.5, 3); //Condition 4 | Answer: 15
  