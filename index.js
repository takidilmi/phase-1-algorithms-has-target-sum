function hasTargetSum(array, target) {
  const visitedNumbers = new Set();

  for (const num of array) {
    const difference = target - num;
    if (visitedNumbers.has(difference)) {
      return true;
    }
    visitedNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  
  Function hasTargetSum(array, target):
  Create an empty set called visitedNumbers
  
  For each number num in array:
    Calculate the difference difference between target and num
    If difference is in visitedNumbers:
      Return true
    Add num to visitedNumbers
  
  Return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([-7, 10, 4, 8], 3)); // true
console.log(hasTargetSum([1, 2, 3, 4], 5)); // true
console.log(hasTargetSum([2, 2, 3, 3], 4)); // true
console.log(hasTargetSum([4], 4)); // false
}

module.exports = hasTargetSum;
