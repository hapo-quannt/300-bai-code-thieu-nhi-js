const arr1 = [1, 2, 3, 4, 5, 5 , 8 ,9], arr2 = [5, 6, 7, 8, 9];

function commonElementsArr(arr1, arr2) {
  return arr1.filter(function(element) {
    return arr2.indexOf(element) !== -1;
  });
}

console.log(commonElementsArr(arr1, arr2));

const obj1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const obj2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

function commonElementsObj(arr1, arr2, key) {
  return arr1.filter(function(element) {
    return arr2.some(function(element2) {
      return element[key] === element2[key];
    });
  });
}

console.log(commonElementsObj(obj1, obj2, 'id'))

