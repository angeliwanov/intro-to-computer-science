/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  //base case
  if (nums.length < 2) return nums;
  //split array into two
  const middle = Math.floor(nums.length / 2);
  const leftNums = nums.slice(0, middle);
  const rightNums = nums.slice(middle);
  //recursive call to split the array to single elements
  const sortedLeft = mergeSort(leftNums);
  const sortedRight = mergeSort(rightNums);
  //sort and merge back the elements
  return merge(sortedLeft, sortedRight);
};

merge = (left, right) => {
  const sorted = [];
  //loop until one of the arrays is empty
  while (left.length && right.length) {
    //insert the lower of the first two items in the sorted array
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  //concat sorted numbers with what is left unsorted
  return sorted.concat(left, right);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
