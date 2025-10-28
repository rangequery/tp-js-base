const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);


function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3, 4));
  

  const arr3 = [10,20];
  const arr4 = [...arr3, 30, 40];
  console.log(arr4);