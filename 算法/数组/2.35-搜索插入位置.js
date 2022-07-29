https://leetcode.cn/problems/search-insert-position/submissions/

// 边界判断+二分查找。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 1：小于等于最小值
  if (target < nums[0]) {
    return 0
  }
  // 2: 大于等于最大值
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  // 3: 二分判断是否存在。
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right + 1;
};