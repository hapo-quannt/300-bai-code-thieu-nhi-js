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
