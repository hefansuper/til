// https://leetcode.cn/problems/squares-of-a-sorted-array/

// 有序数组的平方。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 老数组的开头。
  let i = 0;
  // 老数组的结尾。
  let j = nums.length - 1;

  let ans = new Array(nums.length - 1)
  let h = nums.length - 1;

  while (i <= j) {
    if (nums[i] * nums[i] <= nums[j] * nums[j]) {
      ans[h--] = nums[j] * nums[j]
      j--;
    } else {
      ans[h--] = nums[i] * nums[i];
      i++
    }
  }
  return ans
};
