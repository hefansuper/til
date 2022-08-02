// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

// 升序数组，删除数组中重复项目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 快指针找新数组的值，慢指针是新数组来替换的点。
  let slow = 0
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[slow]) {
      // 需要注意的是不等的时候，慢指针的运行方式。
      // 慢指针需要先加，再复制
      slow++
      nums[slow] = nums[index]
    }
  }
  return slow + 1
};
