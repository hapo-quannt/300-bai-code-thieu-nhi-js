**Bài toán: Viết 1 func trả về một array chứa tất cả những elements của hai array, các element không trùng lặp nhau. Áp dụng với cả array và array object**

VD1: 
```javascript
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];

// output: [1, 2, 3, 4, 5, 8, 9, 6, 7]
```

VD2: 
```javascript
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

// output: [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
```
