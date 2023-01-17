**Bài toán 1: Viết 1 function trả về 1 array chứa những phần tử chung của 2 array cho trước. Áp dụng cho Array và Array object (Có thể có tách ra 2 func riêng biệt)**

VD1: 
```javascript
const arr1 = [1, 2, 3, 4, 5, 5 , 8 ,9], arr2 = [5, 6, 7, 8, 9];
// output: [5, 8, 9]
```

VD2: 
```javascript
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

// output: [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]
```
