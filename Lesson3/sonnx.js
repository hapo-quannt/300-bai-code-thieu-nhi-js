// Lesson 1 
const arr1 = [1, 2, 3, 4, 5, 5 , 8 ,9];
const arr2 = [5, 6, 7, 8, 9];
const result =  [...new Set(arr1)].filter((value, index) => {
  return arr2.includes(value);
})
console.log(result)

// Lesson 2 
const results =  [...new Set([...arr1, ...arr2])]
console.log(results)

// Lesson 3 
function destroyer(arr1, ...args) {
    return arr1.filter(val => !args.includes(val));
    }
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));