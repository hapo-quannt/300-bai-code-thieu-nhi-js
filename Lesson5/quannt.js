let numbers = [1, 2, 3, 4];
let max = Math.max.apply(null, numbers);
console.log(max);

//------------------------------------
let max2 = numbers.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max2);

//-------------------------------------
let objects = [{ id: 1, name: 'jack' }, { id: 2, name: 'may' }, { id: 3, name: 'shawn' }, { id: 4, name: 'tony' }];
let maxObject = objects.reduce((prev, curr) => prev.id > curr.id ? prev : curr);
console.log(maxObject);

//--------------------------------------
let maxObject2 = objects[0];
for (let i = 1; i < objects.length; i++) {
  if (objects[i].id > maxObject2.id) {
    maxObject2 = objects[i];
  }
}
console.log(maxObject2);