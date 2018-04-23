// function bubbleSort(array) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 1; j < array.length; j++) {
//         if (array[j-1] > array[j]) {
//           swap(array, j-1, j);
//           counter++;
//         }
//       }
//     }
//     console.log(counter);
//     return array;
//
// }
//
// function swap(array, index1, index2) {
//   let temp = array[index1];
//   array[index1] = array[index2];
//   array[index2] = temp;
// }

// class BubbleSort {
//   constructor(array) {
//     this.array = array;
//     this.counter = 0;
//   }

function bubbleSort(array) {
  let counter = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
        counter++;
      }
    }
  }
  console.log(counter);
  return array;
}

function swap(array, index1, index2) {
  // let temp = array[index1];
  // array[index1] = array[index2];
  // array[index2] = temp;
  [[array[index1]],[array[index2]]] = [[array[index2]], [array[index1]]];
}



//FANCY
// bubbleSort = (array) => {
//   let switched = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i+1]) {
//       swap(array, i);
//       switched = true;
//     }
//   }
//   if (switched) {
//     return bubbleSort(arr);
//   }
//   return arr;
// }
// swap = (arr, i) => {
//   [[arr[i]], arr[i+1]] = [arr[i+1], arr[i]];
// }
