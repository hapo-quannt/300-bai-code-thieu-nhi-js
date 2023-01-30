const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];

const obj1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const obj2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

function mergeUniqueElements(arr1, arr2) {
    var uniqueElements = new Set([...arr1, ...arr2]);
    return Array.from(uniqueElements);
}

console.log(mergeUniqueElements(arr1, arr2));
console.log(mergeUniqueElements(obj1, obj2));