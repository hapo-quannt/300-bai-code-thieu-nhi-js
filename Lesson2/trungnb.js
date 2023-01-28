//Lesion 1

//1
function getSameValue(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
    // return arr1.filter((item) => arr2.find(item));
    // return arr1.filter((item) => arr2.findIndex(item) != -1);
}

//2 

function getSameValue2(arr, arr2) {
    const newArr = formatArray(arr);
    const newArr2 = formatArray(arr2);
    return newArr.filter((item) => newArr2.includes(item));
}

function formatArray(arr) {
    return arr.map((item) => {
        if (typeof item === "object" && !Array.isArray(item) && item !== null) {
            const sorted = Object.keys(item)
                .sort()
                .reduce((accumulator, key) => {
                    accumulator[key] = item[key];

                    return accumulator;
                }, {});

            return JSON.stringify(sorted);
        } else {
            return JSON.stringify(item);
        }
    });
}

//Use Lodash
_.isEqual(arr, arr2);

_________________________________________
// Lession 2
const getDifferentItem = function (arr1, arr2) {
    const newArr1 = [...arr1, ...arr2];
    if (
      newArr1.every((item) => typeof item === "string") ||
      newArr1.every((item) => typeof item === "number")
    ) {
      return [...new Set(newArr1)];
    } else {
      // Mảng hỗn hợp
      // [number, string, object, array]
      const newArr2 = new Set(
        newArr1.map((item) => {
          if (typeof item === "object" && !Array.isArray(item) && item !== null) {
            const sorted = Object.keys(item)
              .sort()
              .reduce((accumulator, key) => {
                accumulator[key] = item[key];
  
                return accumulator;
              }, {});
  
            return JSON.stringify(sorted);
          } else {
            return JSON.stringify(item);
          }
        })
      );
  
      return [...new Set(newArr2)].map((item) => JSON.parse(item));
    }
  };
________________________

// Lession 3

// function removeItem(...arg) {
//     const [arr, ...removeList] = arg;
//     return arr.filter((item) => !removeList.includes(item));
// }

function removeItem() {
    const [arr, ...removeList] = arguments;
    return arr.filter((item) => !removeList.includes(item));
}

