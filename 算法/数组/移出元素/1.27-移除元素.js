// https://leetcode.cn/problems/remove-element/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 返回的是移除后数组的新长度。
var removeElement = function (nums, val) {
  // 双指针解决。

  // 快指针的寻找新的数组，慢指针指向的是新数组需要移动的位置。
  // 快指针每次都会移动，因为是for循环。
  let slow = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    // 每次不相等的时候，就将新的值往slow上面移动。
    if (element !== val) {
      nums[slow++] = element
    }

  }

  return slow
};