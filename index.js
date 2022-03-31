function hasTargetSum(array, target) {
  /* 
    Add your pseudocode here
    for(number = 0; while number < array.length; number++){
      const newarray = array without array[number]
      for(newnumber = 0; while newnumber < newarray.length; newnumber++){
        if(number + newnumber === target){
          return true;
        }
      }
    }
    return false;
  */
 
  // Write your algorithm here
  // n steps, determined by array size
  for(let number = 0;number < array.length; number++){
    // 1 step
    const newArray = [...array];
    // 1 step
    newArray.splice(number,1);
    // n steps, determined once again by size of array
    for(let newNumber = 0; newNumber<newArray.length; newNumber++){
      // 1 step
      if(newArray[newNumber] + array[number] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  time complexity is 0(n), as complexity only grows with the array contents, as input by 1st parameter
  space complexity is 0(5n). We allocate memory for the array and the target number first,
  then we have to allocate memory for both numbers we are comparing and the new array we have to iterate through
*/

/*
  Add written explanation of your solution here
  write logic to hasTargetSum that returns true if any pair of numbers
  adds up to the target number.
  I need to iterate over the array
  I need to take a number from the array, then create a new array without that number
  I need to iterate over this new array to see if number + number at array index
  equals my target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 7));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 8, 17], 568));
    
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 8, 17, 18, 554, 10, 35, 4, 456, 132,158, 1, 99], 1));
    
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([321, 32, 44, 25, 75, 19, 456, 12, 5, 45, 12, 15, 4, 12, 215, 12], 247));
}

module.exports = hasTargetSum;
