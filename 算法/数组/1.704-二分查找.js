// 二分查找 https://leetcode.cn/problems/binary-search/


// 有序数组且不重复的数组，就可以使用二分查找。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 注意这个地方的小于等于，而不是小于。
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};