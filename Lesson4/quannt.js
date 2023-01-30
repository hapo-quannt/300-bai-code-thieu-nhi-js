let originalArray = [{name: 'Quan'}, {name: 'Trong'}];
let deepCopyArray = JSON.parse(JSON.stringify(originalArray));

deepCopyArray[0].name = 'Nguyen';
console.log(originalArray[0].name); // Quan
console.log(deepCopyArray[0].name); // Nguyen

//Deep Copy: deep copy là một bản sao đầy đủ của đối tượng hoặc mảng, bao gồm tất cả các thuộc tính và các đối tượng con của nó. Khi thay đổi bản sao, nó không thay đổi giá trị của đối tượng gốc.


//----------------------------------------------


let original2Array = [{name: 'Quan'}, {name: 'Trong'}];
let shallowCopyArray = originalArray.slice();

shallowCopyArray[0].name = 'Nguyen';
console.log(original2Array[0].name); // Jack
console.log(shallowCopyArray[0].name); // Jack

//Shallow Copy: shallow copy là một bản sao của mảng hoặc đối tượng, chỉ bao gồm các thuộc tính của nó. Nếu thay đổi bản sao, nó sẽ thay đổi giá trị của đối tượng gốc.