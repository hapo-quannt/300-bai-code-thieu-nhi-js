function destroyer(arr, ...args) {
    return arr.filter(val => !args.includes(val));
    }
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));