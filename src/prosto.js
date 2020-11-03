const flatArrToObj = (newArr, arr) => {  
  for (var i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      flatArrToObj(newArr, arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
};

const craeteObject = arr => {
  const output = {};

  for (var i = 0; i < arr.length; i+= 2) {
    output[arr[i]] = i + 1 < arr.length ? arr[i+1] : null
  }

  return output;
};

 const main = () => {
  let newArr = [];
  flatArrToObj(newArr, [1, 2, 3, [4, 5], [6, [7]], 8]);

  return craeteObject(newArr);
 };

console.log(main());
