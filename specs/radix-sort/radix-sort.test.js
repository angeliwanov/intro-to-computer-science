/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigits(number, digits, place) {
  const result = [];
  const length = String(number).length;
  return Number(String(number).charAt(digits - 1 - place)) || 0;
  // for (let i = 0; i < digits; i++) {
  //   if (length < i + 1) {
  //     result.unshift(0);
  //   } else {
  //     result.unshift(Number(String(number).charAt(length - 1 - i)));
  //   }
  // }
  // return result;
}

function radixSort(array) {
  //find longest number
  const highestNum = Math.max(...array);
  //calculate buckets
  const numDigits = String(highestNum).length;
  //loop over the array as many times as the length of the largest number
  for (let i = 0; i < numDigits; i++) {
    //create array with 10 empty arrays to be used as buckets
    const sortedArray = Array(10)
      .fill()
      .map(() => []);
    //loop through the array and enqueue the numbers to buckets
    while (array.length) {
      const length = String(array[0]).length;
      const bucket = Number(String(array[0]).charAt(length - 1 - i)) || 0;
      sortedArray[bucket].push(array.shift());
    }
    //loop over ther sorted array and dequeue the buckets back to the original array
    for (let bucket of sortedArray) {
      while (bucket.length) {
        array.push(bucket.shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    // console.log(ans);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    // console.log(ans);
    expect(ans).toEqual(nums.sort());
  });
});
