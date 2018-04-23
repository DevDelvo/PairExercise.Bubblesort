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

class BubbleSort {
  constructor(array) {
    this.array = array;
    this.counter = 0;
  }

  bubbleSorter() {
    var array = this.array;
      let counter = 0;
      for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
          if (array[j-1] > array[j]) {
            this.swap(array, j-1, j);
            this.counter++;
          }
        }
      }
      console.log(this.counter);
      return this.array;
  }

  swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
}
